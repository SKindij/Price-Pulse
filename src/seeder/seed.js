// @/src/seeder/seed.js
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  countriesData, drinkCategoriesData, retailChainsData
} = require('./seed-data');

// Insert data into the "countries" table
async function seedCountries(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS countries (
        country_id SERIAL PRIMARY KEY,
        country_name VARCHAR(20) NOT NULL UNIQUE,
        prefix_ean VARCHAR(7) NOT NULL
      );
    `;
    console.log('Created "countries" table');
    const insertedCountries = await Promise.all(
      countriesData.map(
        (country) => client.sql`
        INSERT INTO countries (country_name, prefix_ean)
        VALUES (${country.countryName}, ${country.prefixEAN})
      `,
      ),
    );
    console.log(`Seeded ${insertedCountries.length} countries`);
    return {
      createTable,
      countries: insertedCountries,
    };
  } catch (error) {
    console.error('Error seeding countries:', error);
    throw error;
  }
}
// Insert data into the "drink_categories" table
async function seedCategories(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS drink_categories (
        drink_id SERIAL PRIMARY KEY,
        drink_name VARCHAR(10) NOT NULL UNIQUE
      );
    `;
    console.log('Created "drink_categories" table');
    const insertedCategories = await Promise.all(
      drinkCategoriesData.map(
        (category) => client.sql`
        INSERT INTO drink_categories (drink_name)
        VALUES (${category});
      `,
      ),
    );
    console.log(`Seeded ${insertedCategories.length} categories`);
    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}
// Insert data into the "retail_chains" table
async function seedRetailChains(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS retail_chains (
        retail_chain_id SERIAL PRIMARY KEY,
        retail_chain_name VARCHAR(10) NOT NULL UNIQUE
      );
    `;
    console.log('Created "retail_chains" table');
    const insertedChains = await Promise.all(
      retailChainsData.map(
        (retail) => client.sql`
        INSERT INTO retail_chains (retail_chain_name)
        VALUES (${retail});
      `,
      ),
    );
    console.log(`Seeded ${insertedChains.length} chains`);
    return {
      createTable,
      chains: insertedChains,
    };
  } catch (error) {
    console.error('Error seeding chains:', error);
    throw error;
  }
}





async function main() {
  const client = await db.connect();

  await seedCountries(client);
  await seedCategories(client);
  await seedRetailChains(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

