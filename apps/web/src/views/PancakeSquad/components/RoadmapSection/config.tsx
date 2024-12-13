import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '',
    title: t('Development Phase'),
    description: [
      t('Start building the native swap on InkChain.'),
      t('Integrate core functionalities like token swaps, liquidity provision, and analytics.'),
      t('Test and debug features extensively.'),
      t('Create the foundational UI/UX design.'),
    ],
    reached: t('Now'), // Represents the current phase
  },
  {
    icon: '',
    title: t('Launch'),
    description: [
      t('Launch the native swap on InkChain with minimal gas fees and enhanced security.'),
      t('Enable seamless interoperability within the Superchain and beyond.'),
      t('Provide sub-second block times for improved trading efficiency.'),
      t('Release marketing campaigns to onboard users and liquidity providers.'),
    ],
    reached: t('Q1 2024'),
  },
  {
    icon: '',
    title: t('Scaling and Interoperability'),
    description: [
      t('Expand to more chains within the Superchain ecosystem.'),
      t('Introduce cross-chain liquidity solutions.'),
      t('Enhance RPC aggregation to reduce downtime and improve performance.'),
      t('Optimize the platform for mass adoption.'),
    ],
    reached: t('Q2 2024'),
  },
  {
    icon: '',
    title: t('Analytics and Enhanced Features'),
    description: [
      t('Launch an advanced analytics page for users to track pools, liquidity, and volume.'),
      t('Integrate AI-powered smart routing for optimal trades.'),
      t('Enhance user security through advanced features leveraging Kraken’s expertise.'),
    ],
    reached: t('Q3 2024'),
  },
  {
    icon: '',
    title: t('Continuous Upgrades'),
    description: [
      t('Improve scalability with sub-second block times.'),
      t('Introduce advanced governance tools for the community.'),
      t('Optimize liquidity farming strategies for better rewards.'),
    ],
    reached: t('Q4 2024'),
  },
]

export default config
