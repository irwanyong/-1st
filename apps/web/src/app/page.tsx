"use client"

import { Blockquote, Box } from "@1st/ui-toolkit"

export default function Home() {
  return (
    <Box as="main">
      <Blockquote.Root>
        <Blockquote.Content cite="https://" />
        <Blockquote.Caption>
          <cite>Uzumaki Naruto</cite>
        </Blockquote.Caption>
      </Blockquote.Root>
    </Box>
  )
}
