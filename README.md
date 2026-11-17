# Siplhes

## Image storage

Admin image uploads are stored as public blobs in Vercel Blob. From the project
directory, link this repository to the correct Vercel project, then create and
connect a Blob store:

```sh
vercel link
vercel blob create-store siplhes-images --access public --yes
vercel env pull
```

The store connection provides `BLOB_READ_WRITE_TOKEN` for local development and
Vercel deployments. Keep the token out of source control; `.env.local` is
gitignored.