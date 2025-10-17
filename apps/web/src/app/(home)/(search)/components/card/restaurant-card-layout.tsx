import type { ReactNode } from "react"

import {
  Card,
  Flex,
  HStack,
  VStack,
} from "@1st/components/chakra"

export const Root = ({
  children,
}: {
  children: ReactNode
}) => <Card.Root>{children}</Card.Root>

export const Content = ({
  children,
}: {
  children: ReactNode
}) => (
  <Card.Body>
    <VStack align="stretch" gap={4}>
      {children}
    </VStack>
  </Card.Body>
)

export const Header = ({
  children,
}: {
  children: ReactNode
}) => (
  <VStack align="stretch" justify="stretch">
    {children}
  </VStack>
)

export const AvailabilityContainer = ({
  children,
}: {
  children: ReactNode
}) => (
  <Flex gap={2} wrap="wrap">
    {children}
  </Flex>
)

export const Actions = ({
  children,
}: {
  children: ReactNode
}) => (
  <Card.Footer>
    <HStack gap={2} w="full">
      {children}
    </HStack>
  </Card.Footer>
)
