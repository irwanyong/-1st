import { Elysia } from "elysia"

import { RestaurantsService } from "./restaurants.service"

export const restaurantsApp = new Elysia({
  prefix: "/restaurants",
}).get("/search", async () => {
  return RestaurantsService.search()
})
