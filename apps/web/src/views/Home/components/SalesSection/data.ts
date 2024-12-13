import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import mokoiswap from '../../../../../public/images/home/trade/iceconea.png'
import iceConeB from '../../../../../public/images/home/trade/iceconeb.png'
import mokoibridge from '../../../../../public/images/home/bridge/bridge_a.png'
import bridgeB from '../../../../../public/images/home/bridge/bridge_b.png'
import mokoiearn from '../../../../../public/images/home/earn/ice.png'


export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Swap effortlessly on Ink Sepolia'),
  bodyText: t(
  'Harness the power of Ink Sepolia to swap any token seamlessly and securely. ' +
  'Our advanced tools ensure optimal rates and lightning-fast execution, letting you trade with confidence.'
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Swap'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.mokoi.xyz/dex/swap',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: mokoiswap, alt: '' },
      { src: iceConeB, alt: '' },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Bridge Tokens with Ease – Coming Soon'),
  bodyText: t(
    'Get ready for seamless bridging between multiple chains on Ink! ' +
      'Our upcoming bridge feature will include a built-in faucet to ensure you never run out of gas for your transactions. Stay tuned!'
  ),
  reverse: true,
  primaryButton: {
    to: '#', // Replace with the actual link when ready
    text: t('Coming Soon'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.mokoi.xyz/dex/bridge',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: mokoibridge, alt: 'Bridge Tokens' },
      // { src: bridgeB, alt: 'Built-in Faucet' },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn Rewards – Coming Soon'),
  bodyText: t(
    'Exciting earning opportunities are on the way! ' +
      'Provide liquidity, earn trading fees, and participate in Liquidity Farms to earn ICE tokens. Keep an eye out for updates!'
  ),
  reverse: false,
  primaryButton: {
    to: '#', // Replace with the actual link when ready
    text: t('Stay Tuned'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.mokoi.xyz/dex/farm',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/ice/',
    attributes: [{ src: mokoiearn, alt: '' }],
  },
})
