export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Next.js', level: 95, icon: '⚡' },
      { name: 'JavaScript', level: 92, icon: '🟨' },
      { name: 'TypeScript', level: 88, icon: '💙' },
      { name: 'HTML & CSS', level: 96, icon: '🎭' },
      { name: 'Tailwind CSS', level: 94, icon: '🌊' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 93, icon: '🐍' },
      { name: 'Django', level: 91, icon: '🎸' },
      { name: 'Django REST Framework', level: 90, icon: '🔗' },
      { name: 'Node.js', level: 82, icon: '💚' },
      { name: 'REST APIs', level: 95, icon: '📡' },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 94, icon: '🐙' },
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'Docker', level: 82, icon: '🐳' },
      { name: 'Redis', level: 79, icon: '🔴' },
      { name: 'AWS', level: 75, icon: '☁️' },
    ],
  },
];
