import { DataSource } from 'typeorm';
import { CoffeeRefactor1701443388099 } from './src/migrations/1701443388099-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1701443997667 } from './src/migrations/1701443997667-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1701443388099, SchemaSync1701443997667],
});

// Creating a TypeOrm Migration
// npx typeorm migration:create src/migrations/CoffeeRefactor

// /* RUNNING MIGRATIONS */
//
// /**
//  * 💡 Remember 💡
//  * You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
//  * before a Migration can run, it needs compilated files.
//  */
//
// // Compile project first
// npm run build
//
// // Run migration(s)
// npx typeorm migration:run -d dist/typeorm-cli.config
//
// // REVERT migration(s)
// npx typeorm migration:revert -d dist/typeorm-cli.config
//
// // Let TypeOrm generate migrations (for you)
// npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config
