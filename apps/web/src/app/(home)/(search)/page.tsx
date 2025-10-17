import { map } from "@1st/dash"

import { searchRestaurants } from "@/api/restaurants/restaurants-api"
import { RestaurantCard } from "@/app/(home)/(search)/components/card"
import { RestaurantsFilter } from "@/app/(home)/(search)/components/filter"
import {
  FilterRoot,
  PageRoot,
  RestaurantsRoot,
} from "@/app/(home)/(search)/components/layout/page-layout"
import { submitFilter } from "@/app/(home)/(search)/lib/filter-action"

export default async function Home(props: PageProps<"/">) {
  const query = await props.searchParams
  const restaurants = await searchRestaurants(query)

  return (
    <PageRoot>
      <RestaurantsRoot>
        {map(
          (restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ),
          restaurants,
        )}
      </RestaurantsRoot>
      <FilterRoot>
        <RestaurantsFilter
          defaultQuery={query}
          onSubmit={submitFilter}
        />
      </FilterRoot>
    </PageRoot>
  )
}
