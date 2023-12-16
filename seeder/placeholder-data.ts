// @/seeder/placeholder-data.ts
import { IDrink } from '@/src/models/interfaces';
import { DrinkCategory, RetailChain, Country } from '@/src/models/enums';
// import { RetailPrices, DrinkVolume } from '@/backend/models/types';

const beveragesData:IDrink[] = [
  /* --- BOURBON --- */
  {
    id: 1001,
	  title: 'Wild Turkey Rare Breed 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1669, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 2199, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Тони паленого коричневого цукру і ванілі, трохи цитрусових, сосни і дуба.'
  },
  {
    id: 1002,
	  title: 'Wild Turkey Longbranch 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1637, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1779, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Смак з відтінками димних солодощів, червоних яблук і карамелі. '
  },
  {
    id: 1003,
	  title: 'Wild Turkey 101 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1049, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 729, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 749, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Смак ванілі, меду, карамелі, тютюну і тростинного цукру. Аромат ванілі, дуба, апельсина.'
  },
  {
    id: 1004,
	  title: 'Wild Turkey 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 849, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 589, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    id: 1005,
    title: 'Wild Turkey Rye 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 849, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 969, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Аромат має ванільно-пряні, дубові, цитрусові акценти. У смаку грушеві тони в компанії карамелі.'
  },
  {
    id: 1006,
    title: 'Jim Beam Double Oak 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1089, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1199, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1149, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    description: 'Баланс насиченого смаку і неповторного аромату.'
  },
  {
    id: 1007,
    title: 'Jim Beam Double Rye 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1179, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1099, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    description: ''
  },
  {
    id: 1008,
    title: 'Jim Beam White 4Y 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 559, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 549, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    description: '51% сусла із кукурудзи.'
  },
  {
    id: 1009,
	  title: 'Wild Turkey 101 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 939, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    description: 'Смак ванілі, меду, карамелі, тютюну і тростинного цукру. Аромат ванілі, дуба, апельсина.'
  },
  {
    id: 1010,
	  title: 'Wild Turkey 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 1045, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 749, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1099, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
	  description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    id: 1011,
	  title: 'Jim Beam Red Stag Cherry 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1159, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    description: ''
  },
  {
    id: 1012,
	  title: 'Jim Beam White 4Y 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 729, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1159, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    description: '51% сусла із кукурудзи.'
  },
  /* --- WHISKEY --- */
  {
    title: 'Jameson Stout 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 795, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 709, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    id: 109,
    description: ''
  },
  {
    title: 'Jameson 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 579, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    id: 109,
    description: 'Blended.'
  },
  {
    id: 111,
    title: 'Ballantines Finest 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    description: 'Blended.'
  },
  {
    id: 112,
    title: 'Johnnie Walker Blonde 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 674, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    description: ''
  },
  {
    id: 113,
    title: 'Johnnie Walker Red Label 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 649, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 519, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    description: 'Blended.'
  },
  {
    id: 113,
    title: 'Hankey Bannister 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 369, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 369, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 369, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 362, lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Scotland,
    description: 'Blended.'
  },
  {
    title: 'Jameson  1.0L',
    category: DrinkCategory.Whiskey,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 799, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 799, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 799, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    id: 110,
    description: 'Blended.'
  },
  {
    id: 111,
    title: 'Ballantines Finest 1.0L',
    category: DrinkCategory.Whiskey,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 639, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 629, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 689, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    description: 'Blended.'
  },
  {
    id: 113,
    title: 'Johnnie Walker Red Label 1.0L',
    category: DrinkCategory.Whiskey,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 779, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 959, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    description: 'Blended.'
  },
  {
    id: 113,
    title: 'Hankey Bannister 1.0L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 569, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Scotland,
    description: 'Blended.'
  },
  /* --- RUM --- */
  {
    id: 1010,
	  title: 'Doorly\'s Gold 5Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 980, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Barbados,
    description: 'Ноти тропічних і сушених фруктів, підсмажених кокосів і дуба. Післясмак фруктовий ванільний.'
  },
  {
    id: 104,
	  title: 'Doorly\'s White 3Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 865, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Barbados,
    description: 'Ванільний аромат із вершковими та медовими нотками. Смак з відтінками екзотичних фруктів.'
  },
  {
    id: 1005,
    title: 'Botafogo Spiced 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 649, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Belgium,
    description: 'У смаку - спеції, ваніль, карамель і лакриця. Аромат солодкий цитрусовий.'
  },
  {
    id: 1007,
    title: 'Appleton Reserve 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 642, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Jamaica,
    description: 'Cмак пряних і горіхових нот із відтінком меду, ванілі і лісового горіха.'
  },
  {
    id: 1008,
    title: 'Appleton 12Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1299, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 0,
    country: Country.Jamaica,
    description: 'Вершковий смак із відтінками апельсинової цедри і ванілі. Аромат волоського і мускатного горіхів.'
  },
  {
    id: 1003,
    title: 'Santiago de Cuba Anejo 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Cuba,
    description: 'Гладкий смак із фруктовими відтінками, нюансами вишні, ванілі, какао.'
  },
  {
    id: 1009,
    title: 'Bacardi Spiced 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Italy,
    description: 'Ваніль, кориця, мускатний горіх і мед. Аромат з нотками дубової бочки і сухофруктів.'
  },
  {
    id: 1003,
    title: 'Santiago de Cuba Carta Blanca 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 399, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Cuba,
    description: 'Квітковий аромат із відтінками меду і карамелі. Свіжий цитрусовий смак.'
  },
  {
    id: 1006,
    title: 'Botafogo Black 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 972, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Belgium,
    description: 'Темний ром, ваніль, апельсин, чилі. Аромат висушеного винограду.'
  },
  {
    id: 122,
    title: 'Santiago Cuba',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Cuba,
    description: ''
  },
  {
    id: 1019,
    title: 'Bacardi Spiced 1.0L',
    category: DrinkCategory.Rum,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 569, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Italy,
    description: 'Ваніль, кориця, мускатний горіх і мед. Аромат з нотками дубової бочки і сухофруктів.'
  },
  /* --- GIN --- */
  {
    id: 114,
    title: 'Malfy Pink Grapefruit 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 919, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    description: 'Тони сицілійського рожевого грейпфрута, коріандра та ревеня.'
  },
  {
    id: 114,
    title: 'Malfy Con Limone 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 919, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 699, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    description: 'Аромат з тонами лимона, ялівцю, дягелю і кориці.'
  },
  {
    id: 114,
    title: 'Gordon\'s Pink 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 659, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Britain,
    description: ''
  },
  {
    id: 114,
    title: 'Gordon\'s Sicilian Lemon 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 689, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Britain,
    description: ''
  },
  /* --- PORTWEIN --- */
  {
    id: 115,
    title: 'Colonist 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    description: ''
  },
  {
    id: 116,
    title: 'Osborn Premium Rojo 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 374, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Spain,
    description: 'Смак з тонами полину, гіркої апельсинової шкірки та відтінками кориці.'
  },
  {
    id: 116,
    title: 'Osborn Porto Tawny 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 290, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Spain,
    description: 'Туріга Насьональ. Тони пряні, кондитерські.'
  },
  /* --- CHAMPAGNE --- */
  {
    id: 117,
    title: 'Colonist 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    description: ''
  },
  {
    id: 118,
    title: 'Martini Prosecco 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 539, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 389, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    description: ''
  },
  {
    id: 118,
    title: 'Martini Rose 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 535, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    description: 'Купаж. Тони букета фруктові, квіткові.'
  },
  /* --- TEQUILA --- */
  {
    title: 'Espolon Blanco 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1199, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Mexico,
    id: 119,
    description: ''
  },
  {
    title: 'Espolon Reposado 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1199, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Mexico,
    id: 120,
    description: ''
  },
  {
    title: 'Jose Cuervo Silver 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 579, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 839, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Mexico,
    id: 120,
    description: ''
  },
  {
    title: 'Jose Cuervo Especial 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 579, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 799, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Mexico,
    id: 120,
    description: ''
  },
  /* --- TINCTURE --- */
  {
    title: 'Jagermeister 0.7L',
    category: DrinkCategory.Tincture,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 399, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 476, lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Germany,
    id: 123,
    description: ''
  },
  {
    title: 'Becherovka 0.7L',
    category: DrinkCategory.Tincture,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.CzechRepublic,
    id: 125,
    description: ''
  },
  {
    title: 'Jagermeister 1.0L',
    category: DrinkCategory.Tincture,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 919, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Germany,
    id: 124,
    description: ''
  },
  {
    title: 'Becherovka 1.0L',
    category: DrinkCategory.Tincture,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 469, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 489, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.CzechRepublic,
    id: 126,
    description: ''
  },
  /* --- HORILKA --- */
  {
    title: 'Koskenkorva 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 519, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 494, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    id: 130,
    description: ''
  },
  {
    title: 'Koskenkorva Lemon Lime 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 399, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    id: 130,
    description: ''
  },
  {
    title: 'Koskenkorva Sauna Barrel 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 379, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    id: 130,
    description: ''
  },
  {
    id: 128,
    title: 'Absolut Mandrin 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Sweden,
    description: ''
  },
  {
    id: 128,
    title: 'Absolut Pears 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 434, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Sweden,
    description: ''
  },
  {
    title: 'Finlandia 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 424, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 339, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Finland,
    id: 129,
    description: ''
  },
  {
    title: 'Staritsky Levitsky Reserve 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 869, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    id: 129,
    description: ''
  },
  {
    title: 'Staritsky Levitsky 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Ukraine,
    id: 129,
    description: ''
  },
  {
    title: 'Staritsky Levitsky Distil №9 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 389, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Ukraine,
    id: 129,
    description: ''
  },
  {
    title: 'R.Jelinek hruska 0.5L',
    category: DrinkCategory.Horilka,
    volume: 0.5,
    prices: {
      [RetailChain.Auchan]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 199, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.CzechRepublic,
    id: 127,
    description: ''
  },
  {
    title: 'Koskenkorva 1.0L',
    category: DrinkCategory.Horilka,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 'none', lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 419, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 'none', lastUpdated: new Date('2023-11-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    id: 130,
    description: ''
  },
];
