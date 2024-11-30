import { Android } from '@icons/Android';
import { Ios } from '@icons/Ios';
import { Web } from '@icons/Web';
import { Windows } from '@icons/Windows';
import {
  Detail,
  FAQ,
  Feature,
  Logo,
  Plan,
  Social,
  Testimonial,
  Link,
} from '../types';

export const features: Feature[] = [
  {
    id: '0',
    icon: '/images/feature-1.png',
    caption: 'Easy integration',
    title: 'Work smarter not harder',
    text: 'Xorik makes collaboration effortless, boosting productivity with smart automation and streamlined processes—like a power boost for your workflow.',
    button: {
      icon: '/images/magictouch.svg',
      title: 'Watch the demo',
    },
  },
  {
    id: '1',
    icon: '/images/feature-2.png',
    caption: 'Reliable & secure',
    title: 'Rest easy, we got your back',
    text: 'Your data security is our top priority. With advanced encryption and strong privacy controls, Xorik ensures your information is protected and secure.',
    button: {
      icon: '/images/docs.svg',
      title: 'Read the docs',
    },
  },
];

export const details: Detail[] = [
  {
    id: '0',
    icon: '/images/detail-1.png',
    title: 'Real-time Annotations',
  },
  {
    id: '1',
    icon: '/images/detail-2.png',
    title: 'Collaborate with your team',
  },
  {
    id: '2',
    icon: '/images/detail-3.png',
    title: 'Cloud Storage Integration',
  },
  {
    id: '3',
    icon: '/images/detail-4.png',
    title: '24 / 7 Customer support',
  },
];

export const faq: FAQ[] = [
  {
    id: '0',
    question: 'How easy is it to set up Xorik?',
    answer:
      'Setting up Xorik is a breeze! Just sign up, invite your team, and start simplifying your collaboration with screen recordings and transcriptions right away.',
  },
  {
    id: '1',
    question: 'Can I integrate Xorik with other tools?',
    answer:
      'Yes! Xorik integrates seamlessly with your favorite tools, ensuring your workflows remain uninterrupted and efficient.',
  },
  {
    id: '2',
    question: 'Does Xorik support real-time collaboration?',
    answer:
      'Absolutely! With Xorik, teams can collaborate in real-time by sharing feedback and annotations on screen recordings effortlessly.',
  },
  {
    id: '3',
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee. If Xorik doesn’t meet your expectations, you can request a refund within the first month of your subscription.',
  },
  {
    id: '4',
    question: 'Do you offer corporate or team plans?',
    answer:
      'Yes, we do! Xorik offers scalable plans designed specifically for teams and organizations to support seamless collaboration.',
  },
  {
    id: '5',
    question: 'What happens when I run out of storage?',
    answer:
      'If you exceed your storage limit, you can easily upgrade your plan or manage your recordings to free up space. We’ll always notify you before you hit the limit.',
  },
  {
    id: '6',
    question: 'Can I upgrade my plan later?',
    answer:
      'Of course! You can upgrade your plan at any time, and we’ll apply a prorated adjustment to ensure you get the best value.',
  },
  {
    id: '7',
    question: 'How do I invite my team to Xorik?',
    answer:
      'Inviting your team is simple. Go to the “Team” section in your account, enter their email addresses, and send out invites—it’s that easy!',
  },
  {
    id: '8',
    question: 'Do you provide training for teams and individuals?',
    answer:
      'Yes! We offer onboarding resources and training sessions to help teams and individuals make the most of Xorik’s features.',
  },
  {
    id: '9',
    question: 'What should I do if I’m locked out of my account?',
    answer:
      'If you’re locked out, click “Forgot Password” on the login page to reset your password. For further assistance, our 24/7 support team is here to help.',
  },
];

export const plans: Plan[] = [
  {
    id: '0',
    title: 'Core',
    priceMonthly: 19,
    priceYearly: 12,
    caption: 'Best for solo creators',
    features: [
      '100MB Cloud storage',
      '100+ prompt templates',
      '5 projects',
      '24/7 support',
    ],
    icon: '/images/circle.svg',
    logo: '/images/plan-1.png',
  },
  {
    id: '1',
    title: 'Overdrive',
    priceMonthly: 79,
    priceYearly: 59,
    caption: 'Most popular plan',
    features: [
      'All Starter features',
      '1TB additional storage',
      'Unlimited projects',
      'Analytics',
    ],
    icon: '/images/triangle.svg',
    logo: '/images/plan-2.png',
  },
  {
    id: '2',
    title: 'Team',
    priceMonthly: 39,
    priceYearly: 29,
    caption: 'Exclusively for teams',
    features: [
      'All Overdrive features',
      '10TB additional storage',
      '50% off per member',
      'Real-time collaboration',
    ],
    icon: '/images/hexagon.svg',
    logo: '/images/plan-3.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '0',
    name: 'Jessica Saunders',
    role: 'Globalnomads',
    avatarUrl: '/images/testimonials/jessica-saunders.png',
    comment:
      "Xorik's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: '1',
    name: 'Mark Erixon',
    role: 'Vid capital intl',
    avatarUrl: '/images/testimonials/mark-erixon.png',
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: '2',
    name: 'Melanie Hurst',
    role: 'Cyberleap',
    avatarUrl: '/images/testimonials/melanie-hurst.png',
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: '3',
    name: 'Alicia Barker',
    role: 'Cyberleap',
    avatarUrl: '/images/testimonials/alicia-barker.png',
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: '4',
    name: 'Becky Snider',
    role: 'Floclips',
    avatarUrl: '/images/testimonials/becky-snider.png',
    comment:
      "Switched to Xorik last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: '5',
    name: 'Jim Bradley',
    role: 'Vid capital intl',
    avatarUrl: '/images/testimonials/jim-bradley.png',
    comment:
      'The efficiency boost is undeniable. This platform has transformed our workflow, forever.',
  },
];

export const logos: Logo[] = [
  {
    id: '0',
    title: 'Afterpay',
    url: '/images/logos/afterpay.svg',
    width: 156,
    height: 48,
  },
  {
    id: '1',
    title: 'Amplitude',
    url: '/images/logos/amplitude.svg',
    width: 194,
    height: 48,
  },
  {
    id: '2',
    title: 'Sonos',
    url: '/images/logos/sonos.svg',
    width: 115,
    height: 48,
  },
  {
    id: '3',
    title: 'Maze',
    url: '/images/logos/maze.svg',
    width: 142,
    height: 48,
  },
  {
    id: '4',
    title: 'Drips',
    url: '/images/logos/drips.svg',
    width: 77,
    height: 48,
  },
];

export const links: Link[] = [
  {
    id: '0',
    title: 'Ios',
    icon: <Ios />,
    url: '#',
  },
  {
    id: '1',
    title: 'Android',
    icon: <Android />,
    url: '#',
  },
  {
    id: '2',
    title: 'Windows',
    icon: <Windows />,
    url: '#',
  },
  {
    id: '3',
    title: 'Web',
    icon: <Web />,
    url: '#',
  },
];

export const socials: Social[] = [
  {
    id: '0',
    title: 'x',
    icon: '/images/socials/x.svg',
    url: '#',
  },
  {
    id: '1',
    title: 'Threads',
    icon: '/images/socials/threads.svg',
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    icon: '/images/socials/instagram.svg',
    url: '#',
  },
  {
    id: '3',
    title: 'Discord',
    icon: '/images/socials/discord.svg',
    url: '#',
  },
];
