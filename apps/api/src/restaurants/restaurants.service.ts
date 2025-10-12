import { Database } from "@1st/database"

const searchRestaurants = async () => {
  console.log(
    await Database.drizzle
      .select()
      .from(Database.schema.restaurants),
  )
  return []
}

export const RestaurantsService = {
  search: searchRestaurants,
}
