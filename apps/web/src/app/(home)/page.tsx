import { VStack } from "@1st/components/chakra"

import { searchRestaurants } from "@/api/restaurants/restaurants-api"
import { RestaurantsFilter } from "@/app/(home)/components/filter/restaurants-filter"
import { Restaurants } from "@/app/(home)/components/list/restaurants"

export default async function Home(props: PageProps<"/">) {
  const query = await props.searchParams
  const restaurants = await searchRestaurants(query)

  return (
    <VStack align="stretch" as="main" gap={6}>
      <RestaurantsFilter query={query} />
      <Restaurants restaurants={restaurants} />
    </VStack>
  )
}
