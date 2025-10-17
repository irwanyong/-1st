import type { ReactNode } from "react"

import type { IconButtonProps } from "@1st/components/chakra"
import { IconButton } from "@1st/components/chakra"
import {
  BiFoodMenu,
  FaEye,
  MdOutlineBookmarkAdd,
  TbCalendarClock,
} from "@1st/components/icons"

export type ActionConfig = {
  icon: ReactNode
  colorPalette: IconButtonProps["colorPalette"]
  variant: IconButtonProps["variant"]
  onClick?: () => void
}

export const actionMap: Record<string, ActionConfig> = {
  bookmark: {
    colorPalette: "gray",
    icon: <MdOutlineBookmarkAdd />,
    variant: "outline",
  },
  menu: {
    colorPalette: "green",
    icon: <BiFoodMenu />,
    variant: "subtle",
  },
  schedule: {
    colorPalette: "blue",
    icon: <TbCalendarClock />,
    variant: "subtle",
  },
  view: {
    colorPalette: "gray",
    icon: <FaEye />,
    variant: "outline",
  },
}

export const Action = ({
  icon,
  ...props
}: Omit<IconButtonProps, "children"> & {
  icon: ReactNode
}) => (
  <IconButton flexGrow={1} size="sm" {...props}>
    {icon}
  </IconButton>
)
