import { drizzle } from "drizzle-orm/neon-http"
import { drizzleConfig } from "@/drizzle/drizzle-config"
import * as Schema from "@/drizzle/drizzle-schema"

export const _drizzle = drizzle(
  drizzleConfig.dbCredentials.url,
  {
    casing: drizzleConfig.casing,
    schema: Schema,
  },
)
