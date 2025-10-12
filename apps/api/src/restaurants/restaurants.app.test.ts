import {
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
} from "bun:test"

import { treaty } from "@elysiajs/eden"

import { Database } from "@1st/database"

import { app } from "@/app"

const api = treaty(app)

describe("Restaurant API", () => {
  beforeAll(async () => {
    await Database.reset()
    await Database.seed()
  })

  afterAll(async () => {
    await Database.reset()
  })

  test("should get restaurants list", async () => {
    const response = await api.restaurants.search.get()
    console.log(response)
    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBe(true)
  })
})
