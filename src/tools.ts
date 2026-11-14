// Tools and technologies shown as logos. Brand marks come from Simple Icons; tools whose marks it
// doesn't carry use a neutral line icon instead of an imitation of their logo.
import {
  siC,
  siCisco,
  siCss,
  siExpress,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siJupyter,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPandas,
  siPhp,
  siPython,
  siReact,
  siStreamlit,
  siVercel,
  type SimpleIcon,
} from 'simple-icons';
import {
  Code2,
  Database,
  FileText,
  LayoutTemplate,
  MessageSquare,
  Palette,
  Presentation,
  Sheet,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type Tool = { name: string; icon: SimpleIcon | LucideIcon; color?: string };

const t = (icon: SimpleIcon, name = icon.title): Tool => ({ name, icon });
const l = (name: string, icon: LucideIcon, color: string): Tool => ({ name, icon, color });

export const toolGroups: { group: string; tools: Tool[] }[] = [
  { group: 'Languages', tools: [t(siJavascript), t(siPython), t(siOpenjdk, 'Java'), t(siC), t(siPhp), t(siHtml5), t(siCss)] },
  { group: 'Frameworks', tools: [t(siReact), t(siNodedotjs), t(siExpress), l('React Native', Smartphone, '#61dafb'), t(siStreamlit)] },
  { group: 'Data & AI', tools: [t(siPandas), t(siJupyter), l('Machine learning', Sparkles, '#a78bfa')] },
  { group: 'Databases & hosting', tools: [t(siMongodb), t(siMysql), l('MS SQL Server', Database, '#cc2927'), t(siVercel)] },
  {
    group: 'Office & design',
    tools: [l('Word', FileText, '#2b7cd3'), l('Excel', Sheet, '#21a366'), l('PowerPoint', Presentation, '#d35230'), l('MS Teams', MessageSquare, '#7b83eb'), l('Canva', Palette, '#00c4cc'), l('UI / UX', LayoutTemplate, '#f472b6')],
  },
  { group: 'Tools & networking', tools: [t(siGit), t(siGithub), t(siGitlab), l('VS Code', Code2, '#22a7f2'), t(siCisco, 'Cisco networking'), l('Agile', Workflow, '#fbbf24')] },
];

export const allTools = toolGroups.flatMap((g) => g.tools);
