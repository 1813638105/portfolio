import { Phone, Mail } from 'lucide-react'

export interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  image: string
  color: string
}

export interface Skill {
  title: string
  icon: string
  items: string[]
  description: string
  color: string
}

export const personalInfo = {
  name: 'Designer',
  role: 'UI/UX 设计师',
  tagline: '全链路设计 · 交互驱动 · 动效落地',
  intro: '具备交互、界面与动效设计能力的全链路设计师，拥有互联网实习经验。能独立负责从需求分析、交互原型、高保真视觉到动效落地的完整流程。擅长B端后台、C端小程序及智能硬件等多端设计，注重信息架构与用户体验，具备优秀视觉把控力，通过动效设计提升细节质感。善于响应需求变化、持续跟进迭代优化，致力于将设计价值延伸到产品落地的最后一公里。',
  phone: '17727083143',
  email: '1813638105@qq.com',
  photo: './photo.jpg',
  social: [],
  stats: [
    { label: '完成项目', value: '20+' },
    { label: '实习经验', value: '2+ 年' },
    { label: '服务领域', value: '5 个' },
    { label: '设计工具', value: '10+' },
  ],
}

export const projects: Project[] = [
  {
    id: 'ai-psychology-cabin',
    title: 'AI心理舱一体机系统',
    subtitle: '智能心理健康评估与干预终端',
    tags: ['B端后台', '智能硬件', '交互设计'],
    description: '为心理健康领域设计的 AI 一体机系统，整合情绪识别、智能对话与干预方案推荐，打造沉浸式心理评估体验。',
    image: './projects/ai-psychology.jpg',
    color: '#00ff41',
  },
  {
    id: 'autism-social-training',
    title: '孤独症社交能力训练游戏',
    subtitle: '面向 ASD 儿童的交互式训练应用',
    tags: ['游戏化设计', 'C端小程序', '动效设计'],
    description: '通过游戏化交互帮助孤独症儿童提升社交能力，设计温和友好的视觉语言与渐进式难度系统。',
    image: "./projects/ai-psychology.jpg",
    color: '#39ff14',
  },
  {
    id: 'ai-art-education',
    title: '交互式AI智慧艺术教育',
    subtitle: 'AI 驱动的艺术教育创新平台',
    tags: ['教育科技', 'B端后台', '交互原型'],
    description: '构建 AI 智慧艺术教育系统，实现个性化学习路径推荐、智能作品评估与互动创作工具。',
    image: "./projects/autism-training.jpg",
    color: '#00e676',
  },
  {
    id: 'data-food-platform',
    title: '数据驱动快消美食平台',
    subtitle: '快消行业数据可视化与运营平台',
    tags: ['数据可视化', 'B端后台', '界面设计'],
    description: '为快消美食行业打造的数据驱动运营平台，通过数据可视化帮助商家洞察消费趋势、优化产品策略。',
    image: "./projects/ai-art-education.jpg",
    color: '#69f0ae',
  },
  {
    id: 'motion-visual',
    title: '动态视觉作品',
    subtitle: '动效设计与视觉实验合集',
    tags: ['动效设计', '视觉设计', '创意探索'],
    description: '一系列动态视觉实验作品，探索图形、色彩与运动的边界，展现动效设计与视觉创意的融合。',
    image: "./projects/data-food-platform.jpg",
    color: '#00c853',
  },
]

export const skills: Skill[] = [
  {
    title: '交互设计',
    icon: '⚡',
    color: '#00ff41',
    description: '从用户研究到信息架构，构建流畅高效的用户体验流程',
    items: ['用户研究', '信息架构', '交互原型', '可用性测试', '流程图'],
  },
  {
    title: '界面设计',
    icon: '🎨',
    color: '#39ff14',
    description: '高保真视觉设计，注重细节质感与品牌一致性',
    items: ['视觉设计', '设计系统', 'B端后台', 'C端应用', '多端适配', '设计规范'],
  },
  {
    title: '动效设计',
    icon: '✨',
    color: '#00e676',
    description: '通过动效提升交互体验与细节质感',
    items: ['微交互', '转场动效', 'Loading动画', '品牌动效', 'Lottie'],
  },
  {
    title: '设计工具',
    icon: '🛠',
    color: '#69f0ae',
    description: '精通主流设计工具链，高效产出与协作',
    items: ['Figma', 'Sketch', 'Principle', 'After Effects', 'Protopie'],
  },
]
