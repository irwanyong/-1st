import { migrate } from "drizzle-orm/neon-http/migrator"
import { reset, seed } from "drizzle-seed"
import { Fp } from "@1st/dash"
import { _drizzle } from "@/drizzle/drizzle"
import { drizzleConfig } from "@/drizzle/drizzle-config"
import * as Schema from "@/drizzle/drizzle-schema"

export const Database = {
  drizzle: _drizzle,
  migrate: Fp.partial(migrate, [
    _drizzle,
    {
      migrationsFolder: drizzleConfig.out ?? "",
    },
  ]),
  reset: Fp.partial(reset, [_drizzle, Schema]),
  schema: Schema,
  seed: Fp.partial(seed, [_drizzle, Schema]),
}
