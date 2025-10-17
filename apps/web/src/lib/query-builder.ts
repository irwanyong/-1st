import { eq, isEmpty, negate, pickBy } from "@1st/dash"

export const buildQueryString = <T extends object>(
  filter: T,
) => {
  const query = new URLSearchParams(
    pickBy(negate(isEmpty), filter),
  )
  return eq(query.size, 0) ? "" : query.toString()
}
