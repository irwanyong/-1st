import path from "node:path"

import dotenv from "dotenv"

const envTestPath = path.resolve(
  import.meta.dir,
  "../../../.env.test",
)
const defaultEnvPath = path.resolve(
  import.meta.dir,
  "../../../.env",
)
const envPath =
  Bun.env.NODE_ENV === "test" ? envTestPath : defaultEnvPath

if (await Bun.file(envPath).exists()) {
  console.log(`Loading env from ${envPath}\n`)
}

const { parsed } = dotenv.config({
  path: envPath,
  quiet: true,
})

export const Env = {
  ...Bun.env,
  ...parsed,
}
