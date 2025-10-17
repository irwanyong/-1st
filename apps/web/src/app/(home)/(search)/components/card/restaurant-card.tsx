import { map } from "@1st/dash"

import type { SearchRestaurant } from "@/api/restaurants/restaurants-api-types"

import {
  Action,
  actionMap,
} from "./restaurant-card-actions"
import {
  Availability,
  Description,
  Logo,
  Title,
} from "./restaurant-card-content"
import {
  Actions,
  AvailabilityContainer,
  Content,
  Header,
  Root,
} from "./restaurant-card-layout"

type RestaurantCardProps = {
  restaurant: SearchRestaurant
}

export const RestaurantCard = ({
  restaurant,
}: RestaurantCardProps) => (
  <Root>
    <Content>
      <Logo
        alt={restaurant.name}
        src={restaurant.logoUrl}
      />
      <Header>
        <Title href={`/${restaurant.id}`}>
          {restaurant.name}
        </Title>
        <AvailabilityContainer>
          <Availability slots={restaurant.availability} />
          <Description>
            {restaurant.description}
          </Description>
        </AvailabilityContainer>
      </Header>
    </Content>
    <Actions>
      {map(
        ([key, config]) => (
          <Action
            colorPalette={config.colorPalette}
            icon={config.icon}
            key={key}
            onClick={config.onClick}
            variant={config.variant}
          />
        ),
        Object.entries(actionMap),
      )}
    </Actions>
  </Root>
)
