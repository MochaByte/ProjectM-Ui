import { Text, Link } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('What is Mokoi building?'),
    description: [
      t('Mokoi is creating a cutting-edge DeFi platform with a native swap built on InkChain. It offers minimal gas fees, enhanced security, and a seamless user experience.'),
    ],
  },
  {
    title: t('What makes Mokoi unique?'),
    description: [
      t('Mokoi leverages InkChain’s smol gas fees and Kraken’s expertise in security to provide users with a highly efficient and secure trading experience. Additionally, Mokoi focuses on interoperability, ensuring seamless trading across the Superchain and beyond.'),
    ],
  },
  {
    title: t('Are Mokoi’s contracts audited?'),
    description: [
      <Text as="p" color="textSubtle" fontSize="16px">
        {t('Yes, Mokoi is committed to transparency and security. All contracts are cloned from Uniswap and audited to ensure the highest level of safety for our users.')}
      </Text>,
    ],
  },
  {
    title: t('How does Mokoi ensure efficient trades?'),
    description: [
      t('Mokoi integrates smart routing and AI-driven optimizations to minimize price impact and maximize trading efficiency. Our DEX is designed to provide the best possible rates for every trade.'),
    ],
  },
  {
    title: t('What is InkChain, and why is Mokoi built on it?'),
    description: [
      t(
        'InkChain is a powerful Layer 2 blockchain built on the OP stack. It offers 1-second block times, with sub-second blocks coming soon. Its smol gas fees and interoperability make it the perfect foundation for Mokoi’s DeFi ecosystem.',
      ),
    ],
  },
  {
    title: t('How to list a token on Mokoi?'),
    description: [
      t('Simply reach out to us via our social channels like Discord or Twitter. Our team will guide you through the listing process.'),
    ],
  },
  {
    title: t('What rewards can I earn on Mokoi?'),
    description: [
      t(
        'Liquidity providers on Mokoi earn a majority of trading fees. Additionally, we will introduce farming pools and other incentives to reward our community for participating in the ecosystem.',
      ),
    ],
  },
]

export default config
