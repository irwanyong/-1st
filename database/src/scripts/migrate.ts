import { neonConfig } from "@neondatabase/serverless"

import { migrate } from "../drizzle/drizzle"

neonConfig.poolQueryViaFetch = true

await migrate()
