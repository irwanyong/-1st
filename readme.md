# Project Setup
This guide provides the essential steps to set up and start developing the project.

## Requirements
- [Bun](https://bun.com/docs/installation) (JavaScript runtime and package manager)
- [Neon](https://neon.com/) account for PostgreSQL database

## Toolchain
- **Platform**: [Bun](https://bun.com/), [Neon](https://neon.com/), [Better Auth](https://www.better-auth.com/), [Pulumi](https://www.pulumi.com/)
- **Backend**: [ElysiaJS](https://elysiajs.com/), [Drizzle ORM](https://orm.drizzle.team/)
- **Frontend**: [React](https://react.dev/), [TanStack](https://tanstack.com/), [react-use](https://github.com/streamich/react-use)
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

### 3. Configure Neon Database
1. Create a database at [Neon Console](https://console.neon.tech/app/).
2. Copy the environment file:
   ```shell
   cp database/.env.example database/.env
   ```
3. Edit `database/.env` and set the `DATABASE` variable with your Neon connection string:
   ```env
   DATABASE=postgres://<user>:<password>@<host>/<database>?sslmode=require
   ```

### 4. Database Setup
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