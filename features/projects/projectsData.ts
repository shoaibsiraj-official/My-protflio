export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Multi-Tenant CRM',
    description: 'Enterprise-grade CRM platform supporting isolated workspaces for multiple organizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'SaaS',
  },
  {
    id: 2,
    title: 'Instagram Automation SaaS',
    description: 'Powerful Instagram growth platform with automated engagement workflows.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tags: ['Next.js', 'Python', 'Instagram API', 'PostgreSQL', 'Celery'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'Automation',
  },
  {
    id: 3,
    title: 'AI SaaS Builder',
    description: 'No-code platform for building AI-powered SaaS products with GPT-4 integration.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    tags: ['Next.js', 'OpenAI', 'Django', 'Vector DB', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'AI',
  },
  {
    id: 4,
    title: 'Telemedicine Platform',
    description: 'HIPAA-compliant telemedicine solution with video consultations and e-prescriptions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    tags: ['Next.js', 'Django', 'WebRTC', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: false,
    category: 'Healthcare',
  },
];
