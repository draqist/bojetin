import { useColorModeValue } from '@chakra-ui/react';

export const themes = {
  dark: {
    bg: '#0B0F12',
    text: 'white',
    nav: '#0B0F12B2',
  },
  light: {
    bg: '#E6E6E6',
    text: '#0B0F12',
    nav: '#E6E6E6B2',
  },
};

export const useTheme = () => {
  const nav = useColorModeValue(themes?.light.nav, themes?.dark.nav);
  const bgcolor = useColorModeValue(themes?.light.bg, themes?.dark.bg);
  const text = useColorModeValue(themes?.light.text, themes?.dark.text);
  const close = useColorModeValue('/Close2.svg', '/Menuclose.svg');
  const highlight = useColorModeValue('whatsapp.600', 'whatsapp.400');
  const menu = useColorModeValue('#0B0F12', '#E6E6E6');
  const signature = useColorModeValue(
    'https://i.ibb.co/jvqmLVQ/Drac.png',
    'https://i.ibb.co/Fgn4ts9/Drac1.png',
  );
  return {
    nav,
    bgcolor,
    text,
    close,
    menu,
    signature,
    highlight,
  };
};

export const quote = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const quoteBlock = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.4,
      duration: 1,
    },
  },
};

export const myQuote = 'I create visually enthralling web interfaces';

export interface projectinfo {
  data: any;
  id: string;
  title: string;
  description: string;
  challenges: '';
  code: string;
  link: string;
  image: string;
  data1?: any;
}

export const resumedata = [
  {
    date: 'date',
    company: 'company',
    role: 'role',
    location: 'location',
  },
  {
    date: 'JAN/2022 – MAY/2022',
    company: 'CreatorH',
    role: 'UI Engineer',
    location: 'Remote',
  },
  {
    date: 'FEB/2022 – MAR/2022',
    company: 'NerdzFactory',
    role: 'Technical Instructor',
    location: 'Remote',
  },
  {
    date: 'OCT/2021 – DEC/2021',
    company: 'Mbox',
    role: 'Frontend Developer',
    location: 'Remote',
  },
  {
    date: 'SEP/2021 – OCT/2021',
    company: 'HOTELS NG.',
    role: 'Frontend Intern',
    location: 'Remote',
  },
];

export const blogFetchQuery = `{
    user(username: "The-Draq"){
      publication {
        posts(page: 0) {
        slug
        title
        coverImage
      } 
    }
  }
}`;
