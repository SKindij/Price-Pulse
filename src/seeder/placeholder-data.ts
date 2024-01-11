// @/seeder/placeholder-data.ts
import { ICocktail } from '@/models/interfaces';
import { CocktailIngredients, GlassType} from '@/models/enums';

const cocktailsData:ICocktail[] = [
  {
    cocktailID: 3001,
    title: 'Bahama-Mama',
    imageUrl: '/images/cocktails/bahama-mama.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.CRUSHED_ICE]: '150 гр',
      [CocktailIngredients.RUM_WHITE]: '30 мл',
      [CocktailIngredients.RUM_DARK]: '15 мл',
      [CocktailIngredients.ORANGE_JUICE]: '60 мл',
      [CocktailIngredients.PINEAPPLE_JUICE]: '60 мл',
      [CocktailIngredients.GRENADINE_SYRUP]: '3 краплі',
    },
    instructions: [
      'Збивати всі інгредієнти у чаші блендера до отримання однорідної, снігоподібної консистенції.',
      'Перелити суміш у попередньо охолоджений високий келих.',
      'Прикрасити часточкою апельсина, ананаса чи коктейльною вишнею.'
    ]
  },
  {
    cocktailID: 3002,
    title: 'Bloody-Mary',
    imageUrl: '/images/cocktails/bloody-mary.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.HORILKA]: '60 мл',
      [CocktailIngredients.TOMATO_JUICE]: '120 мл',
      [CocktailIngredients.LEMON_JUICE]: '10 мл',
      [CocktailIngredients.WORCESTERSHIRE_SAUCE]: 'до смаку',
      [CocktailIngredients.BLACK_PEPPER]: 'щіпка'
    },
    instructions: ['Перелийте всі інгредієнти в шейкер.','Налийте в келих поверх кубиків льоду.','Прикрашаємо паличкою селери.']
  },
  {
    cocktailID: 3003,
    title: 'Blue-Hawaii',
    imageUrl: '/images/cocktails/blue-hawaii.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.RUM_WHITE]: '30 мл',
      [CocktailIngredients.BLUE_CURACAO]: '30 мл',
      [CocktailIngredients.COCONUT_CREAM]: '30 мл',
      [CocktailIngredients.PINEAPPLE_JUICE]: '60 мл',
      [CocktailIngredients.LIME_JUICE]: '15 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3004,
    title: 'Blue-Lagoon',
    imageUrl: '/images/cocktails/blue-lagoon.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.HORILKA]: '30 мл',
      [CocktailIngredients.BLUE_CURACAO]: '30 мл',
      [CocktailIngredients.SPRITE]: '60 мл',
      [CocktailIngredients.PINEAPPLE_JUICE]: '60 мл',
      [CocktailIngredients.ICE_CUBES]: 'декілька'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3005,
    title: 'Blue-Tahoe',
    imageUrl: '/images/cocktails/blue-tahoe.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.TEQUILA]: '40 мл',
      [CocktailIngredients.LIME_JUICE]: '20 мл',
      [CocktailIngredients.BLUE_CURACAO]: '20 мл',
      [CocktailIngredients.ICE_CUBES]: '4 шт.',
      [CocktailIngredients.LEMON_JUICE]: '30 мл',
      [CocktailIngredients.CHAMPAGNE]: '60 мл',
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3006,
    title: 'Caipirinha',
    imageUrl: '/images/cocktails/caipirinha.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.RUM_WHITE]: '50 мл',
      [CocktailIngredients.CRUSHED_ICE]: '2 кубика',
      [CocktailIngredients.LIME_JUICE]: '30 мл',
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3007,
    title: 'Cosmopolitan',
    imageUrl: '/images/cocktails/cosmopolitan.jpg',
    alcoholic: true,
    glassType: GlassType.MARTINI,
    ingredients: {
      [CocktailIngredients.HORILKA]: '40 мл',
      [CocktailIngredients.TRIPLE_SEC]: '20 мл',
      [CocktailIngredients.LIME_JUICE]: '20 мл',
      [CocktailIngredients.CRANBERRY_JUICE]: '30 мл'
    },
    instructions: ['Початок приготування','Середина приготування','Завершення приготування']
  },
  {
    cocktailID: 3008,
    title: 'Cuba-Libre',
    imageUrl: '/images/cocktails/cuba-libre.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.RUM_DARK]: '50 мл',
      [CocktailIngredients.COCA_COLA]: '120 мл',
      [CocktailIngredients.LIME_JUICE]: '20 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3009,
    title: 'Dirty-Martini',
    imageUrl: '/images/cocktails/dirty-martini.jpg',
    alcoholic: true,
    glassType: GlassType.MARTINI,
    ingredients: {
      [CocktailIngredients.VERMOUTH]: '50 мл',
      [CocktailIngredients.GIN]: '50 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3010,
    title: 'Hiroshima',
    imageUrl: '/images/cocktails/hiroshima.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.SAMBUCA]: '15 мл',
      [CocktailIngredients.ABSINTHE]: '15 мл',
      [CocktailIngredients.IRISH_CREAM_LIQUEUR]: '15 мл',
      [CocktailIngredients.GRENADINE_SYRUP]: '15 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3011,
    title: 'Kamikaze',
    imageUrl: '/images/cocktails/kamikaze.jpg',
    alcoholic: true,
    glassType: GlassType.SHOT,
    ingredients: {
      [CocktailIngredients.HORILKA]: '30 мл',
      [CocktailIngredients.COINTREAU]: '30 мл',
      [CocktailIngredients.LIME_JUICE]: '30 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 30012,
    title: 'Long-Island-Iced-Tea',
    imageUrl: '/images/cocktails/long-island-iced-tea.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.HORILKA]: '15 мл',
      [CocktailIngredients.RUM_WHITE]: '15 мл',
      [CocktailIngredients.GIN]: '15 мл',
      [CocktailIngredients.TEQUILA]: '15 мл',
      [CocktailIngredients.COINTREAU]: '15 мл',
      [CocktailIngredients.LEMON_JUICE]: '15 мл',
      [CocktailIngredients.SUGAR_SYRUP]: '15 мл',
      [CocktailIngredients.COCA_COLA]: '150 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3013,
    title: 'Mai-Tai',
    imageUrl: '/images/cocktails/mai-tai.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.RUM_DARK]: '30 мл',
      [CocktailIngredients.COINTREAU]: '15 мл',
      [CocktailIngredients.LIME_JUICE]: '15 мл',
      [CocktailIngredients.ORGEAT_SYRUP]: '10 мл',
      [CocktailIngredients.CRUSHED_ICE]: '100 гр'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3014,
    title: 'Margarita',
    imageUrl: '/images/cocktails/margarita.jpg',
    alcoholic: true,
    glassType: GlassType.COUPE,
    ingredients: {
      [CocktailIngredients.TEQUILA]: '50 мл',
      [CocktailIngredients.COINTREAU]: '20 мл',
      [CocktailIngredients.LIME_JUICE]: '30 мл',
      [CocktailIngredients.SUGAR_SYRUP]: '10 мл',
    },
    instructions: ['Облямівку охолодженого келиха намажте сіллю (використовуйте сік лайма для прилипання).','Перелийте всі інгредієнти в шейкер і збовтайте.','Процідіть у келих.']
  },
  {
    cocktailID: 3015,
    title: 'Mint-Julep',
    imageUrl: '/images/cocktails/mint-julep.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.BOURBON]: '60 мл',
      [CocktailIngredients.SODA_WATER]: '30 мл',
      [CocktailIngredients.MINT_LEAVES]: '8 штук',
      [CocktailIngredients.ANGOSTURA_SUGAR]: '1 ч.л.',
    },
    instructions: ['Перемішати содову і кубик цукру.','Потріть листочки м’яти та додайте їх до бурбону.','Зверху покрийте куполом колотого льоду.']
  },
  {
    cocktailID: 3016,
    title: 'Mojito',
    imageUrl: '/images/cocktails/mojito.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.RUM_WHITE]: '60 мл',
      [CocktailIngredients.SUGAR_SYRUP]: '20 мл',
      [CocktailIngredients.MINT_LEAVES]: '10 штук',
      [CocktailIngredients.SODA_WATER]: '120 мл',
      [CocktailIngredients.LIME_WEDGES]: '4 шматочки'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3017,
    title: 'Pina-Colada',
    imageUrl: '/images/cocktails/pina-colada.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.RUM_WHITE]: '60 мл',
      [CocktailIngredients.COCONUT_LIQUEUR]: '30 мл',
      [CocktailIngredients.LIME_JUICE]: '30 мл',
      [CocktailIngredients.PINEAPPLE_JUICE]: '90 мл',
      [CocktailIngredients.COCONUT_CREAM]: '30 мл'
    },
    instructions: [
      'Перелийте всі інгредієнти в шейкер і збовтайте.',
      'Процідіть у келих ураган або хайбол над кубиками льоду.',
      'Прикрасьте часточкою ананаса та вишнею.'
    ]
  },
  {
    cocktailID: 3018,
    title: 'Salty-Dog',
    imageUrl: '/images/cocktails/salty-dog.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.HORILKA]: '60 мл',
      [CocktailIngredients.GRAPEFRUIT_JUICE]: '120 мл',
      [CocktailIngredients.SALT]: 'Для посипання',
      [CocktailIngredients.ICE_CUBES]: 'Декілька штук'
    },
    instructions: [
      'Посипте склянку сіллю  і наповніть її доверху кубиками льоду.',
      'Влийте горілку і грейпфрутовий сік. Обережно перемішайте.',
      'Прикрасьте шматочком грейпфрута.'
    ]
  },
  {
    cocktailID: 3019,
    title: 'Screwdriver',
    imageUrl: '/images/cocktails/screwdriver.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.HORILKA]: '60 мл',
      [CocktailIngredients.ORANGE_JUICE]: '120 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3020,
    title: 'Strawberry-Daiquiri',
    imageUrl: '/images/cocktails/strawberry-daiquiri.jpg',
    alcoholic: true,
    glassType: GlassType.HURRICANE,
    ingredients: {
      [CocktailIngredients.RUM_WHITE]: '60 мл',
      [CocktailIngredients.LIME_JUICE]: '30 мл',
      [CocktailIngredients.RASPBERRY_PUREE]: '45 мл',
      [CocktailIngredients.CRUSHED_ICE]: 'кілька кубиків'
    },
    instructions: ['Додайте всі інгредієнти в блендер.','Змішайте і перелийте в фужер.','Прикрасити полуницею.']
  },
  {
    cocktailID: 3021,
    title: 'Strawberry-Mojito',
    imageUrl: '/images/cocktails/strawberry-mojito.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.STRAWBERRY_PUREE]: '50 мл',
      [CocktailIngredients.RUM_WHITE]: '60 мл',
      [CocktailIngredients.SPARKLING_WATER]: '100 мл',
      [CocktailIngredients.MINT_LEAVES]: '6 шт',
      [CocktailIngredients.LIME_WEDGES]: '2 шт'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3022,
    title: 'Tequila-Sunrise',
    imageUrl: '/images/cocktails/tequila-sunrise.jpg',
    alcoholic: true,
    glassType: GlassType.HIGHBALL,
    ingredients: {
      [CocktailIngredients.TEQUILA]: '60 мл',
      [CocktailIngredients.GRENADINE_SYRUP]: '15 мл',
      [CocktailIngredients.ORANGE_JUICE]: '90 мл'
    },
    instructions: ['Налийте текілу в склянку поверх кубиків льоду.','Заправляємо апельсиновим соком.','Потопіть гренадин.']
  },
  {
    cocktailID: 3023,
    title: 'Whiskey-Sour',
    imageUrl: '/images/cocktails/whiskey-sour.jpg',
    alcoholic: true,
    glassType: GlassType.ROCKS,
    ingredients: {
      [CocktailIngredients.ANGOSTURA_BITTERS]: '2 краплі',
      [CocktailIngredients.EGG_WHITE]: '1 шт',
      [CocktailIngredients.BOURBON]: '60 мл',
      [CocktailIngredients.LEMON_JUICE]: '30 мл',
      [CocktailIngredients.SUGAR_SYRUP]: '15 мл'
    },
    instructions: ['Перелийте всі інгредієнти в шейкер.','Струсіть із яєчним білком.','Прикрасьте шматочками апельсина і вишнею.']
  },
];

export { cocktailsData };