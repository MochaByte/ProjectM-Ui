import IceChain from '../ice-chain'
// import { FACTORY_ADDRESS, INIT_CODE_HASH } from "../common/swap";

export const inkTestnet: IceChain = {
  id: 763373,
  name: 'Ink Sepolia',
  features: ['swap'],
  network: 'inkTestnet',
  rpcUrls: {
    public: { http: ['https://rpc-gel-sepolia.inkonchain.com'] },
    default: { http: ['https://rpc-gel-sepolia.inkonchain.com'] },
  },
  blockExplorers: {
    default: { name: 'Ink Sepolia Explorer', url: 'https://explorer-sepolia.inkonchain.com' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11', 
      blockCreated: 4679329, 
    },
  },
  blockInterval: 1,
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006', //WETH9
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0x2bcd9c5A4780d878BcF644f5ff85A158100dafdB', // MockUSDC contract address
    decimals: 6,
    symbol: 'USDC',
    name: 'Mock USDC',
  },
  iceAddress: '0x4200000000000000000000000000000000000006',
  swap: {
    factoryAddress: '0xc14C8425354412E6dCbD787895eE80842C26cc6f', // Your factory contract address
    initCodeHash: '0x3f3d2d7902526940451b56208221020a2d0c5ae6f1fcaae107e7244adf7448e2', // INIT_CODE_HASH from the factory contract
    routerAddress: '0x3B93428C0417ac28ac6fb4425bBD4A77CD2699A7', // Replace with the actual router address for Ink TestnetTODO
  },
  smartRouterAddress: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300', // Replace with Ink's smart router address if availableTODO
}