import { Elysia } from "elysia"

import { RestaurantsService } from "../services/restaurants.service"
import { restaurantMenuApp } from "./restaurant-menus.app"

export const restaurantsApp = new Elysia({
  prefix: "/restaurants",
})
  .use(restaurantMenuApp)
  .get("/search", async () => {
    return RestaurantsService.search()
  })
