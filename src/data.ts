// All portfolio content lives here so it can be updated without touching layout code.
import ceyloAdminSos from './assets/projects/ceylo-admin-sos.webp';
import ceyloAdminAi from './assets/projects/ceylo-admin-ai.webp';
import ghHome from './assets/projects/gh-home.webp';
import ghShop from './assets/projects/gh-shop.webp';
import ghProduct from './assets/projects/gh-product.webp';
import thesisPhoto from './assets/thesis.webp';
import ceyloMConcierge from './assets/projects/ceylo-m-concierge.webp';
import ceyloMItinerary from './assets/projects/ceylo-m-itinerary.webp';
import ceyloMTailor from './assets/projects/ceylo-m-tailor.webp';
import ceyloMExplore from './assets/projects/ceylo-m-explore.webp';
import ceyloMGuides from './assets/projects/ceylo-m-guides.webp';
import ceyloMBooking from './assets/projects/ceylo-m-booking.webp';
import ceyloMMarket from './assets/projects/ceylo-m-market.webp';
import ceyloMPassport from './assets/projects/ceylo-m-passport.webp';
import ceyloMSos from './assets/projects/ceylo-m-sos.webp';
import shoppeeHome from './assets/projects/shoppee-home.webp';
import weatherApp from './assets/projects/weather-app.webp';

export const profile = {
  name: 'Raja Annadurai Sharoobini',
  shortName: 'Sharoobini',
  role: 'Web Developer',
  title: 'Web developer · React, Node.js & MongoDB · Sri Lanka',
  email: 'sharoobini233@gmail.com',
  phone: '+94 76 085 4006',
  phoneHref: 'tel:+94760854006',
  github: 'https://github.com/Sharoobini',
  githubUser: 'Sharoobini',
  linkedin: 'https://www.linkedin.com/in/raja-annathurai-sharoobini',
  linkedinHandle: 'in/raja-annathurai-sharoobini',
  // Leave empty to hide the link everywhere it appears.
  researchgate: '',
  medium: '',
  location: 'Sri Lanka · GMT+5:30',
  status: 'Open to work',
  focus: 'React · Node.js · MongoDB',
  // Put a PDF in public/ and set this to its path (e.g. '/Sharoobini-CV.pdf') to turn on the Download CV button.
  // Left empty on purpose: a CV with personal details such as NIC and home address should not be public.
  cv: '',
};

export const heroStats = [
  { value: '10+', label: 'projects built and published on GitHub' },
  { value: '2', label: 'research papers published at HIRS 2025' },
  { value: '6+', label: 'months as a web developer intern' },
  { value: '3', label: 'languages spoken: English, Tamil, Sinhala' },
];

export type Shot = { src: string; alt: string; label: string; frame?: 'browser' | 'raw' };

// A flat phone screen, drawn inside a CSS device frame.
export type Screen = { src: string; alt: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  // Real screens. 'browser' draws window chrome around the shot; 'raw' shows it as is.
  shots?: Shot[];
  // Mobile app screens, shown in a 3D phone carousel.
  phones?: Screen[];
  // Shown instead of screenshots when a project has no public UI.
  flow?: string[];
  links: { label: string; href: string; kind: 'github' | 'live' | 'product' }[];
  accent: string;
};

