// @/seeder/placeholder-data.ts
import { IBeverage, ICocktail } from '@/models/interfaces';
import { DrinkCategory, RetailChain, Country, CocktailIngredients , GlassType} from '@/models/enums';

const beveragesData:IBeverage[] = [
  /* --- BOURBON --- */
  {
    beverageId: 1001,
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
    imageUrl: '/images/beverages/.webp',
    description: 'Тони паленого коричневого цукру і ванілі, трохи цитрусових, сосни і дуба.'
  },
  {
    beverageId: 1002,
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
    beverageId: 1003,
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
    beverageId: 1004,
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
    beverageId: 1005,
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
    beverageId: 1006,
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
    beverageId: 1007,
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
    beverageId: 1008,
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
    beverageId: 1009,
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
    beverageId: 1010,
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
    beverageId: 1011,
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
    beverageId: 1012,
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
    beverageId: 1013,
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
    imageUrl: '',
    description: '/images/beverages/.webp'
  },
  {
    beverageId: 1014,
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
    imageUrl: '/images/beverages/jameson-07.webp',
    description: 'Blended.'
  },
  {
    beverageId: 1015,
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
    imageUrl: '/images/beverages/.webp',
    description: 'Blended.'
  },
  {
    beverageId: 1016,
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
    beverageId: 1017,
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
    imageUrl: '/images/beverages/johnnie-walker-red-label-07.webp',
    description: 'Blended.'
  },
  {
    beverageId: 1018,
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
    beverageId: 1019,
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
    description: 'Blended.'
  },
  {
    beverageId: 1020,
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
    beverageId: 1021,
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
    beverageId: 1022,
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
    beverageId: 1023,
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
    beverageId: 1024,
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
    beverageId: 1025,
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
    beverageId: 1026,
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
    beverageId: 1027,
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
    beverageId: 1028,
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
    beverageId: 1029,
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
    beverageId: 1030,
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
    beverageId: 1031,
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
    beverageId: 1032,
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
    beverageId: 1033,
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
    beverageId: 1034,
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
    beverageId: 1035,
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
    beverageId: 1036,
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
    beverageId: 1037,
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
    beverageId: 1038,
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
    beverageId: 1039,
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
    beverageId: 1040,
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
    beverageId: 1041,
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
    beverageId: 1042,
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
    beverageId: 1043,
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
    beverageId: 1044,
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
    description: ''
  },
  {
    beverageId: 1045,
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
    description: ''
  },
  {
    beverageId: 1046,
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
    description: ''
  },
  {
    beverageId: 1047,
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
    description: ''
  },
  /* --- TINCTURE --- */
  {
    beverageId: 1048,
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
    description: ''
  },
  {
    beverageId: 1049,
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
    description: ''
  },
  {
    beverageId: 1050,
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
    description: ''
  },
  {
    beverageId: 1051,
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
    description: ''
  },
  /* --- HORILKA --- */
  {
    beverageId: 1052,
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
    description: ''
  },
  {
    beverageId: 1053,
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
    description: ''
  },
  {
    beverageId: 1054,
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
    description: ''
  },
  {
    beverageId: 1055,
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
    beverageId: 1056,
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
    beverageId: 1057,
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
    description: ''
  },
  {
    beverageId: 1058,
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
    description: ''
  },
  {
    beverageId: 1059,
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
    description: ''
  },
  {
    beverageId: 1060,
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
    description: ''
  },
  {
    beverageId: 1061,
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
    description: ''
  },
  {
    beverageId: 1062,
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
    description: ''
  },
];

const cocktailsData:ICocktail[] = [
  {
    cocktailID: 3001,
    title: 'Bahama-Mama',
    imageUrl: '/images/cocktails/bahama-mama.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3002,
    title: 'Bloody-Mary',
    imageUrl: '/images/cocktails/bloody-mary.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3003,
    title: 'Blue-Hawaii',
    imageUrl: '/images/cocktails/blue-hawaii.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3004,
    title: 'Blue-Lagoon',
    imageUrl: '/images/cocktails/blue-lagoon.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3005,
    title: 'Blue-Tahoe',
    imageUrl: '/images/cocktails/blue-tahoe.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3006,
    title: 'Caipirinha',
    imageUrl: '/images/cocktails/caipirinha.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3007,
    title: 'Cosmopolitan',
    imageUrl: '/images/cocktails/cosmopolitan.jpg',
    alcoholic: true,
	glassType: GlassType.MARTINI,
    ingredients: [
      CocktailIngredients.HORILKA,
      CocktailIngredients.TRIPLE_SEC,
      CocktailIngredients.LIME_JUICE,
      CocktailIngredients.CRANBERRY_JUICE
    ],
	instructions: ['Початок приготування','Середина приготування','Завершення приготування']
  },
  {
    cocktailID: 3008,
    title: 'Cuba-Libre',
    imageUrl: '/images/cocktails/cuba-libre.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3009,
    title: 'Dirty-Martini',
    imageUrl: '/images/cocktails/dirty-martini.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 30010,
    title: 'Hiroshima',
    imageUrl: '/images/cocktails/hiroshima.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3011,
    title: 'Kamikaze',
    imageUrl: '/images/cocktails/kamikaze.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 30012,
    title: 'Long-Island-iced-tea',
    imageUrl: '/images/cocktails/long-island-iced-tea.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3013,
    title: 'Mai-Tai',
    imageUrl: '/images/cocktails/mai-tai.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3014,
    title: 'Margarita',
    imageUrl: '/images/cocktails/margarita.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3015,
    title: 'Mint-Julep',
    imageUrl: '/images/cocktails/mint-julep.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3016,
    title: 'Mojito',
    imageUrl: '/images/cocktails/mojito.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3017,
    title: 'Pina-Colada',
    imageUrl: '/images/cocktails/pina-colada.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3018,
    title: 'Salty-Dog',
    imageUrl: '/images/cocktails/salty-dog.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3019,
    title: 'Screwdriver',
    imageUrl: '/images/cocktails/screwdriver.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3020,
    title: 'Strawberry-Daiquiri',
    imageUrl: '/images/cocktails/strawberry-daiquiri.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3021,
    title: 'Strawberry-Mojito',
    imageUrl: '/images/cocktails/strawberry-mojito.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3022,
    title: 'Tequila-Sunrise',
    imageUrl: '/images/cocktails/tequila-sunrise.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
  {
    cocktailID: 3023,
    title: 'Whiskey-Sour',
    imageUrl: '/images/cocktails/whiskey-sour.jpg',
    alcoholic: true,
	instructions: ['Початок ','Середина ','Завершення ']

  },
];





export { beveragesData, cocktailsData };