// @/views/Categories/Beverages/DrinkCreateForm
'use client';
import Link from 'next/link';
// field elements for the form
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// put information to the database
import { createBeverage } from '@/services/data-actions';

interface DrinkCreateFormProps {
  countries:string[];
  categories:string[];
}

export default function DrinkCreateForm({ countries, categories }:DrinkCreateFormProps) {
  //

  return (
    <form action={createBeverage}>
      <Stack sx={{ width: 300 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
	  <Divider>Оберіть параметри напою.</Divider>
	  {/* Поле форми для вибору країни виробництва напою */}
	  <FormControl required size="small">
	    <InputLabel id="country-label">країна виробництва</InputLabel>
          <Select name="country"
		  labelId="country-label" id="country"
          >
            <MenuItem value="" disabled><em>перелік країн</em></MenuItem>
            {countries.map( (country, index) => (
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ) )}
          </Select>
	    <FormHelperText>* Required</FormHelperText>
	  </FormControl>

        {/* Поле форми для вибору категорії напою */}
	  <FormControl required size="small">
	    <InputLabel id="category-label">категорія напою</InputLabel>
          <Select name="category"
		  labelId="category-label" id="category"
          >
            <MenuItem value="" disabled><em>перелік категорій</em></MenuItem>
            {categories.map( (category, index) => (
              <MenuItem key={index} value={category}>{category}</MenuItem>
            ) )}
          </Select>
	    <FormHelperText>* Required</FormHelperText>
	  </FormControl>

        {/* Поле форми для введення назви напою */}
	  <TextField type="text" color="secondary" size="small"
          id="title" name="title"
          label="* Введіть найменування напою"
          placeholder="Назва місткістьL"
          helperText="* Please enter beverige title"
        />
	  {/* ----- ЦІНИ МАГАЗИНІВ ----- */}
        <Divider>поля вводу цін магазинів</Divider>
	  <TextField type="number" size="small"
          id="priceAuchan" name="priceAuchan"
          label="Auchan"
          placeholder="ГРН"
        />
        <TextField type="number" size="small"
          id="priceNovus" name="priceNovus"
          label="Novus"
          placeholder="ГРН"
        />
	  <TextField type="number" size="small"
          id="priceSilpo" name="priceSilpo"
          label="Silpo"
          placeholder="ГРН"
        />
	  <TextField type="number" size="small"
          id="priceATB" name="priceATB"
          label="ATB"
          placeholder="ГРН"
          helperText="* якщо немає, то залишаємо поле пустим"
        />
	  {/* ----- ОПИС НАПОЮ ----- */}
        <Divider>поле для опису напою</Divider>
	  <TextField type="text" color="secondary" size="small"
          id="description" name="description"
          label="Напишіть щось про цей напій"
          defaultValue="..."
        />
	  {/* ----- ФОТО ПЛЯШКИ ----- */}
	  <Divider>форма для завантаження фото</Divider>

        <Link href="/categories/beverages">
	    <Button variant="outlined">Cancel</Button>
	  </Link>
        <Button type="submit" variant="outlined" color="secondary">Create Drink</Button>
	  </Stack>
    </form>
  );
}