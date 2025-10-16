import { Elysia } from "elysia"

import { restaurantSearchQuerySchema } from "../../models/restaurants-model"
import { searchRestaurants } from "../../services/restaurants-service.ts"
import { restaurantMenuApp } from "../restaurant-menus/restaurant-menus-app"

export const restaurantsApp = new Elysia({
  prefix: "/restaurants",
})
  .use(restaurantMenuApp)
  .get(
    "/search",
    async ({ query }) => {
      return searchRestaurants(query)
    },
    {
      query: restaurantSearchQuerySchema,
    },
  )
