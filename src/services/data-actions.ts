// @/services/data-actions.ts
'use server';

// to determine the schema of the form object and validate its data
import { z } from 'zod';
// to work with the PostgreSQL database
import { sql } from '@vercel/postgres';
// to update the cache after changes in the database
import { revalidatePath } from 'next/cache';
// to redirect to the desired page
import { redirect } from 'next/navigation';

/* ----- shape scheme definition using zod ----- */
const BeverageSchema = z.object({
  country: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  priceAuchan: z.number(),
  priceNovus: z.number(),
  priceSilpo: z.number(),
  priceATB: z.number(),
});

export type BeverageFormData = z.infer<typeof BeverageSchema>;

export type State = {
  errors?:{
    customerId?:string[];
    amount?:string[];
    status?:string[];
  };
  message?:string | null;
};

/* ----- BEVERAGES ----- */
// adds data about the new beverage to the database
export async function createBeverage(formData:BeverageFormData) {
  // validate the form data
  const validatedFields = BeverageSchema.safeParse(formData);
  // check for validation errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation Error: Failed to Create Beverage.',
    };
  }
  // Extract data after validation
  const {
    country, category, title, description,
    priceAuchan, priceNovus, priceSilpo, priceATB
  } = validatedFields.data;
  // Get the current date in ISO format and separate time from date
  const date = new Date().toISOString().split('T')[0];

  // Log the data
  console.log(`country: ${country}`);
  console.log(`category: ${category}`);
  console.log('--- beverage ---');
  console.log(`title: ${title}`);
  console.log(`priceAuchan: ${priceAuchan} on ${date}.`);
  console.log(`priceNovus: ${priceNovus} on ${date}.`);
  console.log(`priceSilpo: ${priceSilpo} on ${date}.`);
  console.log(`priceATB: ${priceATB} on ${date}.`);
  console.log('--- description ---');
  console.log(`text: ${description}`);

  // Simulate database operations
  console.log('Simulating database operations...');


  revalidatePath('/categories/beverages');
  redirect('/categories/beverages');
}













/* ----- COCTAILS ----- */
// adds data about the new coctaile to the database












/* ----- RECIPES ----- */
// adds data about the new recipe to the database







