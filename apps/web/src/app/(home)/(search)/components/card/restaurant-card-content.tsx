import NextLink from "next/link"
import type { ReactNode } from "react"

import {
  Badge,
  Card,
  HStack,
  Image,
  Link,
  Text,
} from "@1st/components/chakra"
import { LuExternalLink } from "@1st/components/icons"
import { map } from "@1st/dash"
import { format } from "@1st/dash/time"

import type { SearchRestaurant } from "@/api/restaurants/restaurants-api-types"

export const Logo = ({
  src,
  alt,
}: {
  src: string
  alt: string
}) => (
  <Image alt={alt} h="130px" objectFit="cover" src={src} />
)

export const Title = ({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) => (
  <Card.Title fontSize="2xl">
    <Link asChild target="_blank" variant="underline">
      <NextLink href={href}>
        {children} <LuExternalLink />
      </NextLink>
    </Link>
  </Card.Title>
)

export const AvailabilityBadge = ({
  startDate,
  endDate,
}: {
  startDate: Date
  endDate: Date
}) => (
  <Badge
    colorPalette="orange"
    key={`${startDate}-${endDate}`}
    suppressHydrationWarning
  >
    <HStack fontSize="xs" gap={1}>
      <Text>{format("eeeeee p")(startDate)}</Text>
      <Text>{format("eeeeee p")(endDate)}</Text>
    </HStack>
  </Badge>
)

export const Availability = ({
  slots,
}: {
  slots: SearchRestaurant["availability"]
}) => (
  <>
    {map(
      (availability) => (
        <AvailabilityBadge
          endDate={availability.endDate}
          key={`${availability.startDate}-${availability.endDate}`}
          startDate={availability.startDate}
        />
      ),
      slots,
    )}
  </>
)

export const Description = ({
  children,
}: {
  children: ReactNode
}) => (
  <Card.Description lineClamp="2">
    {children}
  </Card.Description>
)
