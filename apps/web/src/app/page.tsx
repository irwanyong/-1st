import {
  Blockquote,
  Box,
} from "@1st/react-toolkit/components"

export default function Home() {
  return (
    <Box as="main">
      <Blockquote.Root>
        <Blockquote.Content cite="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <Blockquote.Caption>
          <cite>Uzumaki Naruto</cite>
        </Blockquote.Caption>
      </Blockquote.Root>
    </Box>
  )
}
