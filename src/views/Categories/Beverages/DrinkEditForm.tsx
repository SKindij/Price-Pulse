// @/views/Categories/Beverages/DrinkEditForm.tsx
'use client';
import Link from 'next/link';
import {IBeverage} from '@/models/interfaces';
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
import { updateBeverage } from '@/services/data-actions';

interface DrinkEditFormProps {
  beverage:IBeverage;
  countries:string[];
  categories:string[];
}
// form for editing information about the drink
export default function DrinkEditForm({ beverage, countries, categories }:DrinkEditFormProps) {
  // creates new function that will have same body but with a fixed value beverage.id
  // useful if you need to pass function with certain parameters to another place
  const updateBeverageWithId = updateBeverage.bind(null, beverage.beverageId);

  const { prices } = beverage;

  return (
    <form action={updateBeverageWithId}>
      {/* hidden field to pass id of drink to be updated */}
      <input type="hidden" name="id" value={beverage.beverageId} />
      <Stack sx={{ width: 300 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
	  <Divider>Зміна параметрів напою.</Divider>
	  {/* Поле для зміни країни виробництва напою */}
	  <FormControl required size="small">
	    <InputLabel id="country-label">країна виробництва</InputLabel>
          <Select name="country"
		        labelId="country-label" id="country"
            defaultValue={beverage.country}
          >
            <MenuItem value="" disabled><em>перелік країн</em></MenuItem>
            {countries.map( (country, index) => (
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ) )}
          </Select>
	    <FormHelperText>* Required</FormHelperText>
	  </FormControl>

        {/* Поле для зміни категорії напою */}
	  <FormControl required size="small">
	    <InputLabel id="category-label">категорія напою</InputLabel>
          <Select name="category"
		        labelId="category-label" id="category"
            defaultValue={beverage.category}
          >
            <MenuItem value="" disabled><em>перелік категорій</em></MenuItem>
            {categories.map( (category, index) => (
              <MenuItem key={index} value={category}>{category}</MenuItem>
            ) )}
          </Select>
	    <FormHelperText>* Required</FormHelperText>
	  </FormControl>

        {/* Поле для редагування назви напою */}
	  <TextField type="text" color="secondary" size="small"
          id="title" name="title"
          label="* Введіть найменування напою"
          placeholder="Назва місткістьL"
          defaultValue={beverage.title}
          helperText="* edit beverige title"
        />
	  {/* ----- ЦІНИ МАГАЗИНІВ ----- */}
        <Divider>поля зміни цін магазинів</Divider>
	  <TextField type="number" size="small"
          id="priceAuchan" name="priceAuchan"
          label="Auchan"
          placeholder="ГРН"
          defaultValue={prices.Auchan}
        />
        <TextField type="number" size="small"
          id="priceNovus" name="priceNovus"
          label="Novus"
          placeholder="ГРН"
          defaultValue={prices.Novus}
        />
	  <TextField type="number" size="small"
          id="priceSilpo" name="priceSilpo"
          label="Silpo"
          placeholder="ГРН"
          defaultValue={prices.Silpo}
        />
	  <TextField type="number" size="small"
          id="priceATB" name="priceATB"
          label="ATB"
          placeholder="ГРН"
          defaultValue={prices.ATB}
          helperText="* якщо немає, то залишаємо поле пустим"
        />
	  {/* ----- ОПИС НАПОЮ ----- */}
        <Divider>поле зміни опису напою</Divider>
	  <TextField type="text" color="secondary" size="small"
          id="description" name="description"
          label="Напишіть щось про цей напій"
          defaultValue={beverage.description}
        />
	  {/* ----- ФОТО ПЛЯШКИ ----- */}
	  <Divider>форма для завантаження фото</Divider>

        <Link href="/categories/beverages">
	    <Button variant="outlined">Cancel</Button>
	  </Link>
        <Button type="submit" variant="outlined" color="secondary">Edit Drink</Button>
	  </Stack>
    </form>
  );
}




