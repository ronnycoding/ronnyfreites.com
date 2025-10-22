export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalContributions: number;
}

export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  topics: string[];
}

export const githubStats: GitHubStats = {
  totalRepos: 217,
  totalStars: 50,
  totalForks: 30,
  totalContributions: 1447 // 52 public + 1395 private
};

export const featuredProjects: OpenSourceProject[] = [
  {
    id: '1',
    name: 'costaricajs.github.io',
    description: 'Official website for Costa Rica\'s JavaScript community - Central hub promoting modern web development practices and technologies across 500+ developers.',
    stars: 17,
    forks: 5,
    language: 'HTML',
    url: 'https://github.com/costaricajs/costaricajs.github.io',
    topics: ['community', 'javascript', 'costa-rica', 'meetup', 'website']
  },
  {
    id: '2',
    name: 'Fundamentos-de-JavaScript',
    description: 'Comprehensive JavaScript fundamentals book for Spanish-speaking developers - Educational resource covering core concepts and modern best practices.',
    stars: 15,
    forks: 8,
    language: 'Markdown',
    url: 'https://github.com/costaricajs/Fundamentos-de-JavaScript',
    topics: ['javascript', 'education', 'spanish', 'tutorial', 'learning']
  },
  {
    id: '3',
    name: 'ronnyfreites',
    description: 'Personal portfolio and professional website built with TypeScript - Showcasing projects, technical expertise, and professional experience.',
    stars: 5,
    forks: 2,
    language: 'TypeScript',
    url: 'https://github.com/ronnycoding/ronnyfreites',
    topics: ['portfolio', 'nextjs', 'typescript', 'tailwind', 'react']
  },
  {
    id: '4',
    name: 'wordpress-migrate-tool',
    description: 'Automated WordPress site migration utility - Simplifies complex migration processes between WordPress installations.',
    stars: 3,
    forks: 1,
    language: 'JavaScript',
    url: 'https://github.com/ronnycoding/wordpress-migrate-tool',
    topics: ['wordpress', 'migration', 'automation', 'tool', 'cli']
  },
  {
    id: '5',
    name: '.claude',
    description: 'Personal Claude Code configuration with specialized AI agents, command templates, and GitHub workflow automation tools.',
    stars: 2,
    forks: 0,
    language: 'Markdown',
    url: 'https://github.com/ronnycoding/.claude',
    topics: ['claude', 'ai', 'automation', 'workflow', 'productivity']
  },
  {
    id: '6',
    name: 'astro-wp',
    description: 'Modern headless WordPress starter with Astro 4.x - Performance-optimized content sites with WP-CLI support and Docker development.',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    url: 'https://github.com/ronnycoding/astro-wp',
    topics: ['astro', 'wordpress', 'headless-cms', 'typescript', 'docker']
  }
];

export const communityInvolvement = [
  {
    id: '1',
    title: 'CostaRicaJS Leadership',
    description: '10+ years leading Costa Rica\'s premier JavaScript community with educational resources',
    impact: '500+ developers reached',
    icon: 'community'
  },
  {
    id: '2',
    title: 'Open Source Contributions',
    description: '1,447+ contributions across 217 public repositories and private ShipEase projects',
    impact: '217 repositories',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Technical Speaking',
    description: 'WordCamp San José speaker (PHP7 features) and JavaScript technical evangelist',
    impact: '200+ attendees',
    icon: 'presentation'
  },
  {
    id: '4',
    title: 'Mentorship & Education',
    description: 'Created JavaScript fundamentals book and mentored 50+ junior developers',
    impact: '50+ developers mentored',
    icon: 'teaching'
  }
];
