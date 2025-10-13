import * as DrizzleUtil from "drizzle-orm"
import { migrate } from "drizzle-orm/neon-http/migrator"
import { reset, seed } from "drizzle-seed"
import * as DrizzleZod from "drizzle-zod"

import { Fp } from "@1st/dash"

import { drizzle } from "../drizzle/drizzle"
import { drizzleConfig } from "../drizzle/drizzle-config"
import * as schema from "../drizzle/drizzle-schema"

export const Database = {
  drizzle,
  migrate: Fp.partial(migrate, [
    drizzle,
    { migrationsFolder: drizzleConfig.out ?? "" },
  ]),
  reset: Fp.partial(reset, [drizzle, schema]),
  schema,
  seed: Fp.partial(seed, [drizzle, schema]),
  util: Fp.assignAll([{}, DrizzleUtil, DrizzleZod]),
}
