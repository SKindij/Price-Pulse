// @/views/Categories/Beverages/DrinkCreateForm
'use client';
import Link from 'next/link';
import { useState } from 'react';
// field elements for the form
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
// put information to the database
import { createBeverage } from '@/services/data-actions';

interface DrinkCreateFormProps {
  countries:string[];
  categories:string[];
}

export default function DrinkCreateForm({ countries, categories }:DrinkCreateFormProps) {
  const [selectedCountry, setSelectedCountry] = useState<null | string>(null);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);


  return (
    <form action={createBeverage}>
      <Stack sx={{ width: 300 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
	      {/* Поле форми для вибору країни виробництва напою */}
        <Autocomplete id="countries-select"
          options={countries}
          value={selectedCountry}
          onChange={(event:any, newCountry:string|null) => {
            if (newCountry !== null) {
              setSelectedCountry(newCountry);
              console.log(`country: ${selectedCountry}`);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Виберіть країну виробництва"
            />
          )}
        />
        {/* Поле форми для вибору категорії напою */}
	      <Autocomplete id="categories-select"
          options={categories}
          value={selectedCategory}
          onChange={(event, newCategory) => {
            if (newCategory !== null) {
              setSelectedCategory(newCategory);
              console.log(`category: ${selectedCategory}`);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Виберіть категорію напою"
            />
          )}
        />
        {/* Поле форми для введення назви напою */}
	      <TextField type="text"
          id="title" name="title"
          label="Введіть найменування напою"
          placeholder="Назва місткістьL"
        />
	      {/* Поле форми для введення ціни Auchan */}
	      <TextField type="number"
          id="priceAuchan" name="priceAuchan"
          label="Введіть ціну магазину Auchan"
          placeholder="Ціна Ашан в ГРН"
        />
	      {/* Поле форми для введення ціни Novus */}
        <TextField type="number"
          id="priceNovus" name="priceNovus"
          label="Введіть ціну магазину Novus"
          placeholder="Ціна Новус в ГРН"
        />
	      {/* Поле форми для введення ціни Silpo */}
	      <TextField type="number"
          id="priceSilpo" name="priceSilpo"
          label="Введіть ціну магазину Silpo"
          placeholder="Ціна Сільпо в ГРН"
        />
	      {/* Поле форми для введення ціни ATB */}
	      <TextField type="number"
          id="priceATB" name="priceATB"
          label="Введіть ціну магазину ATB"
          placeholder="Ціна АТБ в ГРН"
        />
        {/* Поле форми для введення опису напою */}
	      <TextField type="text"
          id="description" name="description"
          label="Введіть короткий опис напою"
          placeholder="Напишіть щось про цей напій"
        />
        <Link href="/categories/beverages">Cancel</Link>
        <Button type="submit">Create Drink</Button>
      </Stack>
    </form>
  );
}