import { z } from "@1st/dash/zod"
import { orm, schema } from "@1st/database/drizzle"

const restaurantSelectSchema = orm.createSelectSchema(
  schema.restaurants,
)

export const restaurantSearchQuerySchema = z.object({
  search: restaurantSelectSchema.shape.name
    .optional()
    .nullable(),
})
