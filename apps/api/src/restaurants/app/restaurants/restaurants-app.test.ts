import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
} from "bun:test"

import { treaty } from "@elysiajs/eden"

import { reset, seed } from "@1st/database/drizzle"

import { restaurantsApp } from "./restaurants-app"

const api = treaty(restaurantsApp)

describe("Restaurant API", () => {
  afterEach(async () => {
    await reset()
  })

  describe("when empty query", () => {
    beforeEach(async () => {
      await seed()
    })

    test("should return restaurants", async () => {
      const response = await api.restaurants.search.get()

      expect(response.data).not.toBeEmpty()
    })
  })
})
