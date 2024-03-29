const web3 = require('web3')
const OldmaskProvider = require('./oldmask-provider.js')

const documentOrigin = window.location.origin

var provider = new OldmaskProvider(forwardPayload, 'https://localhost:8545')
web3.setProvider(provider)

console.log('injecting web3!')
window.web3 = web3

function forwardPayload(payload){
    window.postMessage({
        type: 'oldmaskMessage',
        payload: payload,
    }, documentOrigin)
}