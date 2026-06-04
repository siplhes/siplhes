import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { randomUUID } from "node:crypto"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

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

  const s3 = new S3Client({
    region: config.s3.region,
    credentials: {
      accessKeyId: config.s3.accessKey,
      secretAccessKey: config.s3.secretKey,
    },
  })

  await s3.send(
    new PutObjectCommand({
      Bucket: config.s3.bucket,
      Key: key,
      Body: file.data,
      ContentType: mime || "image/png",
    })
  )

  const url = `https://${config.s3.bucket}.s3.${config.s3.region}.amazonaws.com/${key}`

  return { url }
})
