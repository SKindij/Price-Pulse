// https://nextjs.org/learn/dashboard-app/fetching-data
const countriesData = [
  {
    countryName: 'Argentina',
    prefixEAN: '779',
  },
  {
    countryName: 'Armenia',
    prefixEAN: '485',
  },
  {
    countryName: 'Australia',
    prefixEAN: '930',
  },
  {
    countryName: 'Barbados',
    prefixEAN: '500',
  },
  {
    countryName: 'Belgium',
    prefixEAN: '540',
  },
  {
    countryName: 'Britain',
    prefixEAN: '500-509',
  },
  {
    countryName: 'Bulgaria',
    prefixEAN: '380',
  },
  {
    countryName: 'Cuba',
    prefixEAN: '850',
  },
  {
    countryName: 'CzechRepublic',
    prefixEAN: '859',
  },
  {
    countryName: 'Dominican',
    prefixEAN: '746',
  },
  {
    countryName: 'Finland',
    prefixEAN: '640',
  },
  {
    countryName: 'France',
    prefixEAN: '300-379',
  },
  {
    countryName: 'Georgia',
    prefixEAN: '486',
  },
  {
    countryName: 'Germany',
    prefixEAN: '400-440',
  },
  {
    countryName: 'Greece',
    prefixEAN: '520',
  },
  {
    countryName: 'Ireland',
    prefixEAN: '539',
  },
  {
    countryName: 'Italy',
    prefixEAN: '800-839',
  },
  {
    countryName: 'Jamaica',
    prefixEAN: '600-601',
  },
  {
    countryName: 'Mexico',
    prefixEAN: '750-751',
  },
  {
    countryName: 'Norway',
    prefixEAN: '700-709',
  },
  {
    countryName: 'Poland',
    prefixEAN: '590',
  },
  {
    countryName: 'Portugal',
    prefixEAN: '560',
  },
  {
    countryName: 'Scotland',
    prefixEAN: '500',
  },
  {
    countryName: 'Slovakia',
    prefixEAN: '860',
  },
  {
    countryName: 'SouthAfrica',
    prefixEAN: '600-601',
  },
  {
    countryName: 'Spain',
    prefixEAN: '841-843',
  },
  {
    countryName: 'Sweden',
    prefixEAN: '730-739',
  },
  {
    countryName: 'Ukraine',
    prefixEAN: '482',
  },
  {
    countryName: 'USA',
    prefixEAN: '000-019',
  },
];
const drinkCategoriesData = [
  'absinthe', 'bourbon', 'brandy', 'champagne', 'cider', 'gin', 'horilka',
   'liqueur', 'portwein', 'rum', 'tequila', 'tincture', 'whiskey', 'wine'
];
const retailChainsData = [
  'Auchan', 'Novus', 'Silpo', 'ATB', 'Rozetka'
]
const beveragesData = [
  /* --- BOURBON --- */
  {
    beverageId: 1001,
	  title: 'Wild Turkey Rare Breed 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 1669, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 2199, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1999, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-Rare-Breed-07.webp',
    description: 'Тони паленого коричневого цукру і ванілі, трохи цитрусових, сосни і дуба.'
  },
  {
    beverageId: 1002,
	  title: 'Wild Turkey Longbranch 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 1637, lastUpdated: '2023-11-01' },
      2: { price: 1779, lastUpdated: '2023-11-01' },
      3: { price: 1699, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-Longbranch-07.webp',
    description: 'Смак з відтінками димних солодощів, червоних яблук і карамелі.'
  },
  {
    beverageId: 1003,
	  title: 'Wild Turkey 101 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 1049, lastUpdated: '2023-11-01' },
      2: { price: 729, lastUpdated: '2023-11-01' },
      3: { price: 749, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 729, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-101-07.webp',
    description: 'Смак ванілі, меду, карамелі, тютюну і тростинного цукру. Аромат ванілі, дуба, апельсина.'
  },
  {
    beverageId: 1004,
	  title: 'Wild Turkey 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 849, lastUpdated: '2023-11-01' },
      2: { price: 589, lastUpdated: '2023-11-01' },
      3: { price: 599, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 670, lastUpdated: '2024-01-01' },
    },
    inWish: true,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-07.webp',
    description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    beverageId: 1005,
    title: 'Wild Turkey Rye 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 849, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 969, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1099, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-Rye-07.webp',
    description: 'Аромат має ванільно-пряні, дубові, цитрусові акценти. У смаку грушеві тони в компанії карамелі.'
  },
  {
    beverageId: 1006,
    title: 'Jim Beam Double Oak 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 1089, lastUpdated: '2023-11-01' },
      2: { price: 1199, lastUpdated: '2023-11-01' },
      3: { price: 1149, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1150, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 29,
    imageUrl: '/images/beverages/Jim-Beam-Double-Oak-07.webp',
    description: 'Баланс насиченого смаку і неповторного аромату.'
  },
  {
    beverageId: 1007,
    title: 'Jim Beam Rye 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 1179, lastUpdated: '2023-11-01' },
      3: { price: 1099, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1126, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 29,
    imageUrl: '/images/beverages/Jim-Beam-Rye-07.webp',
    description: 'Аромат житнього хліба, чорного перцю з нотами дині, горіхів та деревної смоли. Карамельно-ванільний смак з відтінками дуба.'
  },
  {
    beverageId: 1008,
    title: 'Jim Beam White 4Y 0.7L',
    category: 2,
    volume: 0.7,
    prices: {
      1: { price: 559, lastUpdated: '2023-11-01' },
      2: { price: 549, lastUpdated: '2023-11-01' },
      3: { price: 699, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 559, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 29,
    imageUrl: '/images/beverages/Jim-Beam-White-4Y-07.webp',
    description: 'Аромат з деревними тонами та відтінками лугових квітів. Смак фруктів, карамелі та ванілі.'
  },
  {
    beverageId: 1009,
	  title: 'Wild Turkey 101 1.0L',
    category: 2,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 939, lastUpdated: '2023-12-22' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 939, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-101-10.webp',
    description: 'Смак ванілі, меду, карамелі, тютюну і тростинного цукру. Аромат ванілі, дуба, апельсина.'
  },
  {
    beverageId: 1010,
	  title: 'Wild Turkey 1.0L',
    category: 2,
    volume: 1.0,
    prices: {
      1: { price: 1045, lastUpdated: '2023-11-01' },
      2: { price: 749, lastUpdated: '2023-12-22' },
      3: { price: 1099, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 853, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 29,
    imageUrl: '/images/beverages/Wild-Turkey-10.webp',
	  description: 'Аромат ірису, меду, карамелі і обпаленого дуба. Делікатний, солодкуватий, трохи маслянистий смак.'
  },
  {
    beverageId: 1011,
	  title: 'Jim Beam Red Stag Cherry 1.0L',
    category: 2,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 1159, lastUpdated: '2023-12-22' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 29,
    imageUrl: '/images/beverages/Jim-Beam-Red-Stag-Cherry-10.webp',
    description: 'Аромат черешня, ваніль, шоколад. Солодкуватий із пряним післясмаком.'
  },
  {
    beverageId: 1012,
	  title: 'Jim Beam White 4Y 1.0L',
    category: 2,
    volume: 1.0,
    prices: {
      1: { price: 729, lastUpdated: '2023-11-01' },
      2: { price: 1159, lastUpdated: '2023-11-01' },
      3: { price: 699, lastUpdated: '2023-12-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 699, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 29,
    imageUrl: '/images/beverages/Jim-Beam-White-4Y-07.webp',
    description: 'Аромат з деревними тонами та відтінками лугових квітів. Смак фруктів, карамелі та ванілі.'
  },
  /* --- WHISKEY --- */
  {
    beverageId: 1013,
    title: 'Jameson Stout 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 795, lastUpdated: '2023-11-01' },
      2: { price: 699, lastUpdated: '2023-11-01' },
      3: { price: 709, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 699, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 16,
    imageUrl: '/images/beverages/Jameson-Stout-07.webp',
    description: 'Вершковий смак з нотами какао-бобів та гвоздики. Аромати смажених кавових зерен, шоколаду, зелених яблук та соковитої дині.'
  },
  {
    beverageId: 1014,
    title: 'Jameson 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 599, lastUpdated: '2023-11-01' },
      2: { price: 579, lastUpdated: '2023-11-01' },
      3: { price: 599, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 564, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 16,
    imageUrl: '/images/beverages/jameson-07.webp',
    description: 'Купажований (Blended) смак пряний і солодкий.'
  },
  {
    beverageId: 1015,
    title: 'Ballantines Finest 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 499, lastUpdated: '2023-11-01' },
      2: { price: 499, lastUpdated: '2023-11-01' },
      3: { price: 499, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 569, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 6,
    imageUrl: '/images/beverages/Ballantines-Finest-07.webp',
    description: 'Коричневий цукор поряд з нотами ванілі та сухофруктів. Аромат апельсинової шкірки з відтінками карамелі.'
  },
  {
    beverageId: 1016,
    title: 'Johnnie Walker Blonde 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 674, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 6,
    imageUrl: '/images/beverages/Johnnie-Walker-Blonde-07.webp',
    description: 'Аромат іриски, крем-карамелі та свіжих ягід. Смак із вершковою текстурою, ванільно-яблучними тонами.'
  },
  {
    beverageId: 1017,
    title: 'Johnnie Walker Red Label 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 649, lastUpdated: '2023-11-01' },
      2: { price: 499, lastUpdated: '2023-11-01' },
      3: { price: 519, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 489, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 6,
    imageUrl: '/images/beverages/johnnie-walker-red-label-07.webp',
    description: 'Аромат цитрусів із нотами меду, ароматних трав, спецій. Смак чорного перцю з анісом.'
  },
  {
    beverageId: 1018,
    title: 'Hankey Bannister 0.7L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 369, lastUpdated: '2023-11-01' },
      2: { price: 369, lastUpdated: '2023-11-01' },
      3: { price: 369, lastUpdated: '2023-11-01' },
      4: { price: 362, lastUpdated: '2023-11-01' },
      5: { price: 349, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 23,
    imageUrl: '/images/beverages/Hankey-Bannister-07.webp',
    description: 'Ванільний аромат. У фруктовому смаку відчувається мигдаль і прянощі.'
  },
  {
    beverageId: 1019,
    title: 'Jameson  1.0L',
    category: 13,
    volume: 1.0,
    prices: {
      1: { price: 799, lastUpdated: '2023-11-01' },
      2: { price: 799, lastUpdated: '2023-11-01' },
      3: { price: 799, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1090, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 16,
    imageUrl: '/images/beverages/jameson-10.webp',
    description: 'Купажований (Blended) смак пряний і солодкий.'
  },
  {
    beverageId: 1020,
    title: 'Ballantines Finest 1.0L',
    category: 13,
    volume: 1.0,
    prices: {
      1: { price: 639, lastUpdated: '2023-11-01' },
      2: { price: 629, lastUpdated: '2023-11-01' },
      3: { price: 689, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 769, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 6,
    imageUrl: '/images/beverages/Ballantines-Finest-10.webp',
    description: 'Коричневий цукор поряд з нотами ванілі та сухофруктів. Аромат апельсинової шкірки з відтінками карамелі.'
  },
  {
    beverageId: 1021,
    title: 'Johnnie Walker Red Label 1.0L',
    category: 13,
    volume: 1.0,
    prices: {
      1: { price: 779, lastUpdated: '2023-11-01' },
      2: { price: 699, lastUpdated: '2023-11-01' },
      3: { price: 959, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 699, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 6,
    imageUrl: '/images/beverages/johnnie-walker-red-label-10.webp',
    description: 'Аромат цитрусів із нотами меду, ароматних трав, спецій. Смак чорного перцю з анісом.'
  },
  {
    beverageId: 1022,
    title: 'Hankey Bannister 1.0L',
    category: 13,
    volume: 0.7,
    prices: {
      1: { price: 599, lastUpdated: '2023-11-01' },
      2: { price: 569, lastUpdated: '2023-12-22' },
      3: { price: 499, lastUpdated: '2023-12-23' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 499, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 23,
    imageUrl: '/images/beverages/Hankey-Bannister-10.webp',
    description: 'Ванільний аромат. У фруктовому смаку відчувається мигдаль і прянощі.'
  },
  /* --- RUM --- */
  {
    beverageId: 1023,
	  title: 'Doorlys Gold 5Y 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 934, lastUpdated: '2023-12-22' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 864, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 4,
    imageUrl: '/images/beverages/Doorlys-Gold-5Y-07.webp',
    description: 'Ноти тропічних і сушених фруктів, підсмажених кокосів і дуба. Післясмак фруктовий ванільний.'
  },
  {
    beverageId: 1024,
	  title: 'Doorlys White 3Y 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 865, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 763, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 4,
    imageUrl: '/images/beverages/Doorlys-White-3Y-07.webp',
    description: 'Ванільний аромат із вершковими та медовими нотками. Смак з відтінками екзотичних фруктів.'
  },
  {
    beverageId: 1025,
    title: 'Botafogo Spiced 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 649, lastUpdated: '2023-12-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 649, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 599, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 5,
    imageUrl: '/images/beverages/Botafogo-Spiced-07.webp',
    description: 'У смаку - спеції, ваніль, карамель і лакриця. Аромат солодкий цитрусовий.'
  },
  {
    beverageId: 1026,
    title: 'Appleton Reserve 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 642, lastUpdated: '2023-12-22' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 18,
    imageUrl: '/images/beverages/Appleton-Reserve-07.webp',
    description: 'Cмак пряних і горіхових нот із відтінком меду, ванілі і лісового горіха.'
  },
  {
    beverageId: 1027,
    title: 'Appleton 12Y 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 1149, lastUpdated: '2023-12-22' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 1099, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1099, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 0,
    countryID: 18,
    imageUrl: '/images/beverages/Appleton-12Y-07.webp',
    description: 'Вершковий смак із відтінками апельсинової цедри і ванілі. Аромат волоського і мускатного горіхів.'
  },
  {
    beverageId: 1028,
    title: 'Santiago de Cuba Anejo 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 599, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 789, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 799, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 8,
    imageUrl: '/images/beverages/Santiago-Cuba-Anejo-07.webp',
    description: 'Гладкий смак із фруктовими відтінками, нюансами вишні, ванілі, какао.'
  },
  {
    beverageId: 1029,
    title: 'Bacardi Spiced 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 452, lastUpdated: '2023-12-22' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 409, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 409, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 17,
    imageUrl: '/images/beverages/Bacardi-Spiced-07.webp',
    description: 'Ваніль, кориця, мускатний горіх і мед. Аромат з нотками дубової бочки і сухофруктів.'
  },
  {
    beverageId: 1030,
    title: 'Santiago de Cuba Carta Blanca 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 399, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 399, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 2,
    countryID: 8,
    imageUrl: '/images/beverages/Santiago-Cuba-Carta-Blanca-07.webp',
    description: 'Квітковий аромат із відтінками меду і карамелі. Свіжий цитрусовий смак.'
  },
  {
    beverageId: 1031,
    title: 'Botafogo Black 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 649, lastUpdated: '2023-12-22' },
      2: { price: 749, lastUpdated: '2023-12-22' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 669, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 2,
    countryID: 5,
    imageUrl: '/images/beverages/Botafogo-Black-07.webp',
    description: 'Темний ром, ваніль, апельсин, чилі. Аромат висушеного винограду.'
  },
  {
    beverageId: 1032,
    title: 'Appleton Estate Signature 0.7L',
    category: 10,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 509, lastUpdated: '2023-12-22' },
      3: { price: 509, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 509, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 18,
    imageUrl: '/images/beverages/Appleton-Estate-Signature-07.webp',
    description: 'Аромат сливи та спецій із тонами сухофруктів. У смаку чорний шоколад та смажені горіхи.'
  },
  {
    beverageId: 1033,
    title: 'Bacardi Spiced 1.0L',
    category: 10,
    volume: 1.0,
    prices: {
      1: { price: 569, lastUpdated: '2023-12-22' },
      2: { price: 944, lastUpdated: '2023-11-01' },
      3: { price: 539, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 539, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 17,
    imageUrl: '/images/beverages/Bacardi-Spiced-10.webp',
    description: 'Ваніль, кориця, мускатний горіх і мед. Аромат з нотками дубової бочки і сухофруктів.'
  },
  /* --- GIN --- */
  {
    beverageId: 1034,
    title: 'Malfy Pink Grapefruit 0.7L',
    category: 6,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 919, lastUpdated: '2023-11-01' },
      3: { price: 699, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 860, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Malfy-Pink-Grapefruit-07.webp',
    description: 'Тони сицілійського рожевого грейпфрута, коріандра та ревеня.'
  },
  {
    beverageId: 1035,
    title: 'Malfy Con Limone 0.7L',
    category: 6,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 919, lastUpdated: '2023-11-01' },
      3: { price: 699, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 777, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Malfy-Con-Limone-07.webp',
    description: 'Аромат з тонами лимона, ялівцю, дягелю і кориці.'
  },
  {
    beverageId: 1036,
    title: 'Gordons Pink 0.7L',
    category: 6,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 659, lastUpdated: '2023-11-01' },
      3: { price: 499, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 729, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 6,
    imageUrl: '/images/beverages/Gordons-Pink-07.webp',
    description: 'Малина, полуниця та червона смородина, ялівцеві акценти.'
  },
  {
    beverageId: 1037,
    title: 'Gordons Sicilian Lemon 0.7L',
    category: 6,
    volume: 0.7,
    prices: {
      1: { price: 529, lastUpdated: '2023-12-22' },
      2: { price: 689, lastUpdated: '2023-12-01' },
      3: { price: 499, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 709, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 6,
    imageUrl: '/images/beverages/Gordons-Sicilian-Lemon-07.webp',
    description: 'Аромат сицилійських лимонів із хвойними акцентами. Смак із тонами ялівцю.'
  },
  /* --- PORTWEIN --- */
  {
    beverageId: 1038,
    title: 'Colonist Башта 0.7L',
    category: 9,
    volume: 0.7,
    prices: {
      1: { price: 564, lastUpdated: '2023-12-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 28,
    imageUrl: '/images/beverages/Colonist-Башта-07.webp',
    description: ''
  },
  {
    beverageId: 1039,
    title: 'Osborn Premium Rojo 0.7L',
    category: 9,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 374, lastUpdated: '2023-12-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 26,
    imageUrl: '/images/beverages/Osborn-Premium-Rojo-07.webp',
    description: 'Смак з тонами полину, гіркої апельсинової шкірки та відтінками кориці.'
  },
  {
    beverageId: 1040,
    title: 'Osborn Porto Tawny 0.7L',
    category: 9,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 290, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 26,
    imageUrl: '/images/beverages/Osborn-Porto-Tawny-07.webp',
    description: 'Туріга Насьональ. Тони пряні, кондитерські.'
  },
  /* --- CHAMPAGNE --- */
  {
    beverageId: 1041,
    title: 'Colonist Бісер 0.7L',
    category: 4,
    volume: 0.7,
    prices: {
      1: { price: 592, lastUpdated: '2023-12-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 28,
    imageUrl: '/images/beverages/Colonist-Бісер-07.webp',
    description: 'Аромат вершків, ванілі та хлібної скоринки. Смак зелених яблук.'
  },
  {
    beverageId: 1042,
    title: 'Martini Prosecco 0.7L',
    category: 4,
    volume: 0.7,
    prices: {
      1: { price: 389, lastUpdated: '2023-12-01' },
      2: { price: 539, lastUpdated: '2023-12-01' },
      3: { price: 369, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 389, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Martini-Prosecco-07.webp',
    description: 'Смак фруктових нот. Аромат зелених яблук, чебрецю, персика.'
  },
  {
    beverageId: 1043,
    title: 'Martini Rose 0.7L',
    category: 4,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 535, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 438, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Martini-Rose-07.webp',
    description: 'Купаж. Тони букета фруктові, квіткові.'
  },
  /* --- TEQUILA --- */
  {
    beverageId: 1044,
    title: 'Espolon Blanco 0.7L',
    category: 11,
    volume: 0.7,
    prices: {
      1: { price: 1454, lastUpdated: '2023-12-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 1199, lastUpdated: '2023-11-21' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1179, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 19,
    imageUrl: '/images/beverages/Espolon-Blanco-07.webp',
    description: 'Аромат квітковий з нотами агави та чорного перцю. Смак лайма, цедри цитрусових і печеного ананаса.'
  },
  {
    beverageId: 1045,
    title: 'Espolon Reposado 0.7L',
    category: 11,
    volume: 0.7,
    prices: {
      1: { price: 1672, lastUpdated: '2023-12-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 1449, lastUpdated: '2023-11-21' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 1399, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 19,
    imageUrl: '/images/beverages/Espolon-Reposado-07.webp',
    description: 'Аромат карамелі, банана та агави. Смак тропічних плодів, квітів, карамелі та ванілі.'
  },
  {
    beverageId: 1046,
    title: 'Jose Cuervo Silver 0.7L',
    category: 11,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 579, lastUpdated: '2023-12-01' },
      3: { price: 839, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 835, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 19,
    imageUrl: '/images/beverages/Jose-Cuervo-Silver-07.webp',
    description: 'Аромат карамелі та суміші трав з перцевою ноткою. Смак смаженої агави, сандалового дерева із чорним перцем.'
  },
  {
    beverageId: 1047,
    title: 'Jose Cuervo Especial 0.7L',
    category: 11,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 579, lastUpdated: '2023-12-01' },
      3: { price: 579, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 850, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 19,
    imageUrl: '/images/beverages/Jose-Cuervo-Especial-07.webp',
    description: 'Аромат агави із відтінками дуба. Смак дуба та ванілі.'
  },
  /* --- TINCTURE --- */
  {
    beverageId: 1048,
    title: 'Jagermeister 0.7L',
    category: 12,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 399, lastUpdated: '2023-11-01' },
      3: { price: 399, lastUpdated: '2023-12-22' },
      4: { price: 476, lastUpdated: '2023-11-01' },
      5: { price: 399, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 14,
    imageUrl: '/images/beverages/Jagermeister-07.webp',
    description: 'Смак: з легкою гіркотою, збалансований насолодою. Аромат гірських трав, лакриці, гвоздики та кориці.'
  },
  {
    beverageId: 1049,
    title: 'Becherovka 0.7L',
    category: 12,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 349, lastUpdated: '2023-11-01' },
      3: { price: 259, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 349, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 9,
    imageUrl: '/images/beverages/Becherovka-07.webp',
    description: 'Понад 20 видів лікарських трав та спецій. Смак солодкий та гіркий одночасно.'
  },
  {
    beverageId: 1050,
    title: 'Jagermeister 1.0L',
    category: 12,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 919, lastUpdated: '2023-11-01' },
      3: { price: 599, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 759, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 14,
    imageUrl: '/images/beverages/Jagermeister-10.webp',
    description: 'Смак: з легкою гіркотою, збалансований насолодою. Аромат гірських трав, лакриці, гвоздики та кориці.'
  },
  {
    beverageId: 1051,
    title: 'Becherovka 1.0L',
    category: 12,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 469, lastUpdated: '2023-11-01' },
      3: { price: 469, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 469, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 3,
    countryID: 9,
    imageUrl: '/images/beverages/Becherovka-10.webp',
    description: 'Понад 20 видів лікарських трав та спецій. Смак солодкий та гіркий одночасно.'
  },
  /* --- HORILKA --- */
  {
    beverageId: 1052,
    title: 'Koskenkorva 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 519, lastUpdated: '2023-11-01' },
      3: { price: 319, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 299, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 11,
    imageUrl: '/images/beverages/Koskenkorva-07.webp',
    description: 'Аромат з легкими ячмінними нотками. Смак із лакричними відтінками.'
  },
  {
    beverageId: 1053,
    title: 'Koskenkorva Lemon Lime 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 369, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 339, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 11,
    imageUrl: '/images/beverages/Koskenkorva-Lemon-Lime-07.webp',
    description: 'Смак із нотами трав та лимону. Аромат лайма.'
  },
  {
    beverageId: 1054,
    title: 'Koskenkorva Sauna Barrel 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 499, lastUpdated: '2023-11-01' },
      3: { price: 379, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 339, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 11,
    imageUrl: '/images/beverages/Koskenkorva-Sauna-Barrel-07.webp',
    description: 'Аромат із відтінками дерева, смоли та нотками диму. Присмак бурбону, смоли та диму.'
  },
  {
    beverageId: 1055,
    title: 'Absolut Mandarin 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 349, lastUpdated: '2023-12-22' },
      3: { price: 349, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 369, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 27,
    imageUrl: '/images/beverages/Absolut-Mandarin-07.webp',
    description: 'Аромат мандарина. Смак апельсинової цедри.'
  },
  {
    beverageId: 1056,
    title: 'Absolut Pears 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 349, lastUpdated: '2023-11-01' },
      3: { price: 349, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 369, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 27,
    imageUrl: '/images/beverages/Absolut-Pears-07.webp',
    description: 'Смак груші.'
  },
  {
    beverageId: 1057,
    title: 'Finlandia 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 424, lastUpdated: '2023-11-01' },
      3: { price: 339, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 359, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 2,
    countryID: 11,
    imageUrl: '/images/beverages/Finlandia-07.webp',
    description: 'Гладкий смак від добірного ячменю.'
  },
  {
    beverageId: 1058,
    title: 'Staritsky Levitsky 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 499, lastUpdated: '2023-12-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 499, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 28,
    imageUrl: '/images/beverages/Staritsky-Levitsky-07.webp',
    description: 'Смак пшениці. Аромат із тонкою пряністю.'
  },
  {
    beverageId: 1059,
    title: 'Staritsky Levitsky Distil №9 0.7L',
    category: 7,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 349, lastUpdated: '2023-12-22' },
      3: { price: 389, lastUpdated: '2023-12-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 299, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 4,
    countryID: 28,
    imageUrl: '/images/beverages/Staritsky-Levitsky-Distil-9-07.webp',
    description: 'Смак - свіжий, натуральний. Аромат - легкий, чистий.'
  },
  {
    beverageId: 1060,
    title: 'R.Jelinek hruska 0.5L',
    category: 7,
    volume: 0.5,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 199, lastUpdated: '2023-12-22' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 0, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 2,
    countryID: 9,
    imageUrl: '/images/beverages/R.Jelinek-hruska-05.webp',
    description: 'Смак і аромат стиглої груші.'
  },
  {
    beverageId: 1061,
    title: 'Staritsky Levitsky Reserve 1.0L',
    category: 7,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 869, lastUpdated: '2023-12-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 699, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 28,
    imageUrl: '/images/beverages/Staritsky-Levitsky-Reserve-07.webp',
    description: 'Смак пшениці. Аромат із тонкою пряністю.'
  },
  {
    beverageId: 1062,
    title: 'Koskenkorva 1.0L',
    category: 7,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 419, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 329, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 5,
    countryID: 11,
    imageUrl: '/images/beverages/Koskenkorva-10.webp',
    description: 'Аромат з легкими ячмінними нотками. Смак із лакричними відтінками.'
  },
  /* --- ABSINTHE --- */
  {
    beverageId: 1063,
    title: 'Xenta Absenta 0.7L',
    category: 1,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 749, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 829, lastUpdated: '2024-01-01' },
    },
    inWish: true,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Xenta-Absenta-07.webp',
    description: 'Смак з легким натяком на локрицю. Широка хвиля анісових ноток.'
  },
  {
    beverageId: 1064,
    title: 'R.Jelinek Absinthe 0.7L',
    category: 1,
    volume: 0.7,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 0, lastUpdated: '2023-11-01' },
      3: { price: 409, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 365, lastUpdated: '2024-01-01' },
    },
    inWish: false,
    ratings: 0,
    countryID: 9,
    imageUrl: '/images/beverages/R.Jelinek-Absinthe-07.webp',
    description: 'Злегка гіркуватий смак з відтінками полину. Аромати анісу, лікарських трав, цитрусів і фенхелю.'
  },
  {
    beverageId: 1065,
    title: 'Xenta Absenta 1.0L',
    category: 1,
    volume: 1.0,
    prices: {
      1: { price: 0, lastUpdated: '2023-11-01' },
      2: { price: 1339, lastUpdated: '2023-11-01' },
      3: { price: 0, lastUpdated: '2023-11-01' },
      4: { price: 0, lastUpdated: '2023-11-01' },
      5: { price: 929, lastUpdated: '2024-01-01' },
    },
    inWish: true,
    ratings: 5,
    countryID: 17,
    imageUrl: '/images/beverages/Xenta-Absenta-10.webp',
    description: 'Смак з легким натяком на локрицю. Широка хвиля анісових ноток.'
  },
];
const cocktailIngredients = [
  'Absinthe', 'Angostura Bitters', 'Angostura Sugar', 'Black Pepper',
  'Blue Curacao', 'Bourbon', 'Campari', 'Champagne', 'Coca Cola',
  'Cointreau', 'Coconaut Cream', 'Coconaut Liqueur', 'Cranberry Juice',
  'Egg White', 'Grapefruit Juice', 'Grenadine Syrup', 'Crushed Ice',
  'Gin', 'Horilka', 'Ice Cubes', 'Irish cream liqueur', 'Lemon Juice',
  'Lime Juice', 'Lime Wedges', 'Mint Leaves', 'Orange Juice', 'Orgeat Syrup',
  'Peach Schnapps', 'Pineapple Juice', 'Raspberry puree', 'Dark Rum',
  'White Rum', 'Salt', 'Sambuca', 'Simple Syrup', 'Soda Water',
  'Sparkling Water', 'Sprite', 'Strawberry puree', 'Sugar Syrup',
  'Sweet and Sour Mix', 'Tequila', 'Tomato Juice', 'Triple Sec',
  'Vermouth', 'White Rum', 'Whiskey', 'Worcestershire Sauce'
];
const glassTypes = [
  'Bodega', 'Cocktail', 'Collins', 'Coupe', 'Gin Goblet', 'Highball',
  'Hurricane', 'Julep', 'Margarita', 'Martini', 'Old Fashion',
  'Pint', 'Rocks', 'Snifter', 'Shot', 'Sour', 'Wine',
];
const cocktailsData = [
  {
    cocktailID: 3001,
    cocktailTitle: 'Bahama-Mama',
    imageUrl: '/images/cocktails/bahama-mama.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      17: '150 гр',
      32: '30 мл',
      31: '15 мл',
      26: '60 мл',
      29: '60 мл',
      16: '3 краплі',
    },
    instructions: [
      'Збивати всі інгредієнти у чаші блендера до отримання однорідної, снігоподібної консистенції.',
      'Перелити суміш у попередньо охолоджений високий келих.',
      'Прикрасити часточкою апельсина, ананаса чи коктейльною вишнею.'
    ]
  },
  {
    cocktailID: 3002,
    cocktailTitle: 'Bloody-Mary',
    imageUrl: '/images/cocktails/bloody-mary.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      19: '60 мл',
      43: '120 мл',
      22: '10 мл',
      48: 'до смаку',
      4: 'щіпка'
    },
    instructions: ['Перелийте всі інгредієнти в шейкер.','Налийте в келих поверх кубиків льоду.','Прикрашаємо паличкою селери.']
  },
  {
    cocktailID: 3003,
    cocktailTitle: 'Blue-Hawaii',
    imageUrl: '/images/cocktails/blue-hawaii.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      32: '30 мл',
      5: '30 мл',
      11: '30 мл',
      29: '60 мл',
      23: '15 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3004,
    cocktailTitle: 'Blue-Lagoon',
    imageUrl: '/images/cocktails/blue-lagoon.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      19: '30 мл',
      5: '30 мл',
      38: '60 мл',
      29: '60 мл',
      20: 'декілька'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3005,
    cocktailTitle: 'Blue-Tahoe',
    imageUrl: '/images/cocktails/blue-tahoe.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      42: '40 мл',
      23: '20 мл',
      5: '20 мл',
      20: '4 шт.',
      22: '30 мл',
      8: '60 мл',
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3006,
    cocktailTitle: 'Caipirinha',
    imageUrl: '/images/cocktails/caipirinha.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      32: '50 мл',
      17: '2 кубика',
      23: '30 мл',
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3007,
    cocktailTitle: 'Cosmopolitan',
    imageUrl: '/images/cocktails/cosmopolitan.jpg',
    alcoholic: true,
    glassTypeID: 10,
    ingredients: {
      19: '40 мл',
      44: '20 мл',
      23: '20 мл',
      13: '30 мл'
    },
    instructions: ['Початок приготування','Середина приготування','Завершення приготування']
  },
  {
    cocktailID: 3008,
    cocktailTitle: 'Cuba-Libre',
    imageUrl: '/images/cocktails/cuba-libre.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      31: '50 мл',
      9: '120 мл',
      23: '20 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3009,
    cocktailTitle: 'Dirty-Martini',
    imageUrl: '/images/cocktails/dirty-martini.jpg',
    alcoholic: true,
    glassTypeID: 10,
    ingredients: {
      45: '50 мл',
      18: '50 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3010,
    cocktailTitle: 'Hiroshima',
    imageUrl: '/images/cocktails/hiroshima.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      34: '15 мл',
      1: '15 мл',
      21: '15 мл',
      16: '15 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3011,
    cocktailTitle: 'Kamikaze',
    imageUrl: '/images/cocktails/kamikaze.jpg',
    alcoholic: true,
    glassTypeID: 15,
    ingredients: {
      19: '30 мл',
      10: '30 мл',
      23: '30 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3012,
    cocktailTitle: 'Long-Island-Iced-Tea',
    imageUrl: '/images/cocktails/long-island-iced-tea.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      19: '15 мл',
      32: '15 мл',
      18: '15 мл',
      42: '15 мл',
      10: '15 мл',
      22: '15 мл',
      40: '15 мл',
      9: '150 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3013,
    cocktailTitle: 'Mai-Tai',
    imageUrl: '/images/cocktails/mai-tai.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      31: '30 мл',
      10: '15 мл',
      23: '15 мл',
      27: '10 мл',
      17: '100 гр'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3014,
    cocktailTitle: 'Margarita',
    imageUrl: '/images/cocktails/margarita.jpg',
    alcoholic: true,
    glassTypeID: 4,
    ingredients: {
      42: '50 мл',
      10: '20 мл',
      23: '30 мл',
      40: '10 мл',
    },
    instructions: ['Облямівку охолодженого келиха намажте сіллю (використовуйте сік лайма для прилипання).','Перелийте всі інгредієнти в шейкер і збовтайте.','Процідіть у келих.']
  },
  {
    cocktailID: 3015,
    cocktailTitle: 'Mint-Julep',
    imageUrl: '/images/cocktails/mint-julep.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      6: '60 мл',
      36: '30 мл',
      25: '8 штук',
      3: '1 ч.л.',
    },
    instructions: ['Перемішати содову і кубик цукру.','Потріть листочки м’яти та додайте їх до бурбону.','Зверху покрийте куполом колотого льоду.']
  },
  {
    cocktailID: 3016,
    cocktailTitle: 'Mojito',
    imageUrl: '/images/cocktails/mojito.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      32: '60 мл',
      40: '20 мл',
      25: '10 штук',
      36: '120 мл',
      24: '4 шматочки'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3017,
    cocktailTitle: 'Pina-Colada',
    imageUrl: '/images/cocktails/pina-colada.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      32: '60 мл',
      12: '30 мл',
      23: '30 мл',
      29: '90 мл',
      11: '30 мл'
    },
    instructions: [
      'Перелийте всі інгредієнти в шейкер і збовтайте.',
      'Процідіть у келих ураган або хайбол над кубиками льоду.',
      'Прикрасьте часточкою ананаса та вишнею.'
    ]
  },
  {
    cocktailID: 3018,
    cocktailTitle: 'Salty-Dog',
    imageUrl: '/images/cocktails/salty-dog.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      19: '60 мл',
      15: '120 мл',
      33: 'Для посипання',
      20: 'Декілька штук'
    },
    instructions: [
      'Посипте склянку сіллю  і наповніть її доверху кубиками льоду.',
      'Влийте горілку і грейпфрутовий сік. Обережно перемішайте.',
      'Прикрасьте шматочком грейпфрута.'
    ]
  },
  {
    cocktailID: 3019,
    cocktailTitle: 'Screwdriver',
    imageUrl: '/images/cocktails/screwdriver.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      19: '60 мл',
      26: '120 мл'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3020,
    cocktailTitle: 'Strawberry-Daiquiri',
    imageUrl: '/images/cocktails/strawberry-daiquiri.jpg',
    alcoholic: true,
    glassTypeID: 7,
    ingredients: {
      32: '60 мл',
      23: '30 мл',
      30: '45 мл',
      17: 'кілька кубиків'
    },
    instructions: ['Додайте всі інгредієнти в блендер.','Змішайте і перелийте в фужер.','Прикрасити полуницею.']
  },
  {
    cocktailID: 3021,
    cocktailTitle: 'Strawberry-Mojito',
    imageUrl: '/images/cocktails/strawberry-mojito.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      39: '50 мл',
      32: '60 мл',
      37: '100 мл',
      25: '6 шт',
      24: '2 шт'
    },
    instructions: ['Початок ','Середина ','Завершення ']
  },
  {
    cocktailID: 3022,
    cocktailTitle: 'Tequila-Sunrise',
    imageUrl: '/images/cocktails/tequila-sunrise.jpg',
    alcoholic: true,
    glassTypeID: 6,
    ingredients: {
      42: '60 мл',
      16: '15 мл',
      26: '90 мл'
    },
    instructions: ['Налийте текілу в склянку поверх кубиків льоду.','Заправляємо апельсиновим соком.','Потопіть гренадин.']
  },
  {
    cocktailID: 3023,
    cocktailTitle: 'Whiskey-Sour',
    imageUrl: '/images/cocktails/whiskey-sour.jpg',
    alcoholic: true,
    glassTypeID: 13,
    ingredients: {
      2: '2 краплі',
      14: '1 шт',
      6: '60 мл',
      22: '30 мл',
      40: '15 мл'
    },
    instructions: ['Перелийте всі інгредієнти в шейкер.','Струсіть із яєчним білком.','Прикрасьте шматочками апельсина і вишнею.']
  },
];

module.exports = {
  countriesData, drinkCategoriesData, retailChainsData, beveragesData,
  cocktailIngredients, glassTypes, cocktailsData
};