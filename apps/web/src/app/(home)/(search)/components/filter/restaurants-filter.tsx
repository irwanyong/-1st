import {
  Field,
  HStack,
  Input,
} from "@1st/components/chakra"

import { SubmitButton } from "@/components/submit-button"

type RestaurantsFilterProps = {
  defaultQuery: {
    search?: string
  }
  onSubmit: (fromData: FormData) => void
}

export const RestaurantsFilter = (
  props: RestaurantsFilterProps,
) => {
  return (
    <HStack align={"stretch"} asChild gap={2}>
      <form action={props.onSubmit}>
        <Field.Root>
          <Input
            defaultValue={props.defaultQuery.search ?? ""}
            name="search"
            placeholder="Search"
          />
        </Field.Root>
        <SubmitButton>Apply</SubmitButton>
      </form>
    </HStack>
  )
}
