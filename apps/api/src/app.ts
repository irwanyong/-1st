import { Elysia } from "elysia"

import { restaurantsApp } from "./restaurants/app/restaurants/restaurants-app"

export const app = new Elysia().use(restaurantsApp)