export const ceylo: CaseStudy = {
  slug: 'ceylo',
  name: 'CEYLO',
  category: 'AI tourism platform · Final-year team project',
  year: '2025 — 2026',
  summary:
    'A tourism platform for Sri Lanka that puts sustainability first: a mobile app for travellers and local vendors, and a web admin portal that runs the whole operation. Built by a team of three.',
  problem:
    'Travellers in Sri Lanka juggle separate apps to plan trips, find trustworthy local guides and stay safe, often with weak connectivity outside the cities. Sustainability rarely factors into what they are recommended.',
  solution:
    'One platform that plans itineraries with an AI concierge, ranks places with an eco-scorer, connects travellers to verified vendors and guides, and keeps SOS working offline, syncing the moment signal returns.',
  features: [
    'AI Concierge that builds day-by-day itineraries from a chat',
    'Eco-Scorer that weights sustainability in every recommendation',
    'Offline SOS with a priority sync queue and offline maps',
    'Vendor portal: bookings, revenue, trust score and proof of service',
    'Admin console: vendor and guide verification, cultural events, live SOS monitor',
    'Fully localised in English, Sinhala and Tamil',
  ],
  role: 'One of three developers. I worked on the user interfaces and their connection to the backend, and built the tourism prediction model whose insights feed the platform.',
  stack: ['React Native', 'Expo', 'React', 'Vite', 'Firebase', 'Firestore', 'TensorFlow Lite', 'Google Maps'],
  phones: [
    { src: ceyloMConcierge, alt: 'CEYLO AI Concierge chat planning a three-day trip to Kandy', label: 'AI Concierge' },
    { src: ceyloMItinerary, alt: 'Generated five-day itinerary with eco scores and carbon score', label: 'Itinerary' },
    { src: ceyloMTailor, alt: 'Tailor Your Journey form with trip focus, dates, days and budget', label: 'Trip planner' },
    { src: ceyloMExplore, alt: 'Hidden gems and nearby heritage places in Kandy', label: 'Explore' },
    { src: ceyloMGuides, alt: 'Local Guides list for finding a certified eco-expert', label: 'Local guides' },
    { src: ceyloMBooking, alt: 'Booking status screen showing the guide approved the request', label: 'Booking' },
    { src: ceyloMMarket, alt: 'Marketplace of eco-friendly local tea and handicraft products', label: 'Marketplace' },
    { src: ceyloMPassport, alt: 'Traveller profile with eco points and eco passport', label: 'Eco passport' },
    { src: ceyloMSos, alt: 'Emergency Support screen tracking an SOS alert', label: 'Offline SOS' },
  ],
  shots: [
    { src: ceyloAdminSos, alt: 'CEYLO admin portal live SOS monitor with map', label: 'SOS monitor', frame: 'browser' },
    { src: ceyloAdminAi, alt: 'CEYLO admin AI Center with model metrics', label: 'AI Center', frame: 'browser' },
  ],
  links: [
    { label: 'Team repository', href: 'https://github.com/KestroyStephan/CEYLO', kind: 'github' },
    { label: 'Admin portal', href: 'https://ceylo-theta.vercel.app', kind: 'live' },
  ],
  accent: '#34d399',
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shoppee',
    name: 'Shoppee',
    category: 'E-commerce store · MERN',
    year: '2025',
    summary: 'A full-stack online store with sign-in, a product catalogue and a shopping cart, built as a team project on the MERN stack.',
    problem: 'Shoppers expect to browse products, sign in and fill a cart from any device without the page getting in their way.',
    solution: 'A React storefront talking to a Node.js and Express API with MongoDB behind it, laid out to work on phones, tablets and desktops.',
    features: [
      'User sign-up and sign-in',
      'Product catalogue and listing pages',
      'Shopping cart',
      'REST API between the storefront and the database',
      'Responsive layout for multi-device use',
    ],
    role: 'Team project. My part was the product listing interface and its API integration.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    shots: [{ src: shoppeeHome, alt: 'Shoppee storefront home page', label: 'Storefront', frame: 'browser' }],
    links: [{ label: 'Source', href: 'https://github.com/Sharoobini/Shoppee-Ecommerce', kind: 'github' }],
    accent: '#fb923c',
  },
  {
    slug: 'giftheaven',
    name: 'GiftHeaven',
    category: 'Gift ordering system · MERN',
    year: '2024 — 2025',
    summary: 'An online gift ordering system with category filtering and order tracking, built with a team on the MERN stack.',
    problem: 'Ordering a gift online should be quick: find the right category, place the order and know where it is.',
    solution: 'A gift catalogue with category filters, an ordering flow with tracking, and a REST backend that the React front end calls.',
    features: ['Gift catalogue with category filtering', 'Online ordering', 'Order tracking', 'REST API backend'],
    role: 'Team project. I built front-end components and wired them to the API, working with the team through GitHub.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    shots: [
      { src: ghHome, alt: 'GiftHeaven home page hero', label: 'Home', frame: 'browser' },
      { src: ghShop, alt: 'GiftHeaven featured products grid', label: 'Shop', frame: 'browser' },
      { src: ghProduct, alt: 'GiftHeaven product page with size picker and gallery', label: 'Product', frame: 'browser' },
    ],
    links: [{ label: 'Source', href: 'https://github.com/Sharoobini/GiftHeaven', kind: 'github' }],
    accent: '#fbbf24',
  },
  {
    slug: 'tourism-prediction',
    name: 'AI Tourism Guide',
    category: 'Machine learning · Final-year individual project',
    year: '2025 — 2026',
    summary: 'A Streamlit web app backed by machine-learning models that predicts travel costs and suggests sustainable eco-destinations in Sri Lanka.',
    problem: 'Travellers and planners have little data-driven guidance on what a trip will cost or which destinations are the more sustainable choice.',
    solution: 'Models trained on tourism data that predict sustainable tourism trends, served through a simple Streamlit interface, with the insights feeding into CEYLO.',
    features: [
      'Predicts travel costs',
      'Suggests sustainable eco-destinations',
      'Data cleaning, preprocessing and feature engineering',
      'Models evaluated and tuned against performance metrics',
      'Insights prepared for integration into the CEYLO platform',
    ],
    role: 'Solo project: data preparation, model training and evaluation, and the Streamlit app.',
    stack: ['Python', 'Streamlit', 'Machine learning'],
    flow: ['Collect data', 'Clean & prepare', 'Feature engineering', 'Train models', 'Evaluate & tune', 'Insights for CEYLO'],
    links: [{ label: 'Source', href: 'https://github.com/Sharoobini/AI-Powered-Guide-For-Sustainable-Tourism-Prediction', kind: 'github' }],
    accent: '#2dd4bf',
  },
  {
    slug: 'movie-recommendation',
    name: 'Movie Recommendation',
    category: 'Recommender system · Published research',
    year: '2025',
    summary: 'A movie recommendation engine built on collaborative filtering with singular value decomposition: the work behind my HIRS 2025 paper.',
    problem: 'With thousands of titles to choose from, viewers need suggestions based on what people with similar taste enjoyed.',
    solution: 'A collaborative filtering model that factorises the user–movie ratings matrix with SVD to predict the ratings a viewer has not given yet.',
    features: [
      'Collaborative filtering on user ratings',
      'Singular value decomposition to uncover hidden taste patterns',
      'Content similarity and user data analysis',
      'Built and explored in Jupyter notebooks with pandas',
    ],
    role: 'Built the model and wrote up the research, published at HIRS 2025.',
    stack: ['Python', 'Jupyter', 'pandas'],
    flow: ['Ratings data', 'User–movie matrix', 'SVD factorisation', 'Predicted ratings', 'Top recommendations'],
    links: [{ label: 'Source', href: 'https://github.com/Sharoobini/Movie_Recomondation', kind: 'github' }],
    accent: '#c084fc',
  },
];

