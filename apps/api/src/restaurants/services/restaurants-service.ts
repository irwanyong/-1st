import type { z } from "@1st/dash/zod"
import { drizzle, orm, schema } from "@1st/database/drizzle"

import type { restaurantSearchQuerySchema } from "../models/restaurants-model.ts"

export const searchRestaurants = (
  search: z.infer<typeof restaurantSearchQuerySchema>,
) => {
  return drizzle
    .select()
    .from(schema.restaurants)
    .where(
      search.search
        ? orm.ilike(
            schema.restaurants.name,
            `${search.search}%`,
          )
        : undefined,
    )
}
