import {
  Box,
  Container,
  VStack,
} from "@1st/components/chakra"

export default function HomeLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <VStack align={"stretch"} gap={0} h={"100vh"}>
      {/*
      <Box borderBottom={"sm"} borderColor={"gray.300"}>
        <Header />
      </Box>
      */}
      <Box flexGrow={1} overflow={"hidden"}>
        <Container h={"full"}>{children}</Container>
      </Box>
    </VStack>
  )
}

/*
const Header = () => (
  <Container>
    <HStack
      align={"baseline"}
      as="header"
      justify={"space-between"}
      py={4}
      w={"full"}
    >
      <HStack gap={4}>
        <Box
          color={"tomato"}
          fontSize={"xl"}
          fontWeight={"bold"}
        >
          OmNomNom
        </Box>
        <Box>Location</Box>
      </HStack>
      <HStack as="nav" gap={4}>
        <Box>Sign In</Box>
      </HStack>
    </HStack>
  </Container>
)
*/
