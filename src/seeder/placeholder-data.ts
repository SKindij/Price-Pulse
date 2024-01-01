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
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 2199, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1999, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-Rare-Breed-07.webp',
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-Longbranch-07.webp',
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
      [RetailChain.Silpo]: { price: 749, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 729, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-101-07.webp',
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
      [RetailChain.Silpo]: { price: 599, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 670, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-07.webp',
    description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    beverageId: 1005,
    title: 'Wild Turkey Rye 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 849, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 969, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1099, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-Rye-07.webp',
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
      [RetailChain.Silpo]: { price: 1149, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1150, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    imageUrl: '/images/beverages/Jim-Beam-Double-Oak-07.webp',
    description: 'Баланс насиченого смаку і неповторного аромату.'
  },
  {
    beverageId: 1007,
    title: 'Jim Beam Rye 0.7L',
    category: DrinkCategory.Bourbon,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1179, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1099, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1126, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    imageUrl: '/images/beverages/Jim-Beam-Rye-07.webp',
    description: 'Аромат житнього хліба, чорного перцю з нотами дині, горіхів та деревної смоли. Карамельно-ванільний смак з відтінками дуба.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 559, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    imageUrl: '/images/beverages/Jim-Beam-White-4Y-07.webp',
    description: 'Аромат з деревними тонами та відтінками лугових квітів. Смак фруктів, карамелі та ванілі.'
  },
  {
    beverageId: 1009,
	  title: 'Wild Turkey 101 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 939, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 939, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-101-10.webp',
    description: 'Смак ванілі, меду, карамелі, тютюну і тростинного цукру. Аромат ванілі, дуба, апельсина.'
  },
  {
    beverageId: 1010,
	  title: 'Wild Turkey 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 1045, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 749, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 1099, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 853, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.USA,
    imageUrl: '/images/beverages/Wild-Turkey-10.webp',
	  description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    beverageId: 1011,
	  title: 'Jim Beam Red Stag Cherry 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1159, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    imageUrl: '/images/beverages/Jim-Beam-Red-Stag-Cherry-10.webp',
    description: 'Аромат черешня, ваніль, шоколад. Солодкуватий із пряним післясмаком.'
  },
  {
    beverageId: 1012,
	  title: 'Jim Beam White 4Y 1.0L',
    category: DrinkCategory.Bourbon,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 729, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1159, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 699, lastUpdated: new Date('2023-12-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 699, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.USA,
    imageUrl: '/images/beverages/Jim-Beam-White-4Y-07.webp',
    description: 'Аромат з деревними тонами та відтінками лугових квітів. Смак фруктів, карамелі та ванілі.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 699, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    imageUrl: '/images/beverages/Jameson-Stout-07.webp',
    description: 'Вершковий смак з нотами какао-бобів та гвоздики. Аромати смажених кавових зерен, шоколаду, зелених яблук та соковитої дині.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 564, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    imageUrl: '/images/beverages/jameson-07.webp',
    description: 'Купажований (Blended) смак пряний і солодкий.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 569, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    imageUrl: '/images/beverages/Ballantines-Finest-07.webp',
    description: 'Коричневий цукор поряд з нотами ванілі та сухофруктів. Аромат апельсинової шкірки з відтінками карамелі.'
  },
  {
    beverageId: 1016,
    title: 'Johnnie Walker Blonde 0.7L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 674, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    imageUrl: '/images/beverages/Johnnie-Walker-Blonde-07.webp',
    description: 'Аромат іриски, крем-карамелі та свіжих ягід. Смак із вершковою текстурою, ванільно-яблучними тонами.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 489, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    imageUrl: '/images/beverages/johnnie-walker-red-label-07.webp',
    description: 'Аромат цитрусів із нотами меду, ароматних трав, спецій. Смак чорного перцю з анісом.'
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
      [RetailChain.Rozetka]: { price: 349, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Scotland,
    imageUrl: '/images/beverages/Hankey-Bannister-07.webp',
    description: 'Ванільний аромат. У фруктовому смаку відчувається мигдаль і прянощі.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1090, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ireland,
    imageUrl: '/images/beverages/jameson-10.webp',
    description: 'Купажований (Blended) смак пряний і солодкий.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 769, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    imageUrl: '/images/beverages/Ballantines-Finest-10.webp',
    description: 'Коричневий цукор поряд з нотами ванілі та сухофруктів. Аромат апельсинової шкірки з відтінками карамелі.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 699, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Britain,
    imageUrl: '/images/beverages/johnnie-walker-red-label-10.webp',
    description: 'Аромат цитрусів із нотами меду, ароматних трав, спецій. Смак чорного перцю з анісом.'
  },
  {
    beverageId: 1022,
    title: 'Hankey Bannister 1.0L',
    category: DrinkCategory.Whiskey,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 599, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 569, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-12-23') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 499, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Scotland,
    imageUrl: '/images/beverages/Hankey-Bannister-10.webp',
    description: 'Ванільний аромат. У фруктовому смаку відчувається мигдаль і прянощі.'
  },
  /* --- RUM --- */
  {
    beverageId: 1023,
	  title: 'Doorlys Gold 5Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 934, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 864, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Barbados,
    imageUrl: '/images/beverages/Doorlys-Gold-5Y-07.webp',
    description: 'Ноти тропічних і сушених фруктів, підсмажених кокосів і дуба. Післясмак фруктовий ванільний.'
  },
  {
    beverageId: 1024,
	  title: 'Doorlys White 3Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 865, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 763, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Barbados,
    imageUrl: '/images/beverages/Doorlys-White-3Y-07.webp',
    description: 'Ванільний аромат із вершковими та медовими нотками. Смак з відтінками екзотичних фруктів.'
  },
  {
    beverageId: 1025,
    title: 'Botafogo Spiced 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 649, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 649, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 599, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Belgium,
    imageUrl: '/images/beverages/Botafogo-Spiced-07.webp',
    description: 'У смаку - спеції, ваніль, карамель і лакриця. Аромат солодкий цитрусовий.'
  },
  {
    beverageId: 1026,
    title: 'Appleton Reserve 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 642, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Jamaica,
    imageUrl: '/images/beverages/Appleton-Reserve-07.webp',
    description: 'Cмак пряних і горіхових нот із відтінком меду, ванілі і лісового горіха.'
  },
  {
    beverageId: 1027,
    title: 'Appleton 12Y 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1149, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1099, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1099, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 0,
    country: Country.Jamaica,
    imageUrl: '/images/beverages/Appleton-12Y-07.webp',
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
      [RetailChain.Silpo]: { price: 789, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 799, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Cuba,
    imageUrl: '/images/beverages/Santiago-Cuba-Anejo-07.webp',
    description: 'Гладкий смак із фруктовими відтінками, нюансами вишні, ванілі, какао.'
  },
  {
    beverageId: 1029,
    title: 'Bacardi Spiced 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 452, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 409, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 409, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Italy,
    imageUrl: '/images/beverages/Bacardi-Spiced-07.webp',
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 399, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Cuba,
    imageUrl: '/images/beverages/Santiago-Cuba-Carta-Blanca-07.webp',
    description: 'Квітковий аромат із відтінками меду і карамелі. Свіжий цитрусовий смак.'
  },
  {
    beverageId: 1031,
    title: 'Botafogo Black 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 649, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 749, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 669, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Belgium,
    imageUrl: '/images/beverages/Botafogo-Black-07.webp',
    description: 'Темний ром, ваніль, апельсин, чилі. Аромат висушеного винограду.'
  },
  {
    beverageId: 1032,
    title: 'Appleton Estate Signature 0.7L',
    category: DrinkCategory.Rum,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 509, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 509, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 509, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Jamaica,
    imageUrl: '/images/beverages/Appleton-Estate-Signature-07.webp',
    description: 'Аромат сливи та спецій із тонами сухофруктів. У смаку чорний шоколад та смажені горіхи.'
  },
  {
    beverageId: 1033,
    title: 'Bacardi Spiced 1.0L',
    category: DrinkCategory.Rum,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 569, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 944, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 539, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 539, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Italy,
    imageUrl: '/images/beverages/Bacardi-Spiced-10.webp',
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 860, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Malfy-Pink-Grapefruit-07.webp',
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 777, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Malfy-Con-Limone-07.webp',
    description: 'Аромат з тонами лимона, ялівцю, дягелю і кориці.'
  },
  {
    beverageId: 1036,
    title: 'Gordons Pink 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 659, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 729, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Britain,
    imageUrl: '/images/beverages/Gordons-Pink-07.webp',
    description: 'Малина, полуниця та червона смородина, ялівцеві акценти.'
  },
  {
    beverageId: 1037,
    title: 'Gordons Sicilian Lemon 0.7L',
    category: DrinkCategory.Gin,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 529, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Novus]: { price: 689, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 709, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Britain,
    imageUrl: '/images/beverages/Gordons-Sicilian-Lemon-07.webp',
    description: 'Аромат сицилійських лимонів із хвойними акцентами. Смак із тонами ялівцю.'
  },
  /* --- PORTWEIN --- */
  {
    beverageId: 1038,
    title: 'Colonist Башта 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 564, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    imageUrl: '/images/beverages/Colonist-Башта-07.webp',
    description: ''
  },
  {
    beverageId: 1039,
    title: 'Osborn Premium Rojo 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 374, lastUpdated: new Date('2023-12-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Spain,
    imageUrl: '/images/beverages/Osborn-Premium-Rojo-07.webp',
    description: 'Смак з тонами полину, гіркої апельсинової шкірки та відтінками кориці.'
  },
  {
    beverageId: 1040,
    title: 'Osborn Porto Tawny 0.7L',
    category: DrinkCategory.Portwein,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 290, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Spain,
    imageUrl: '/images/beverages/Osborn-Porto-Tawny-07.webp',
    description: 'Туріга Насьональ. Тони пряні, кондитерські.'
  },
  /* --- CHAMPAGNE --- */
  {
    beverageId: 1041,
    title: 'Colonist Бісер 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 592, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    imageUrl: '/images/beverages/Colonist-Бісер-07.webp',
    description: 'Аромат вершків, ванілі та хлібної скоринки. Смак зелених яблук.'
  },
  {
    beverageId: 1042,
    title: 'Martini Prosecco 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 389, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 539, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Silpo]: { price: 369, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 389, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Martini-Prosecco-07.webp',
    description: 'Смак фруктових нот. Аромат зелених яблук, чебрецю, персика.'
  },
  {
    beverageId: 1043,
    title: 'Martini Rose 0.7L',
    category: DrinkCategory.Champagne,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 535, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 438, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Martini-Rose-07.webp',
    description: 'Купаж. Тони букета фруктові, квіткові.'
  },
  /* --- TEQUILA --- */
  {
    beverageId: 1044,
    title: 'Espolon Blanco 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1454, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1199, lastUpdated: new Date('2023-11-21') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1179, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Mexico,
    imageUrl: '/images/beverages/Espolon-Blanco-07.webp',
    description: 'Аромат квітковий з нотами агави та чорного перцю. Смак лайма, цедри цитрусових і печеного ананаса.'
  },
  {
    beverageId: 1045,
    title: 'Espolon Reposado 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 1672, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 1449, lastUpdated: new Date('2023-11-21') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 1399, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Mexico,
    imageUrl: '/images/beverages/Espolon-Reposado-07.webp',
    description: 'Аромат карамелі, банана та агави. Смак тропічних плодів, квітів, карамелі та ванілі.'
  },
  {
    beverageId: 1046,
    title: 'Jose Cuervo Silver 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 579, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Silpo]: { price: 839, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 835, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Mexico,
    imageUrl: '/images/beverages/Jose-Cuervo-Silver-07.webp',
    description: 'Аромат карамелі та суміші трав з перцевою ноткою. Смак смаженої агави, сандалового дерева із чорним перцем.'
  },
  {
    beverageId: 1047,
    title: 'Jose Cuervo Especial 0.7L',
    category: DrinkCategory.Tequila,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 579, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Silpo]: { price: 579, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 850, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.Mexico,
    imageUrl: '/images/beverages/Jose-Cuervo-Especial-07.webp',
    description: 'Аромат агави із відтінками дуба. Смак дуба та ванілі.'
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
      [RetailChain.Silpo]: { price: 399, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 476, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 399, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Germany,
    imageUrl: '/images/beverages/Jagermeister-07.webp',
    description: 'Смак: з легкою гіркотою, збалансований насолодою. Аромат гірських трав, лакриці, гвоздики та кориці.'
  },
  {
    beverageId: 1049,
    title: 'Becherovka 0.7L',
    category: DrinkCategory.Tincture,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 259, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 349, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.CzechRepublic,
    imageUrl: '/images/beverages/Becherovka-07.webp',
    description: 'Понад 20 видів лікарських трав та спецій. Смак солодкий та гіркий одночасно.'
  },
  {
    beverageId: 1050,
    title: 'Jagermeister 1.0L',
    category: DrinkCategory.Tincture,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 919, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 599, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 759, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Germany,
    imageUrl: '/images/beverages/Jagermeister-10.webp',
    description: 'Смак: з легкою гіркотою, збалансований насолодою. Аромат гірських трав, лакриці, гвоздики та кориці.'
  },
  {
    beverageId: 1051,
    title: 'Becherovka 1.0L',
    category: DrinkCategory.Tincture,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 469, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 469, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 469, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 3,
    country: Country.CzechRepublic,
    imageUrl: '/images/beverages/Becherovka-10.webp',
    description: 'Понад 20 видів лікарських трав та спецій. Смак солодкий та гіркий одночасно.'
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
      [RetailChain.Silpo]: { price: 319, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 299, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    imageUrl: '/images/beverages/Koskenkorva-07.webp',
    description: 'Аромат з легкими ячмінними нотками. Смак із лакричними відтінками.'
  },
  {
    beverageId: 1053,
    title: 'Koskenkorva Lemon Lime 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 369, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 339, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    imageUrl: '/images/beverages/Koskenkorva-Lemon-Lime-07.webp',
    description: 'Смак із нотами трав та лимону. Аромат лайма.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 339, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    imageUrl: '/images/beverages/Koskenkorva-Sauna-Barrel-07.webp',
    description: 'Аромат із відтінками дерева, смоли та нотками диму. Присмак бурбону, смоли та диму.'
  },
  {
    beverageId: 1055,
    title: 'Absolut Mandarin 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 349, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 369, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Sweden,
    imageUrl: '/images/beverages/Absolut-Mandarin-07.webp',
    description: 'Аромат мандарина. Смак апельсинової цедри.'
  },
  {
    beverageId: 1056,
    title: 'Absolut Pears 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 349, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 369, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Sweden,
    imageUrl: '/images/beverages/Absolut-Pears-07.webp',
    description: 'Смак груші.'
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
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 359, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.Finland,
    imageUrl: '/images/beverages/Finlandia-07.webp',
    description: 'Гладкий смак від добірного ячменю.'
  },
  {
    beverageId: 1058,
    title: 'Staritsky Levitsky 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 499, lastUpdated: new Date('2023-12-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 499, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Ukraine,
    imageUrl: '/images/beverages/Staritsky-Levitsky-07.webp',
    description: 'Смак пшениці. Аромат із тонкою пряністю.'
  },
  {
    beverageId: 1059,
    title: 'Staritsky Levitsky Distil №9 0.7L',
    category: DrinkCategory.Horilka,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 349, lastUpdated: new Date('2023-12-22') },
      [RetailChain.Silpo]: { price: 389, lastUpdated: new Date('2023-12-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 299, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 4,
    country: Country.Ukraine,
    imageUrl: '/images/beverages/Staritsky-Levitsky-Distil-9-07.webp',
    description: 'Смак - свіжий, натуральний. Аромат - легкий, чистий.'
  },
  {
    beverageId: 1060,
    title: 'R.Jelinek hruska 0.5L',
    category: DrinkCategory.Horilka,
    volume: 0.5,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 199, lastUpdated: new Date('2023-12-22') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 0, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 2,
    country: Country.CzechRepublic,
    imageUrl: '/images/beverages/R.Jelinek-hruska-05.webp',
    description: 'Смак і аромат стиглої груші.'
  },
  {
    beverageId: 1061,
    title: 'Staritsky Levitsky Reserve 1.0L',
    category: DrinkCategory.Horilka,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 869, lastUpdated: new Date('2023-12-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 699, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Ukraine,
    imageUrl: '/images/beverages/Staritsky-Levitsky-Reserve-07.webp',
    description: 'Смак пшениці. Аромат із тонкою пряністю.'
  },
  {
    beverageId: 1062,
    title: 'Koskenkorva 1.0L',
    category: DrinkCategory.Horilka,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 419, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 329, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 5,
    country: Country.Finland,
    imageUrl: '/images/beverages/Koskenkorva-10.webp',
    description: 'Аромат з легкими ячмінними нотками. Смак із лакричними відтінками.'
  },
  /* --- ABSINTHE --- */
  {
    beverageId: 1063,
    title: 'Xenta Absenta 0.7L',
    category: DrinkCategory.Absinthe,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 749, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 829, lastUpdated: new Date('2024-01-01') },
    },
    inWish: true,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Xenta-Absenta-07.webp',
    description: 'Смак з легким натяком на локрицю. Широка хвиля анісових ноток.'
  },
  {
    beverageId: 1064,
    title: 'R.Jelinek Absinthe 0.7L',
    category: DrinkCategory.Absinthe,
    volume: 0.7,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 409, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 365, lastUpdated: new Date('2024-01-01') },
    },
    inWish: false,
    ratings: 0,
    country: Country.CzechRepublic,
    imageUrl: '/images/beverages/R.Jelinek-Absinthe-07.webp',
    description: 'Злегка гіркуватий смак з відтінками полину. Аромати анісу, лікарських трав, цитрусів і фенхелю.'
  },
  {
    beverageId: 1065,
    title: 'Xenta Absenta 1.0L',
    category: DrinkCategory.Absinthe,
    volume: 1.0,
    prices: {
      [RetailChain.Auchan]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Novus]: { price: 1339, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Silpo]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.ATB]: { price: 0, lastUpdated: new Date('2023-11-01') },
      [RetailChain.Rozetka]: { price: 929, lastUpdated: new Date('2024-01-01') },
    },
    inWish: true,
    ratings: 5,
    country: Country.Italy,
    imageUrl: '/images/beverages/Xenta-Absenta-10.webp',
    description: 'Смак з легким натяком на локрицю. Широка хвиля анісових ноток.'
  },
];

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





export { beveragesData, cocktailsData };