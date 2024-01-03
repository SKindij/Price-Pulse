// @/src/seeder/seed.js
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  countriesData, drinkCategoriesData, retailChainsData,  beveragesData,
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
        drink_category VARCHAR(10) NOT NULL UNIQUE
      );
    `;
    console.log('Created "drink_categories" table');
    const insertedCategories = await Promise.all(
      drinkCategoriesData.map(
        (category) => client.sql`
        INSERT INTO drink_categories (drink_category)
        VALUES (${category});
      `,
      ),
    );
    console.log(`Seeded ${insertedCategories.length} categories`);
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
  } catch (error) {
    console.error('Error seeding chains:', error);
    throw error;
  }
}
// Insert data into the "beverages_data" table
async function seedBeverages(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS beverages_data (
        beverage_id SERIAL PRIMARY KEY,
        beverage_title VARCHAR(40) NOT NULL UNIQUE,
        category_id SMALLINT REFERENCES drink_categories(drink_id),
        beverage_volume FLOAT NOT NULL,
        beverage_in_wish BOOLEAN NOT NULL,
        beverage_ratings SMALLINT NOT NULL,
        country_id SMALLINT REFERENCES countries(country_id),
        beverage_description TEXT,
        beverage_image_url VARCHAR(120),
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Created "beverages_data" table');
    const insertedBeverages = await Promise.all(
      beveragesData.map(
        (beverage) => client.sql`
        INSERT INTO beverages_data (beverage_id, beverage_title, category_id, beverage_volume, 
          beverage_in_wish, beverage_ratings, country_id, beverage_description, beverage_image_url)
        VALUES (${beverage.beverageId}, ${beverage.title}, ${beverage.category}, ${beverage.volume}, 
          ${beverage.inWish}, ${beverage.ratings}, ${beverage.countryID}, ${beverage.description}, ${beverage.imageUrl})
      `,
      ),
    );
    console.log(`Seeded ${insertedBeverages.length} beverages`);
  } catch (error) {
    console.error('Error seeding beverages:', error);
    throw error;
  }
}
// Insert data into the "beverage_prices" table
async function seedBeveragePrices(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS beverage_prices (
        beverage_id SMALLINT REFERENCES beverages_data(beverage_id),
        retail_chain_id SMALLINT REFERENCES retail_chains(retail_chain_id),
        price numeric NOT NULL,
        last_updated DATE
      );
    `;
    console.log('Created "beverage_prices" table');
    for (const beverage of beveragesData) {
      const prices = beverage.prices;
      const beverageId = beverage.beverageId;
      // let's go through the price array
      for (const retailChainId in prices) {
        const price = prices[retailChainId].price;
        const lastUpdated = prices[retailChainId].lastUpdated;
        // Insert price into beverage_prices table
        await client.query({
          text: `
            INSERT INTO beverage_prices (beverage_id, retail_chain_id, price, last_updated)
            VALUES ($1, $2, $3, $4)
          `,
          values: [beverageId, retailChainId, price, lastUpdated],
        });
      }
    }
    console.log('Beverage prices seeded successfully');
  } catch (error) {
    console.error('Error seeding beverage prices:', error);
    throw error;
  }
}
// start the process of initial filling of the database
async function main() {
  const client = await db.connect();
  await seedCountries(client);
  await seedCategories(client);
  await seedRetailChains(client);
  await seedBeverages(client);
  await seedBeveragePrices(client);
  await client.end();
}
main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
