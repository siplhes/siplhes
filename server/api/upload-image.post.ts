import { put } from "@vercel/blob"
import { randomUUID } from "node:crypto"

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  if (!form) throw createError({ statusCode: 400, statusMessage: "No data received" })

  const file = form.find((f) => f.name === "file")
  if (!file || !file.data || file.data.length === 0)
    throw createError({ statusCode: 400, statusMessage: "No file uploaded" })

  // Validate it's an image by checking MIME type
  const mime = file.type || ""
  if (mime && !mime.startsWith("image/"))
    throw createError({ statusCode: 400, statusMessage: "Only image files allowed" })

  // Filename: preserve original extension
  const ext = file.filename?.split(".").pop() || "png"
  const key = `portfolio/${randomUUID()}.${ext}`

  const blob = await put(key, file.data, {
    access: "public",
    contentType: mime || "image/png",
  })

  return { url: blob.url }
})
