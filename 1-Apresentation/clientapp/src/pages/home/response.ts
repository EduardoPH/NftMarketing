import { nft2, nft } from '../../assets/images';

export const auctions = [
  {
    userName: 'EduPH',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 2354,
    bid: { price: 1.08, codeCoin: 'ETH' },
  },
  {
    userName: 'Mickael',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 654356,
    bid: { price: 2.345454, codeCoin: 'ETH' },
  },
  {
    userName: 'Kiuma',
    imageBanner: nft2,
    imageProfile: nft,
    likes: 76433,
    bid: { price: 4.3243242423, codeCoin: 'BTC' },
  },
  {
    userName: 'Jonas',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 76433,
    bid: { price: 8.08342342343424, codeCoin: 'ETH' },
  },
  {
    userName: 'EduPH',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 2354,
    bid: { price: 1.08, codeCoin: 'ETH' },
  },
  {
    userName: 'Mickael',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 654356,
    bid: { price: 2.345454, codeCoin: 'ETH' },
  },
  {
    userName: 'Kiuma',
    imageBanner: nft2,
    imageProfile: nft,
    likes: 76433,
    bid: { price: 4.3243242423, codeCoin: 'BTC' },
  },
  {
    userName: 'Jonas',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 76433,
    bid: { price: 8.08342342343424, codeCoin: 'ETH' },
  },
  {
    userName: 'EduPH',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 2354,
    bid: { price: 1.08, codeCoin: 'ETH' },
  },
  {
    userName: 'Mickael',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 654356,
    bid: { price: 2.345454, codeCoin: 'ETH' },
  },
  {
    userName: 'Kiuma',
    imageBanner: nft2,
    imageProfile: nft,
    likes: 76433,
    bid: { price: 4.3243242423, codeCoin: 'BTC' },
  },
  {
    userName: 'Jonas',
    imageBanner: nft,
    imageProfile: nft2,
    likes: 76433,
    bid: { price: 8.08342342343424, codeCoin: 'ETH' },
  },
];

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;

  let randomIndex;

  const value = array;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [value[currentIndex], value[randomIndex]] = [
      value[randomIndex],
      value[currentIndex],
    ];
  }

  return value;
}
