"use client"

import {
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react"

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function UiToolkitProvider({
  children,
  ...colorModProps
}: ColorModeProviderProps) {
  return (
    <ColorModeProvider {...colorModProps}>
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  )
}
