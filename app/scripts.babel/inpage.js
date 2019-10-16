const web3 = require('web3/lib/web3/httpprovider.js')
const OldmaskProvider = require('./oldmask-provider.js')

var provider = new OldmaskProvider(forwardPayload, 'https://localhost:8545')
//web3.setProvider(provider)

console.log('injecting web3!')
window.web3 = web3

function forwardPayload(){
    debugger
}