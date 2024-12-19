import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '',
    title: t('Development Phase'),
    description: [
      { text: t('Start building the native swap on InkChain.'), completed: true },
      { text: t('Integrate core functionalities like token swaps, liquidity provision, and analytics.'), completed: true },
      { text: t('Test and debug features extensively.'), completed: false },
      { text: t('Create the foundational UI/UX design.'), completed: false },
    ],
    reached: t('Now'), // Represents the current phase
  },
  {
    icon: '',
    title: t('Launch'),
    description: [
      { text: t('Launch the native swap on InkChain with minimal gas fees and enhanced security.'), completed: false },
      { text: t('Enable seamless interoperability within the Superchain and beyond.'), completed: false },
      { text: t('Provide sub-second block times for improved trading efficiency.'), completed: false },
      { text: t('Release marketing campaigns to onboard users and liquidity providers.'), completed: false },
    ],
    reached: t('Q1 2025'),
  },
  {
    icon: '',
    title: t('Scaling and Interoperability'),
    description: [
      { text: t('Expand to more chains within the Superchain ecosystem.'), completed: false },
      { text: t('Introduce cross-chain liquidity solutions.'), completed: false },
      { text: t('Enhance RPC aggregation to reduce downtime and improve performance.'), completed: false },
      { text: t('Optimize the platform for mass adoption.'), completed: false },
    ],
    reached: t('Q2 2025'),
  },
  {
    icon: '',
    title: t('Analytics and Enhanced Features'),
    description: [
      { text: t('Launch an advanced analytics page for users to track pools, liquidity, and volume.'), completed: false },
      { text: t('Integrate AI-powered smart routing for optimal trades.'), completed: false },
      { text: t('Enhance user security through advanced features leveraging Kraken’s expertise.'), completed: false },
    ],
    reached: t('Q3 2025'),
  },
  {
    icon: '',
    title: t('Continuous Upgrades'),
    description: [
      { text: t('Improve scalability with sub-second block times.'), completed: false },
      { text: t('Introduce advanced governance tools for the community.'), completed: false },
      { text: t('Optimize liquidity farming strategies for better rewards.'), completed: false },
    ],
    reached: t('Q4 2025 - And Beyond'),
  },
]

export default config
