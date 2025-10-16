"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import {
  Button,
  Field,
  HStack,
  Input,
} from "@1st/components/chakra"

import { buildQueryString } from "@/lib/route-utils"

type RestaurantsFilterProps = {
  query: {
    search?: string
  }
}

export const RestaurantsFilter = (
  props: RestaurantsFilterProps,
) => {
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState(
    props.query.search ?? "",
  )

  const handleApply = () =>
    router.push(
      `${pathname}?${buildQueryString({ search })}`,
    )

  return (
    <HStack align="stretch" gap={2}>
      <Field.Root>
        <Input
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search"
          value={search}
        />
      </Field.Root>
      <Button onClick={handleApply}>Apply</Button>
    </HStack>
  )
}
