import type { z } from "@1st/dash/zod"
import { drizzle, orm, schema } from "@1st/database/drizzle"

import type { RestaurantsModel } from "../models/restaurants-model"

export const searchRestaurants = (
  search: z.infer<typeof RestaurantsModel.schema.query>,
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
