import { Elysia } from "elysia"
import { Fp, Zod } from "@1st/dash"
import { getHello } from "@/test"

export const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get(
    "/id/:id",
    ({ params: { id } }) => {
      console.log(Fp.isInteger(id))
      return id
    },
    {
      params: Zod.object({
        id: Zod.coerce.number(),
      }),
    },
  )
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port} ${getHello()}`,
)
