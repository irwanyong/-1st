import { Container } from "@1st/components/chakra"

export default function HomeLayout({
  children,
}: LayoutProps<"/">) {
  return <Container py={6}>{children}</Container>
}
