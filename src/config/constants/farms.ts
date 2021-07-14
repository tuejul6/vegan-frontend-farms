import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'GIRL-BUSD LP',
    lpAddresses: {
      97: '0x98c07519193604126d6593059e6933b1a6e5d36b',
      56: '',
    },
    tokenSymbol: 'GIRL',
    tokenAddresses: {
      97: '0x3b8EC572e56Cf7Ad299494f28488d1dFA4F0B933',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BNB-GIRL LP',
    lpAddresses: {
      97: '0x11cdbbd21bbe35a244806dfcad97135ae8f14a4d',
      56: '',
    },
    tokenSymbol: 'GIRL',
    tokenAddresses: {
      97: '0x3b8EC572e56Cf7Ad299494f28488d1dFA4F0B933',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'GIRLS',
    lpAddresses: {
      97: '0x3b8EC572e56Cf7Ad299494f28488d1dFA4F0B933',
      56: '',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
