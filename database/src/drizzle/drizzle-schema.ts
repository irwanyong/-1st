import { relations, sql } from "drizzle-orm"
import * as t from "drizzle-orm/pg-core"

const identifierColumn = t
  .uuid()
  .default(sql`uuidv7()`)
  .primaryKey()

const timestampColumns = {
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t.timestamp(),
}

export const restaurants = t.pgTable("restaurants", {
  availability: t
    .json()
    .$type<
      Array<{
        startDate: Date
        endDate: Date
      }>
    >()
    .default([]),
  description: t.text(),
  gallery: t
    .json()
    .$type<
      Array<{
        url: string
        createdAt: Date
      }>
    >()
    .default([]),
  id: identifierColumn,
  location: t.point().notNull(), // @todo: Do we need a separate column for Country, City, etc?
  logoUrl: t.varchar({ length: 1024 }).notNull(),
  name: t.varchar({ length: 256 }).notNull(),
  ...timestampColumns,
})
export const restaurantRelations = relations(
  restaurants,
  ({ many }) => ({
    menus: many(restaurantMenus),
  }),
)

export const restaurantMenus = t.pgTable(
  "restaurant_menus",
  {
    description: t.text(),
    id: identifierColumn,
    restaurantId: t.uuid().notNull(),
    title: t.varchar({ length: 256 }).notNull(), // "All Day", "Dinner Menu"
    ...timestampColumns,
  },
  (restaurantMenus) => [
    t
      .foreignKey({
        columns: [restaurantMenus.restaurantId],
        foreignColumns: [restaurants.id],
      })
      .onDelete("cascade")
      .onUpdate("cascade"),
  ],
)
export const restaurantMenuRelations = relations(
  restaurantMenus,
  ({ many }) => ({
    items: many(restaurantMenuItems),
  }),
)

export const restaurantMenuItems = t.pgTable(
  "restaurant_menu_items",
  {
    currency: t.varchar({ length: 3 }).default("USD"),
    description: t.text().notNull(),
    id: identifierColumn,
    imageUrl: t.varchar({ length: 1024 }),
    menuId: t.uuid().notNull(),
    name: t.varchar({ length: 256 }).notNull(),
    price: t
      .decimal({
        precision: 10,
        scale: 2,
      })
      .notNull(),
    restaurantId: t.uuid().notNull(),
    ...timestampColumns,
  },
  (restaurantMenuItems) => [
    t
      .foreignKey({
        columns: [restaurantMenuItems.menuId],
        foreignColumns: [restaurantMenus.id],
      })
      .onDelete("cascade")
      .onUpdate("cascade"),
    t
      .foreignKey({
        columns: [restaurantMenuItems.restaurantId],
        foreignColumns: [restaurants.id],
      })
      .onDelete("cascade")
      .onUpdate("cascade"),
  ],
)
