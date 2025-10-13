import { Database } from "@1st/database"

const searchRestaurants = async () => {
  return Database.drizzle
    .select()
    .from(Database.schema.restaurants)
}

export const RestaurantsService = {
  search: searchRestaurants,
}
