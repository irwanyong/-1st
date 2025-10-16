import { faker } from "@faker-js/faker"

import { flow, times } from "@1st/dash"

import { seed } from "../drizzle/drizzle"

await seed().refine((f) => ({
  restaurantMenuItems: {
    columns: {
      currency: f.valuesFromArray({
        values: ["USD"],
      }),
      description: f.loremIpsum({ sentencesCount: 1 }),
      imageUrl: f.string({ isUnique: true }),
      name: f.string({ isUnique: true }),
      price: f.number({
        maxValue: 50,
        minValue: 10,
        precision: 100,
      }),
    },
  },
  restaurantMenus: {
    columns: {
      description: f.loremIpsum({ sentencesCount: 1 }),
      title: f.valuesFromArray({
        values: [
          "All Day Menu",
          "Dinner Menu",
          "Lunch Specials",
        ],
      }),
    },
    with: {
      restaurantMenuItems: 3,
    },
  },
  restaurants: {
    columns: {
      availability: f.default({
        defaultValue: times(
          flow([
            () =>
              faker.date.between({
                from: "2025-01-01",
                to: "2025-12-31",
              }),
            (startDate) => ({
              endDate: new Date(
                startDate.getTime() +
                  faker.number.int({ max: 30, min: 1 }) *
                    24 *
                    60 *
                    60 *
                    1000,
              ),
              startDate,
            }),
          ]),
          faker.number.int({ max: 3, min: 1 }),
        ),
      }),
      description: f.loremIpsum({ sentencesCount: 5 }),
      gallery: f.default({
        defaultValue: times(
          () => ({
            createdAt: faker.date.between({
              from: "2020-01-01",
              to: new Date(),
            }),
            url: faker.image.urlPicsumPhotos({
              height: 1024,
              width: 1024,
            }),
          }),
          faker.number.int({ max: 5, min: 1 }),
        ),
      }),
      location: f.point({
        maxXValue: 180,
        maxYValue: 90,
        minXValue: -180,
        minYValue: -90,
      }),
      logoUrl: f.default({
        defaultValue: faker.image.urlPicsumPhotos({
          height: 1024,
          width: 1024,
        }),
      }),
      name: f.companyName(),
    },
    count: 100,
    with: {
      restaurantMenus: 2,
    },
  },
}))
