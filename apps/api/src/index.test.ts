import { describe, it } from "bun:test"
import { treaty } from "@elysiajs/eden"
import { Elysia } from "elysia"
import { Fp, Zod } from "@1st/dash"

const _authPlugin = new Elysia({ name: "auth-plugin" })
  .guard({
    headers: Zod.object({
      authorization: Zod.jwt(),
    }),
  })
  .derive(({ headers }) => {
    const authorization = headers.authorization

    return {
      authorization,
    }
  })
  .decorate("findUserByAuth", (token: string) => {
    return {
      user: token,
    }
  })
  .as("scoped")

describe("Elysia", () => {
  it("test", async () => {
    const app = new Elysia()
      // .use(authPlugin)
      .get(
        "/test/:id",
        ({ params }) => {
          console.log(Fp.isInteger(params.id))
          return {
            test: "hello",
          }
        },
        {
          params: Zod.object({
            id: Zod.coerce.number(),
          }),
        },
      )
    const api = treaty(app)

    const { data, error } = await api
      .test({
        id: "5",
      })
      .get({
        headers: {
          authorization: "Bearer 123",
        },
      })

    console.log("test:data", data)
    console.log("test:error", error)
  })
})