export const categories = ['AI & ML', 'Full-stack', 'Frontend', 'Java & Systems'] as const;
export type Category = (typeof categories)[number];

export type LibraryProject = {
  name: string;
  kind: string;
  text: string;
  categories: Category[];
  // Optional: projects without a screenshot get a lettered tile instead.
  image?: string;
  caseStudy?: string;
  // Tools named in the project itself; case-study projects use their case study's stack instead.
  tech?: string[];
  github?: string;
  live?: string;
  accent: string;
};

const gh = (repo: string) => `https://github.com/Sharoobini/${repo}`;

// Every project, tagged so the library can be filtered by area.
export const projectLibrary: LibraryProject[] = [
  { name: 'CEYLO', kind: 'AI tourism platform', text: 'Mobile app and web admin portal with an AI concierge, eco-scoring and offline SOS. Final-year team project.', categories: ['AI & ML', 'Full-stack'], image: ceyloMConcierge, caseStudy: 'ceylo', github: 'https://github.com/KestroyStephan/CEYLO', accent: '#34d399' },
  { name: 'AI Tourism Guide', kind: 'ML web app', text: 'Streamlit app that predicts travel costs and sustainable eco-destinations in Sri Lanka.', categories: ['AI & ML'], caseStudy: 'tourism-prediction', github: gh('AI-Powered-Guide-For-Sustainable-Tourism-Prediction'), accent: '#2dd4bf' },
  { name: 'Shoppee', kind: 'MERN e-commerce store', text: 'Online store with authentication, a product catalogue and a shopping cart.', categories: ['Full-stack', 'Frontend'], image: shoppeeHome, caseStudy: 'shoppee', github: gh('Shoppee-Ecommerce'), accent: '#fb923c' },
  { name: 'GiftHeaven', kind: 'Gift ordering system', text: 'Online gift ordering with category filtering, order tracking and a REST backend.', categories: ['Full-stack'], image: ghHome, caseStudy: 'giftheaven', github: gh('GiftHeaven'), accent: '#fbbf24' },
  { name: 'Movie Recommendation', kind: 'Recommender system', text: 'Collaborative filtering with singular value decomposition; the basis of my HIRS 2025 paper.', categories: ['AI & ML'], caseStudy: 'movie-recommendation', github: gh('Movie_Recomondation'), accent: '#c084fc' },
  { name: 'Weather Web App', kind: 'Web app', text: 'Real-time weather from the OpenWeatherMap API with asynchronous fetching, dynamic updates and error handling.', categories: ['Frontend'], image: weatherApp, tech: ['JavaScript', 'OpenWeatherMap API', 'CSS3'], github: gh('Weather-Web-Application'), accent: '#38bdf8' },
  { name: 'Cafe Charm', kind: 'Responsive website', text: 'Coffee shop website with interactive menus and a validated reservation form.', categories: ['Frontend'], tech: ['HTML5', 'CSS3', 'JavaScript'], github: gh('Cafe-Charm'), accent: '#f59e0b' },
  { name: 'EduPortal', kind: 'Education website', text: 'Educational web workspace for course schedules and study modules.', categories: ['Frontend'], tech: ['HTML5', 'CSS3', 'JavaScript'], github: gh('education'), accent: '#fb7185' },
  { name: 'WSAT Project', kind: 'Web services project', text: 'Web application services project with modern layout patterns and script handling.', categories: ['Frontend'], tech: ['HTML5', 'CSS3', 'Web services'], github: gh('WSAT-Project'), accent: '#818cf8' },
  { name: 'Blood Bank System', kind: 'Java desktop app', text: 'Object-oriented Java app that manages blood requests and donor records in a MySQL database.', categories: ['Java & Systems'], tech: ['Java', 'MySQL', 'OOP'], github: gh('ITBNM-2211-0188'), accent: '#f87171' },
  { name: 'Java Activity Suite', kind: 'Java application', text: 'Java application showing object-oriented principles, GUI layouts and data structures.', categories: ['Java & Systems'], tech: ['Java', 'OOP', 'GUI'], github: gh('Inky-Pinky-Activity'), accent: '#4ade80' },
];

