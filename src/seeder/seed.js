// @/src/seeder/seed.js
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  countriesData, drinkCategoriesData, retailChainsData,  beveragesData,
  cocktailIngredients, glassTypes, cocktailsData
} = require('./seed-data');
// ----- "countries" table -----
async function seedCountries(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS countries (
        country_id SMALLINT PRIMARY KEY,
        country_name VARCHAR(20) NOT NULL UNIQUE,
        prefix_ean VARCHAR(7) NOT NULL
      );
    `;
    console.log('Created "countries" table');
    const insertedCountries = await Promise.all(
      countriesData.map(
        (country) => client.sql`
        INSERT INTO countries (country_id, country_name, prefix_ean)
        VALUES (${country.countryID}, ${country.countryName}, ${country.prefixEAN})
        ON CONFLICT DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedCountries.length} countries`);
  } catch (error) {
    console.error('Error seeding countries:', error);
    throw error;
  }
}
// ----- "drink_categories" table -----
async function seedCategories(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS drink_categories (
        category_id SMALLINT PRIMARY KEY,
        category_name VARCHAR(20) NOT NULL UNIQUE
      );
    `;
    console.log('Created "drink_categories" table');
    const insertedCategories = await Promise.all(
      drinkCategoriesData.map(
        (category) => client.sql`
        INSERT INTO drink_categories (category_id, category_name)
        VALUES (${category.categoryID}, ${category.categoryName})
        ON CONFLICT DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedCategories.length} categories`);
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}
// ----- "beverages_data" table -----
async function seedBeverages(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS beverages_data (
        beverage_id SERIAL PRIMARY KEY,
        beverage_title VARCHAR(40) NOT NULL UNIQUE,
        category_id SMALLINT REFERENCES drink_categories(category_id),
        beverage_volume FLOAT NOT NULL,
        auchan_price SMALLINT NOT NULL,
        novus_price SMALLINT NOT NULL,
        silpo_price SMALLINT NOT NULL,
        atb_price SMALLINT NOT NULL,
        rozetka_price SMALLINT NOT NULL,
        last_updated DATE,
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
          auchan_price, novus_price, silpo_price, atb_price, rozetka_price, last_updated,
          beverage_in_wish, beverage_ratings, country_id, beverage_description, beverage_image_url)
        VALUES (${beverage.beverageId}, ${beverage.title}, ${beverage.category}, ${beverage.volume}, 
          ${beverage.inWish}, ${beverage.ratings}, ${beverage.countryID}, ${beverage.description}, ${beverage.imageUrl})
          ON CONFLICT (beverage_title) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedBeverages.length} beverages`);
  } catch (error) {
    console.error('Error seeding beverages:', error);
    throw error;
  }
}

// start the process of initial filling of the database
async function main() {
  console.log('Підключаємося до Vercel PosgreSQL...');
  const client = await db.connect();
   await seedCountries(client);
   await seedCategories(client);
   await seedBeverages(client);
  await client.end();
}
main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
