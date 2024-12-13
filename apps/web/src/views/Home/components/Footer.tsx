import { styled } from 'styled-components'
import { Flex, Heading, Text, useMatchBreakpoints, Button, TwitterIcon, TelegramIcon, DiscordIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@pancakeswap/wagmi'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

// const BgWrapper = styled.div`
//   overflow: hidden;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background: linear-gradient(135deg, #10151c, #0c0f13); /* Example gradient */
//   z-index: -1; /* Ensures it stays behind the footer content */
// `;

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 32px 16px;
  background: linear-gradient(135deg, #123456, #345678); /* Example gradient */
  background-size: cover; /* Ensures the background covers the area */
  background-position: center; /* Centers the background */
  color: white;
  border-radius: 16px; /* Adds the border radius */
  margin: 16px; /* Adds space around the footer to enhance the rounded effect */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Optional: adds a soft shadow for better visibility */

`

const GlowingLine = styled.div`
  width: 100%;
  height: 2px;
  margin: 24px 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
`

const FooterLinks = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 16px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;

    a {
      color: white;
      text-decoration: none;
      margin: 6px 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const TermsWrapper = styled(Flex)`
  justify-content: flex-end;
  width: 100%;
  padding: 8px 16px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { isTablet, isDesktop } = useMatchBreakpoints()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>
          <SlideSvgDark className="slide-svg-dark" width="100%" />
          <SlideSvgLight className="slide-svg-light" width="100%" />
        </InnerWrapper>
      </BgWrapper>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Connect with us!')}
        </Heading>
        <Flex mb="24px" style={{ gap: '0px' }}>
          <Button
            as="a"
            title={t('Mokoi Twitter')}
            href="https://x.com/Mocha_byte"
            target="_blank"
            variant="secondary"
            scale="md"
            mr="8px"
          >
            <TwitterIcon color="white" mr="0px" /> {t('')}
          </Button>
          <Button
            as="a"
            title={t('Mokoi Discord')}
            href="https://discord.gg/DZqPjHQx"
            target="_blank"
            variant="secondary"
            scale="md"
            mr="8px"
          >
            <DiscordIcon color="white" mr="0px" /> {t('')}
          </Button>
          <Button
            disabled={true}
            as="a"
            title={t('Mokoi Telegram')}
            target="_blank"
            variant="secondary"
            scale="md"
            mr="8px"
          >
            <TelegramIcon color="white" mr="0px" /> {t('')}
          </Button>
        </Flex>

        <FooterLinks>
          <div>
            <a href="/swap">{t('Swap')}</a>
            <a href="/liquitity">{t('Liquidity')}</a>
            <a href="/earn">{t('Earn')}</a>
          </div>
          <div>
            <a href="/company">{t('Company')}</a>
            <a href="/blog">{t('Blog')}</a>
            <a href="/wiki">{t('Wiki')}</a>
          </div>
          <div>
            <a href="/protocol">{t('Protocol')}</a>
            <a href="/vote">{t('Vote')}</a>
            <a href="/governance">{t('Governance')}</a>
          </div>
          <div>
            <a href="/developers">{t('Developers')}</a>
            <a href="/support">{t('Support')}</a>
            <a href="/donate">{t('Donate')}</a>
          </div>
        </FooterLinks>

        <GlowingLine />

        <TermsWrapper>
          <a href="/terms-of-service">{t('Terms of Service')}</a>
        </TermsWrapper>
      </Wrapper>
    </>
  )
}

export default Footer