export const thesis = {
  title: 'An AI-Powered Guide for Sustainable Eco & Cultural Tourism in Sri Lanka',
  author: 'R. A. Sharoobini',
  degree: 'BIT (Hons) Networking & Mobile Computing',
  school: 'Faculty of Information Technology, Horizon Campus',
  date: 'October 2026',
  summary:
    'My final-year dissertation: the research, design and evaluation behind an AI-powered guide that helps travellers explore Sri Lanka sustainably. My own part centred on the tourism prediction model.',
  photo: thesisPhoto,
  code: gh('AI-Powered-Guide-For-Sustainable-Tourism-Prediction'),
};

export type Publication = {
  title: string;
  venue: string;
  type: string;
  // Leave empty to hide the authors line.
  authors: string;
  summary: string;
  tags: string[];
  href?: string;
  related?: string;
};

export const publications: Publication[] = [
  {
    title: 'A Collaborative Filtering Approach Using Singular Value Decomposition for Movie Recommendations',
    venue: 'HIRS 2025',
    type: 'Research paper · Published',
    authors: '',
    summary: 'A movie recommender that applies collaborative filtering with singular value decomposition to predict the films a viewer is likely to rate highly.',
    tags: ['Recommender systems', 'Machine learning', 'SVD'],
    href: '',
    related: 'cs-movie-recommendation',
  },
  {
    title: 'AI-Powered Mobile Guide for Sustainable Eco-Cultural Tourism in Sri Lanka: Development and User Assessment',
    venue: 'HIRS 2025',
    type: 'Extended abstract · Published',
    authors: 'Kestroy S., Sharoobini R. A., Kishnapriyan N., Isuru Samarappulige',
    summary: 'The research behind CEYLO: an AI mobile guide that plans eco-cultural trips, connects travellers with local guides and vendors, and was assessed with real users.',
    tags: ['Applied AI', 'Mobile', 'Sustainable tourism'],
    href: '',
    related: 'cs-ceylo',
  },
];

