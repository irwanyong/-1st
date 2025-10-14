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