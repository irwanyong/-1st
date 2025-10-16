import { VStack } from "@1st/components/chakra"

import { searchRestaurants } from "@/api/restaurants/restaurants-api.ts"
import { Restaurants } from "@/app/(home)/restaurants"
import { RestaurantsFilter } from "@/app/(home)/restaurants-filter"

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
