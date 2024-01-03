// @file: /app/scripts/seed.ts
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

const {
  DrinkCategory, RetailChain, Country, CocktailIngredients, GlassType
} = require('../models/enums');
const {
  IBeverage, ICocktail, IRecipe
} = require('../models/interfaces');


const {
  beveragesData, cocktailsData,
} = require('./placeholder-data');
const countriesData = Object.values(Country) as string[];
const categoriesData = Object.values(DrinkCategory) as string[];
const retailsData = Object.values(RetailChain) as string[];









