# Project Setup
This guide provides the essential steps to set up and start developing the project.

## Requirements
- [Bun](https://bun.com/docs/installation) (JavaScript runtime and package manager)
- [Neon](https://neon.com/) account for PostgreSQL database

## Toolchain
- **Platform**: [Bun](https://bun.com/), [Neon](https://neon.com/), [Better Auth](https://www.better-auth.com/), [Pulumi](https://www.pulumi.com/)
- **Backend**: [ElysiaJS](https://elysiajs.com/), [Drizzle ORM](https://orm.drizzle.team/)
- **Frontend**: [React](https://react.dev/), [Next.js](https://nextjs.org/), [TanStack](https://tanstack.com/), [react-use](https://github.com/streamich/react-use), [Chakra UI](https://chakra-ui.com/)
- **Utilities**: [Lodash](https://lodash.com/), [date-fns](https://date-fns.org/), [Type-Fest](https://github.com/sindresorhus/type-fest), [TypeScript](https://www.typescriptlang.org/)

## Setup Instructions

### 1. Install Bun
```shell
brew install oven-sh/bun/bun
```

### 2. Install Dependencies
```shell
bun bootstrap
```

### 3. Configure Environment Variables
- Development:
```shell
cp .env.example .env
```
- Testing:
```shell
cp .env.example .env.test
```

### 4. Database Setup
- Create a database at [Neon Console](https://console.neon.tech/app/).
- Edit `.env` and set the `DATABASE` variable with your Neon connection string.
- Apply migrations:
  ```shell
  bun run --filter "@1st/database" db:migrate
  ```
- Seed database (optional):
  ```shell
  bun run --filter "@1st/database" db:seed
  ```
- Reset database (optional):
  ```shell
  bun run --filter "@1st/database" db:reset
  ```

## Development

Start all apps in `dev` mode:
```shell
bun run --filter='./apps/*' dev
```

Start `api` in `dev` mode:
```shell
bun run --filter "@1st/api" dev
```

Start `web` in `dev` mode:
```shell
bun run --filter "@1st/web" dev
```

## Production

### All At Once
1. Build all apps
```shell
   bun run --filter='./apps/*' build
```
2. Start all apps in `prod` mode:
```shell
bun run --filter='./apps/*' start
```

### Individual Run

1. Start `api` in `prod` mode:
```shell
bun run --filter "@1st/api" start
```
2. Build `web`
```shell
bun run --filter "@1st/web" build
```
3. Start `web` in `prod` mode:
```shell
bun run --filter "@1st/web" start
```