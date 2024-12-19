import { motion } from 'framer-motion'
import { Text, Heading, Card, CardBody, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LandingBodyWrapper } from '../../styles'
import config from './config'

const FaqSection = () => {
  const { t } = useTranslation()


  return (
    <LandingBodyWrapper>
      <Flex flexDirection="column" alignItems="center" paddingBottom="80px">
        {/* Roadmap Title */}
        <Heading scale="xl" color="secondary" marginBottom="60px">
          {t('Roadmap')}
        </Heading>

        {/* Roadmap Items */}
        <Flex flexDirection="column" position="relative" alignItems="center" width="100%">
          {config({ t }).map((roadblock, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 * i }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              {/* Circle with Heading */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, var(--colors-background) 50%, var(--colors-secondary) 100%)`,
                    position: 'absolute',
                    zIndex: 0,
                  }}
                ></div>
                <Heading
                  as="h3"
                  scale="lg"
                  color="secondary"
                  style={{
                    backgroundColor: 'var(--colors-background)',
                    padding: '0 12px',
                    zIndex: 1,
                  }}
                >
                  {roadblock.title}
                </Heading>
              </div>

              {/* Connecting Line */}
              <div
                style={{
                  width: '4px',
                  height: '20px',
                  background: 'var(--colors-gradientCardHeader)',
                }}
              />

              {/* Roadmap Container */}
              <Card style={{ width: '80%' }}>
                <CardBody>
                  {roadblock.description.map(({ text, completed }, index) => (
                    <Flex alignItems="center" key={text} marginBottom="8px">
                      <Text
                        style={{
                          textDecoration: completed ? 'line-through' : 'none',
                          color: completed ? 'var(--colors-textSubtle)' : 'inherit',
                        }}
                      >
                        {completed ? '✔ ' : '☐ '}
                        {text}
                      </Text>
                    </Flex>
                  ))}
                  <Text textAlign="end" fontStyle="italic" color="textSubtle">
                    {roadblock.reached}
                  </Text>
                </CardBody>
              </Card>

              {/* Connecting Line to Next Circle */}
              {i < config({ t }).length - 1 && (
                <div
                  style={{
                    width: '4px',
                    height: '40px',
                    background: 'var(--colors-gradientCardHeader)',
                    marginTop: '20px',
                  }}
                />
              )}
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </LandingBodyWrapper>
  )
}

export default FaqSection
