// @file: /app/scripts/seed.ts
const { db } = require('@vercel/postgres');
const {
  beveragesData, cocktailsData,
} = require('./placeholder-data');
const {
  DrinkCategory, RetailChain, Country, CocktailIngredients, GlassType
} = require('../models/enums');

const bcrypt = require('bcrypt');












