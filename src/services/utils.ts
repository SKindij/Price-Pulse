// @/services/utils.ts

// returns date as string depending on localization
export const formatDateToLocal = (
  date:Date,
  locale:string = 'uk-UA',
) => {
  // опції форматування дати в рядкове представлення
  const options:Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
    // створюємо об'єкт Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat(locale, options);
  // використовуємо створений форматер
  return formatter.format(date);
};

// generate an array for the pagination component
export const generatePagination = (currentPage:number, totalPages:number) => {
  // якщо загальна кількість сторінок <= 7,
  if (totalPages <= 7) {
    // повертаємо масив з усіма сторінками від 1 до totalPages
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  // якщо поточна сторінка <= 3,
  if (currentPage <= 3) {
    // показуємо перші три сторінки, '...' та останні дві сторінки
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  // якщо поточна сторінка >= totalPages - 2,
  if (currentPage >= totalPages - 2) {
    // показуємо перші дві сторінки, '...', та останні три сторінки.
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  // у всіх інших випадках показуємо
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

