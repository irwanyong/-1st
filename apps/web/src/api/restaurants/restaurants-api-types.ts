import "server-only"

import type { Treaty } from "@elysiajs/eden"

import type { apiSDK } from "@/lib/api-sdk"

export type SearchRestaurant = Treaty.Data<
  typeof apiSDK.restaurants.search.get
>[number]

export type SearchRestaurantsQuery = NonNullable<
  Parameters<typeof apiSDK.restaurants.search.get>[0]
>["query"]
