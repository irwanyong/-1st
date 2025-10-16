"use client"

import {
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react"

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export const ThemeProvider = ({
  children,
  ...colorModProps
}: ColorModeProviderProps) => (
  <ColorModeProvider {...colorModProps}>
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  </ColorModeProvider>
)
