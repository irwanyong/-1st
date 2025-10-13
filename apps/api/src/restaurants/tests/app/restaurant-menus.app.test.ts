import { afterEach, describe, expect, test } from "bun:test"

import { treaty } from "@elysiajs/eden"

import { Database } from "@1st/database"

import { restaurantsApp } from "../../app/restaurants.app"

const api = treaty(restaurantsApp)

describe("Restaurant Menus API", () => {
  afterEach(async () => {
    await Database.reset()
  })

  describe("when menu empty", () => {
    test("should return empty menus", async () => {
      const response = await api
        .restaurants({ restaurantId: "89sdi" })
        .menus.get()

      expect(response.data).toBeEmpty()
    })
  })
})
