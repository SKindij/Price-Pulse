// @/src/seeder/seed.js
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  countriesData, drinkCategoriesData, retailChainsData,  beveragesData,
  cocktailIngredients, glassTypes, cocktailsData
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
        VALUES (${category})
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
        VALUES (${retail})
        ON CONFLICT DO NOTHING;
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
            ON CONFLICT (beverage_id, retail_chain_id) DO NOTHING;
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
// fill in table with ingredients for cocktails
async function seedCocktailIngredients(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS cocktail_ingredients (
        ingredient_id SERIAL PRIMARY KEY,
        ingredient_name VARCHAR(50) UNIQUE
      )
    `);
    console.log('Created "cocktail_ingredients" table');
    for (const ingredient of cocktailIngredients) {
      await client.query(
        'INSERT INTO cocktail_ingredients (ingredient_name) VALUES ($1) ON CONFLICT DO NOTHING',
        [ingredient]
      );
    }
    console.log('The table has been successfully populated with data.');
  } catch (err) {
    console.error('An error occurred while creating a table or filling it with data:', err);
  }
}
// Insert data into the "drink_categories" table
async function seedGlassTypes(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS glass_types (
        glass_id SERIAL PRIMARY KEY,
        glass_type VARCHAR(20) NOT NULL UNIQUE
      );
    `;
    console.log('Created "glass_types" table');
    const insertedTypes = await Promise.all(
      glassTypes.map(
        (type) => client.sql`
        INSERT INTO glass_types (glass_type)
        VALUES (${type})
        ON CONFLICT DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedTypes.length} types`);
  } catch (error) {
    console.error('Error seeding glass_types:', error);
    throw error;
  }
}
// Insert data into the "cocktails_data" table
async function seedCocktails(client) {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cocktails_data (
      cocktail_id SERIAL PRIMARY KEY,
      cocktail_title VARCHAR(50) NOT NULL UNIQUE,
      image_url VARCHAR(120),
      alcoholic BOOLEAN,
      glass_type_id SMALLINT REFERENCES glass_types(glass_id),
      instructions TEXT[]
    ); 
    `;
    console.log('Created "cocktails_data" table');
    const insertedCocktails = await Promise.all(
      cocktailsData.map(
        (cocktail) => client.sql`
        INSERT INTO cocktails_data ( cocktail_id, cocktail_title, image_url,
          alcoholic, glass_type_id, instructions )
        VALUES (${cocktail.cocktailID}, ${cocktail.cocktailTitle}, ${cocktail.imageUrl},
          ${cocktail.alcoholic}, ${cocktail.glassTypeID}, ${cocktail.instructions} )
          ON CONFLICT (cocktail_title) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedCocktails.length} cocktails`);
  } catch (error) {
    console.error('Error seeding Cocktails:', error);
    throw error;
  }
}
// fill in table with ingredients with volumes
async function seedIngredientsVolume(client) {
  try {
    console.log('Running seedIngredientsVolume function.');
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cocktails_ingredients_volume (
      cocktail_id SMALLINT REFERENCES cocktails_data(cocktail_id),
      ingredient_id SMALLINT REFERENCES cocktail_ingredients(ingredient_id),
      volume VARCHAR(50),
      PRIMARY KEY (cocktail_id, ingredient_id)
    );
    `;
    console.log('Created "cocktails_ingredients_volume" table');
    for (const cocktail of cocktailsData) {
      const { cocktailID, ingredients } = cocktail;
      // Convert ingredients object to an array of objects
      const ingredientsArray = Object.entries(ingredients).map(([ingredientID, volume]) => ({
        ingredientID: parseInt(ingredientID), // Convert to number if needed
        volume,
      }));
      for (const ingredient of ingredientsArray) {
        const { ingredientID, volume } = ingredient;

        await client.sql`
          INSERT INTO cocktails_ingredients_volume (cocktail_id, ingredient_id, volume)
          VALUES (${cocktailID}, ${ingredientID}, ${volume})
          ON CONFLICT DO NOTHING;
        `;
      }
    }
    console.log('Cocktail ingredients volumes seeded successfully');
  } catch (error) {
    console.error('Error seeding cocktail ingredients volumes:', error);
    throw error;
  }
}
// start the process of initial filling of the database
async function main() {
  console.log('Підключаємося до Vercel PosgreSQL...');
  const client = await db.connect();
  // await seedCountries(client);
  // await seedCategories(client);
  // await seedRetailChains(client);
  // await seedBeverages(client);
  // await seedBeveragePrices(client);
  // await seedCocktailIngredients(client);
  // await seedGlassTypes(client);
  // await seedCocktails(client);
  // seedIngredientsVolume(client)
  await client.end();
}
main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
