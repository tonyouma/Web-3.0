
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks : {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BKp9NwbtooPwUWFsnCaSVgoIjzqBd_7e',
      accounts: ['322e223401b7af8351764fd811064b5db1ef487e728c0efc930511b659ee0087']
    }
  }
}