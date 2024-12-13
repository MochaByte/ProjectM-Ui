import Image, { ImageProps } from 'next/image'
import mokoi from '../../../../public/images/mokoi.png'

const GradientLogo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={mokoi} alt="Mokoi" {...props} />
}

export default GradientLogo
