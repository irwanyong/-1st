import { isEmpty } from "@1st/dash"

import type { SearchRestaurantsQuery } from "@/api/restaurants/restaurants-api-types"
import { apiSDK } from "@/lib/api-sdk"

export const searchRestaurants = async (
  query: SearchRestaurantsQuery = undefined,
) => {
  const { data, error } =
    await apiSDK.restaurants.search.get({
      query: isEmpty(query) ? undefined : query,
    })

  if (data) {
    return data
  }

  throw error
}
