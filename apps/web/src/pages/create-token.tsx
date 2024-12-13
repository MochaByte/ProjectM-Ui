import { SUPPORT_TOKEN_DEPLOYER } from 'config/constants/supportChains'
import { CreateToken } from '../views/Archive/CreateToken'

const LocksOverviewPage = () => {
  return <CreateToken />
}

LocksOverviewPage.chains = SUPPORT_TOKEN_DEPLOYER

export default LocksOverviewPage
