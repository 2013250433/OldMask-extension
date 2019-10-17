var HttpProvider = require('web3/lib/web3/httpprovider.js')
var ethUtils = require('ethereumjs-util')
var async = require('async')

module.exports = OldmaskProvider

function OldmaskProvider(fp, host){
    this.handlers = []
    this.fp = fp
    this.http = new HttpProvider(host)
    console.log('init provider')
    debugger;
}

OldmaskProvider.prototype.send = function (payload){
    if(Array.isArray(payload)){
        return payload.map(this.handlePayload.bind(this))
    } else {
        return this.handlePayload(payload)
    }
}

OldmaskProvider.prototype.handlePayload = function(payload, cb){
    var _this = this
    var isSync = !cb
    var resolvedSync = true
    var result = undefined

    var exposedAccounts = ['0x54C1D68392c344D25797d482589aE467523D4D87']

    switch(payload.method){
        case 'eth_accounts':
            return handleResult(null, wrapResonse(payload, exposedAccounts))
        
        case 'eth_sendTransaction':
            this.forwardPayload(payload)
            return handleResult(null, wrapResponse(payload, ''))        
    }

    resolvedSync = false

    function handleResult(err, resp){
        if(isSync){
            return resp
        } else {
            if (resolvedSync){
                process.nextTrick(cb.bind(null, err, resp))
            } else {
                cb(err, resp)
            }
        }
    }

    function wrapResponse(payload, result){
        return {
            jsonrpc: payload.jsonrpc,
            id: payload.id,
            result: result
        }
    }
}

