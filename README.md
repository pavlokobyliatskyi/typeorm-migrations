# [TypeORM](https://typeorm.io/) Migrations 😅

*In this example I am using full paths for better understanding*

Here is a [nx](https://nx.dev/) project which has one app [cars-service](apps/cars-service).

The directory is called [database](apps/cars-service/src/database) and is located in the [cars-service](apps/cars-service) app, which is used only for working with migrations in dev and prod.

The parameters for connecting to the database are located in the [.env](.env) file in the root of the project.

In dev we work with **.ts** files in prod only with **.js**.

### Goals

- [x] Does not affect the code and can be removed at any time
- [x] Unified database connection settings
- [x] Typing support during development

---

### Dev

Creating Migrations

*Here **init** is the migration name*

```bash
npx typeorm migration:create ./apps/cars-service/src/database/migrations/init --pretty
```

Generating Migrations

*Here **cars-create-table** is the migration name*

```bash
npx ts-node-dev -P ./apps/cars-service/tsconfig.app.json ./node_modules/typeorm/cli.js migration:generate ./apps/cars-service/src/database/migrations/cars-create-table -d ./apps/cars-service/src/database/typeorm.config.ts --pretty
```

Show migration

```bash
npx ts-node-dev -P ./apps/cars-service/tsconfig.app.json ./node_modules/typeorm/cli.js migration:show -d ./apps/cars-service/src/database/typeorm.config.ts
```

Applying Migrations

```bash
npx ts-node-dev -P ./apps/cars-service/tsconfig.app.json ./node_modules/typeorm/cli.js migration:run -d ./apps/cars-service/src/database/typeorm.config.ts
```

Rolling Back Migrations

```bash
npx ts-node-dev -P ./apps/cars-service/tsconfig.app.json ./node_modules/typeorm/cli.js migration:revert -d ./apps/cars-service/src/database/typeorm.config.ts
```

### Build

*If you want to create a docker image, just create a Dockerfile and do the same*

Build the [cars-service](apps/cars-service) app

```bash
nx run cars-service:build
```

Build **typescript.config.ts** and **migrations**

```bash
npx tsc ./apps/cars-service/src/database/*.ts ./apps/cars-service/src/database/**/*.ts --outDir ./dist/apps/cars-service/database
```

### Prod

Applying Migrations

```bash
typeorm -d ./dist/apps/cars-service/database/typeorm.config.js migration:run
```

Rolling Back Migrations

```bash
typeorm -d ./dist/apps/cars-service/database/typeorm.config.js migration:revert
```

---

If the **.env** file is in a special location, use [env-cmd](https://www.npmjs.com/package/env-cmd).

```bash
./node_modules/.bin/env-cmd -f ./.env typeorm -d ./dist/apps/cars-service/database/typeorm.config.js migration:run
```


