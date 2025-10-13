import { Elysia } from "elysia"

export const restaurantMenuApp = new Elysia({
  prefix: "/:restaurantId/menus",
}).get("/", () => {
  return []
})
