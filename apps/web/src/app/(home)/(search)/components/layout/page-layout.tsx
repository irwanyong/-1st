import type { ReactNode } from "react"

import { Box, HStack, VStack } from "@1st/components/chakra"

type PageRootProps = {
  children: ReactNode
}

type RestaurantsRootProps = {
  children: ReactNode
}

type FilterRootProps = {
  children: ReactNode
}

export const PageRoot = (props: PageRootProps) => (
  <HStack
    align="stretch"
    as="main"
    gap={8}
    h={"full"}
    justify={"stretch"}
  >
    {props.children}
  </HStack>
)

export const RestaurantsRoot = (
  props: RestaurantsRootProps,
) => (
  <Box
    bg={"gray.300/30"}
    borderRadius={"xl"}
    my={6}
    overflow={"hidden"}
    p={6}
    shadow={"xl"}
    w={"600px"}
  >
    <VStack
      align="stretch"
      gap={6}
      h={"full"}
      overflow={"auto"}
    >
      {props.children}
    </VStack>
  </Box>
)

export const FilterRoot = (props: FilterRootProps) => (
  <Box flexGrow={1} mt={6}>
    {props.children}
  </Box>
)
