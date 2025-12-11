import { Skill, Certificate, Community, Project } from '../types/portfolio';

export const skills: Skill[] = [
  { name: 'React', icon: '⚛️', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', level: 60, category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', level: 70, category: 'frontend' },
  { name: 'HTML', icon: '</>', level: 90, category: 'frontend' },
  { name: 'CSS', icon: '#', level: 90, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', level: 80, category: 'backend' },
  { name: 'Python', icon: '🐍', level: 75, category: 'backend' },
  { name: 'Tailwind CSS', icon: '🎨', level: 90, category: 'frontend' },
  { name: 'Git', icon: '📚', level: 85, category: 'tools' },
  { name: 'GitHub', icon: '🐳', level: 70, category: 'tools' },
  { name: 'Figma', icon: '🎯', level: 75, category: 'design' },
  { name: 'Cyber Security', icon: '🛡️', level: 60, category: 'others' },
  { name: 'Networking', icon: '🌐', level: 60, category: 'others' }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'NPTEL Certificates',
    issuer: 'NPTEL - IIT',
    date: '2024',
    link: 'https://drive.google.com/drive/folders/1ZQqrzy1CUnF_92uQj67d6D6-oOyEAuS5?usp=drive_link',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLn0nBzjTUveLmvLi9iAQ7kfoUTVQZPnt0TA&s'
  },
  {
    id: '2',
    title: 'Internships and Participation Certificates',
    issuer: 'Institutions',
    date: '2023',
    link: 'https://drive.google.com/drive/folders/13M5siO_fTdLQaMkyjxcQPe54nb6C6p37?usp=drive_link',
    image: 'https://t3.ftcdn.net/jpg/00/78/41/82/360_F_78418208_eNjhg8sEW0OTP7ZxbpZ9QApqpgHreKV9.jpg'
  },
  {
    id: '3',
    title: 'Online Certifcates',
    issuer: 'Online Internships & Others',
    date: '2023',
    link: 'https://drive.google.com/drive/folders/1pcf4vP_CprCc9bKkntmx4kEPWFnM2rBm?usp=drive_link',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg7MJK2miK2fVpnNA3ukGHep9XfgsGh29Sw&s'
  }
];

export const communities: Community[] = [
  {
    id: '1',
    name: 'Mulearn',
    role: 'Active Contributor',
    description: 'Contributing to Mulearn community and helping newcomers in the community.',
    period: '2025 - Present',
    achievements: ['50+ GitHub contributions', 'Active Participation']
  },
  {
    id: '2',
    name: 'TinkerHub',
    role: 'Member',
    description: 'Actively Cotributing to TinkerHub Community by taking part in their projects and other works.',
    period: '2025 - Present',
    achievements: ['Active Participation', 'Contributor']
  },
  {
    id: '3',
    name: 'Coding Club',
    role: 'Member',
    description: 'Active Member in the college coding club. Organizing Events and So on.',
    period: '2024 - Present',
    achievements: ['Active Participation', 'Contributor']
  },
  {
    id: '4',
    name: 'IEEE',
    role: 'Member',
    description: 'Active Member of IEEE community in college',
    period: '2025 - Present',
    achievements: ['Active Participation', 'Contributor']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Youtube Clone',
    description: 'A newer version of youtube with much more interesting features. Made using react',
    image: 'https://images.indianexpress.com/2023/05/youtube-logo-featured.jpg?w=414',
    techStack: ['React', 'Node.js','Tailwind CSS'],
    githubUrl: 'https://github.com/itzychuu1920/YoutubeCloneNew',
    liveUrl: 'https://itzychuu1920.github.io/YoutubeCloneNew/',
    featured: true
  },
  {
    id: '2',
    title: 'MemeBot',
    description: 'Jusr a fun project. Basically a version of chatgpt with moodswings. Not meant to hurt anyone just for fun entertaining purpose.',
    image: 'https://pbs.twimg.com/media/GBv2caYWAAAkBV4?format=jpg&name=large',
    techStack: ['HTML', 'CSS', 'JS'],
    githubUrl: 'https://github.com/itzychuu1920/MemeBot',
    liveUrl: 'https://itzychuu1920.github.io/MemeBot/',
    featured: true
  },
  {
    id: '3',
    title: 'Youtube UI Clone Design',
    description: 'A youtube UI clone made using FIGMA',
    image: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/06/youtube_hero_1200x675.jpg',
    techStack: ['Figma'],
    githubUrl: 'https://www.figma.com/proto/ObtqWst0NIDm1pJDgbrMs8/HIFI-Proto?node-id=0-1&t=fJ5m3YjIr4JNLtcs-1',
    liveUrl: 'https://www.figma.com/proto/ObtqWst0NIDm1pJDgbrMs8/HIFI-Proto?node-id=1-7',
    featured: true
  },
  {
    id: '4',
    title: 'GPay UI Design',
    description: 'A modern UI design for GPAY.',
    image: 'https://telecomtalk.info/wp-content/uploads/2022/12/gpay-how-to-create-or-find-upi.jpg',
    techStack: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    githubUrl: 'https://www.figma.com/design/2C1CxNgSIgK8OLWNSabYin/GpayV2?node-id=0-1&m=dev&t=pjN37KgVs3AilAYI-1',
    liveUrl: 'https://www.figma.com/proto/2C1CxNgSIgK8OLWNSabYin/GpayV2?node-id=0-1&t=pjN37KgVs3AilAYI-1',
    featured: true
  }
];