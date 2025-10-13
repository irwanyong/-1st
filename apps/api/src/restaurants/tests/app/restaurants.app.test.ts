import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
} from "bun:test"

import { treaty } from "@elysiajs/eden"

import { Database } from "@1st/database"

import { restaurantsApp } from "../../app/restaurants.app"

const api = treaty(restaurantsApp)

describe("Restaurant API", () => {
  afterEach(async () => {
    await Database.reset()
  })

  describe("when empty query", () => {
    beforeEach(async () => {
      await Database.seed()
    })

    test("should return restaurants", async () => {
      const response = await api.restaurants.search.get()

      expect(response.data).not.toBeEmpty()
    })
  })
})
