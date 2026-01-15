import { Server, Cloud, Globe, Zap, Shield, Cpu, Mail, Phone, MapPin } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Hosting', id: 'hosting' },
  { name: 'Managed VPS', id: 'vps' },
  { name: 'Contact', id: 'contact' },
];

export const SERVICES = [
  {
    title: 'High-Speed VPS',
    description: 'Krachtige Hetzner Cloud servers met NVMe opslag. Maximale performance voor jouw applicaties.',
    icon: Server,
    color: 'text-orange-400',
    linkTo: 'vps'
  },
  {
    title: 'Managed WordPress',
    description: 'Wij beheren de technische kant van jouw WordPress site. Inclusief caching, updates en dagelijkse backups.',
    icon: Globe,
    color: 'text-blue-400',
    linkTo: 'hosting'
  },
  {
    title: 'Hetzner Infrastructure',
    description: 'Gebruikmakend van het betrouwbare Hetzner netwerk voor lage latency en 99.9% uptime garantie.',
    icon: Zap,
    color: 'text-yellow-400',
    linkTo: 'vps'
  }
];

export const HOSTING_PLANS = [
  {
    name: 'Start',
    price: '€9.99',
    features: ['5GB NVMe Opslag', '1 Website', 'Dagelijkse Backups', 'Free SSL', 'Unlimited Bandwidth'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '€19.99',
    features: ['25GB NVMe Opslag', '5 Websites', 'Dagelijkse Backups', 'Free SSL', 'Priority Support'],
    highlight: true
  },
  {
    name: 'Business',
    price: '€39.99',
    features: ['100GB NVMe Opslag', 'Onbeperkt Websites', 'Real-time Backups', 'Free SSL', '24/7 Phone Support'],
    highlight: false
  }
];

export const VPS_PLANS = [
  {
    name: 'VPS CX22',
    cpu: '2 vCPU',
    ram: '4GB RAM',
    storage: '40GB NVMe',
    price: '€15.90',
    traffic: '20TB Traffic'
  },
  {
    name: 'VPS CX32',
    cpu: '4 vCPU',
    ram: '8GB RAM',
    storage: '80GB NVMe',
    price: '€24.90',
    traffic: '20TB Traffic'
  },
  {
    name: 'VPS CX42',
    cpu: '8 vCPU',
    ram: '16GB RAM',
    storage: '160GB NVMe',
    price: '€49.90',
    traffic: '20TB Traffic'
  }
];

export const CONTACT_INFO = [
  { icon: Mail, text: 'support@vlamnet.nl' },
  { icon: Phone, text: '+31 (0)20 123 4567' },
  { icon: MapPin, text: 'Amsterdam, Nederland' }
];

export const TECH_STACK = [
  { name: 'Hetzner', icon: Cloud },
  { name: 'Docker', icon: Server },
  { name: 'Linux', icon: Cpu },
  { name: 'Security', icon: Shield },
];