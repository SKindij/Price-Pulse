// @/src/seeder/seed.js
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  countriesData
} = require('./seed-data');

// Insert data into the "countries" table
async function seedCountries(client) {
  try {
    // Create the "Countries" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS countries (
        country_id SERIAL PRIMARY KEY,
        country_name VARCHAR(20) NOT NULL,
        prefix_ean VARCHAR(7) NOT NULL
      );
    `;
    console.log('Created "countries" table');
    // Insert data into the "countries" table
    const insertedcountries = await Promise.all(
      countriesData.map(
        (country) => client.sql`
        INSERT INTO countries (country_name, prefix_ean)
        VALUES (${country.countryName}, ${country.prefixEAN})
      `,
      ),
    );
    console.log(`Seeded ${insertedcountries.length} countries`);
    return {
      createTable,
      countries: insertedcountries,
    };
  } catch (error) {
    console.error('Error seeding countries:', error);
    throw error;
  }
}


// Insert data into the "drink_categories" table




// Insert data into the "retail_chains" table






async function main() {
  const client = await db.connect();

  await seedCountries(client);


  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

