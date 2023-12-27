// @/views/Categories/Beverages/DrinkCreateForm
'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// put information to the database
import { createBeverage } from '@/services/data-actions';

interface DrinkCreateFormProps {
  countries:string[];
  categories:string[];
}

export default function DrinkCreateForm({ countries, categories }:DrinkCreateFormProps) {
  //
  const initialState = { message: null, errors: {} };
  //
  const [state, dispatch] = useFormState(createBeverage, initialState);

  // return <form action={dispatch}>...</form>;
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assuming this is where your form submission logic is handled
    const result = await dispatch();
    // Log the result (you can handle it according to your needs)
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form action={createBeverage}> */}
	  {/* Поле форми для вибору країни виробництва напою */}
	  <InputLabel htmlFor="country">Виберіть країну виробництва</InputLabel>
      <Select id="country" name="country" defaultValue="">
        <MenuItem value="" disabled>
          перелік країн
        </MenuItem>
        {countries.map( (country, index) => (
          <MenuItem key={index} value={country}>
            {country}
          </MenuItem>
        ) )}
      </Select>

      {/* Поле форми для вибору категорії напою */}
	  <InputLabel htmlFor="category">Виберіть категорію напою</InputLabel>
      <Select id="category" name="category" defaultValue="">
        <MenuItem value="" disabled>
          перелік категорій
        </MenuItem>
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>

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
    </form>
  );
}