// Articles or blog posts. Add entries as { title, href, date, summary }; the block stays hidden while this is empty.
export const articles: { title: string; href: string; date?: string; summary?: string }[] = [];

export const expertise = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C', 'PHP', 'HTML5', 'CSS3', 'SQL'] },
  { group: 'Frontend & Mobile', items: ['React', 'Responsive UI design', 'UI/UX principles', 'React Native (learning)'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'AI / ML', items: ['Model training', 'Data preprocessing', 'Model evaluation', 'Streamlit', 'pandas'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'MS SQL Server'] },
  { group: 'Tools & Networking', items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Vercel', 'Cisco networking', 'Agile'] },
];

export const experience: { period: string; role: string; org: string; place?: string; points: string[] }[] = [
  {
    period: 'Nov 2025 — May 2026',
    role: 'Web Developer Intern',
    org: 'SoftwarePlus Pvt Ltd',
    place: 'Sri Lanka',
    points: [
      'Developed responsive UI components with React, HTML, CSS and JavaScript.',
      'Integrated the front end with backend REST APIs built on Node.js and Express.',
      'Managed MongoDB databases for product, user and order data.',
      'Built a dynamic product listing module that renders real-time API data.',
      'Worked in an Agile team with Git and GitLab, debugging and optimising performance and UI behaviour.',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Treasurer',
    org: 'Chess Club, Horizon Campus',
    place: 'Malabe, Sri Lanka',
    points: ['Held the treasurer role on the committee of the campus Chess Club.'],
  },
  {
    period: '2022 — 2026',
    role: 'Team Lead, academic projects',
    org: 'Horizon Campus',
    place: 'Malabe, Sri Lanka',
    points: [
      'Led mini-projects, coordinated tasks and reviewed deliverables.',
      'Collaborated on academic and creative projects with diverse teams.',
    ],
  },
];

// Company project cards and the support list under Experience. Both blocks stay hidden while these are empty.
export const companyProjects: {
  name: string;
  kind: string;
  text: string;
  tags: string[];
  href?: string;
  shot?: Shot;
  note?: string;
  features?: string[];
}[] = [];

export const operations: { title: string; text: string }[] = [];

export const education = {
  degree: 'BIT (Hons) in Networking & Mobile Computing',
  school: 'Horizon Campus, Malabe',
  period: '2022 — 2026',
  status: 'Completed · awaiting graduation',
};

// School qualifications, shown beside the degree. Certificates can be added here in the same shape.
export const certifications = [
  { title: 'G.C.E. Advanced Level · Arts stream (2020)', issuer: 'R/B/C.C. Tamil Maha Vidyalayam, Balangoda' },
  { title: 'G.C.E. Ordinary Level (2017)', issuer: 'R/N/Dala National College, Nivithigala' },
];

// Shown if the GitHub API can't be reached.
export const fallbackRepos = [
  { name: 'AI-Powered-Guide-For-Sustainable-Tourism-Prediction', description: 'Streamlit and ML app predicting travel costs and sustainable eco-destinations in Sri Lanka.', language: 'Python', html_url: gh('AI-Powered-Guide-For-Sustainable-Tourism-Prediction') },
  { name: 'Shoppee-Ecommerce', description: 'Full-stack MERN e-commerce store.', language: 'JavaScript', html_url: gh('Shoppee-Ecommerce') },
  { name: 'GiftHeaven', description: 'Online gift ordering system with order tracking.', language: 'JavaScript', html_url: gh('GiftHeaven') },
  { name: 'Movie_Recomondation', description: 'Movie recommendation engine using collaborative filtering.', language: 'Jupyter Notebook', html_url: gh('Movie_Recomondation') },
  { name: 'Weather-Web-Application', description: 'Real-time weather app using the OpenWeatherMap API.', language: 'JavaScript', html_url: gh('Weather-Web-Application') },
  { name: 'Cafe-Charm', description: 'Responsive coffee shop website.', language: 'HTML', html_url: gh('Cafe-Charm') },
];
