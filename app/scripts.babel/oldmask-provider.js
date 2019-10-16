var HttpProvider = require('web3/lib/web3/httpprovider.js')
var ethUtils = ('ethereumjs-uitil')
var async = require('async')

module.exports = OldmaskProvider

function OldmaskProvider(fp, host){
    this.handlers = []
    this.fp = fp
    this.http = new HttpProvider(host)
    console.log('init provider')
    debugger
}

