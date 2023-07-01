import {SideFixedLink} from '@models/ui';

export const Main_Fixed_links: SideFixedLink[] = [
  {
    icon: 'svg-home',
    label: 'Home',
    route: '/',
  },
  {
    icon: 'svg-readinglist',
    label: 'Reading List',
    route: '/readinglist',
  },
  {
    icon: 'svg-listings',
    label: 'Listings',
    route: '/listings',
  },
  {
    icon: 'svg-pod',
    label: 'Podcasts',
    route: '/pod',
  },
  {
    icon: 'svg-videos',
    label: 'Videos',
    route: '/videos',
  },
  {
    icon: 'svg-tags',
    label: 'Tags',
    route: '/tags',
  },
  {
    icon: 'svg-faq',
    label: 'FAQ',
    route: '/faq',
  },
  {
    icon: 'svg-shop',
    label: 'DEV Shop',
    route: 'https://shop.dev.to/',
  },
  {
    icon: 'svg-sponsors',
    label: 'Sponsors',
    route: '/sponsors',
  },
  {
    icon: 'svg-about',
    label: 'About',
    route: '/about',
  },
  {
    icon: 'svg-contact',
    label: 'Contact',
    route: '/contact',
  }
];
export const Other_Fixed_links: SideFixedLink[] = [
  {
    icon: 'svg-code-of-conduct',
    label: 'Code of Conduct',
    route: '/code-of-conduct',
  },
  {
    icon: 'svg-privacy',
    label: 'Privacy Policy',
    route: '/privacy',
  },
  {
    icon: 'svg-terms',
    label: 'Terms of use',
    route: '/terms',
  },
];

export const Social_Media: Partial<SideFixedLink>[] = [
  {
    icon: 'svg-twitter',
    route: 'https://twitter.com/thepracticaldev',
  },
  {
    icon: 'svg-facebook',
    route: 'https://facebook.com/thepracticaldev',
  },
  {
    icon: 'svg-github',
    route: 'https://github.com/forem',
  },
  {
    icon: 'svg-instagram',
    route: 'https://www.instagram.com/thepracticaldev/',
  },
  {
    icon: 'svg-twitch',
    route: 'https://www.twitch.tv/thepracticaldev',
  },
  {
    icon: 'svg-mastodon',
    route: 'https://fosstodon.org/@thepracticaldev',
  }
];
