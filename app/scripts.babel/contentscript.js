console.log('content script!!!')
const messageType = 'oldmaskMessage'

var scriptTag = document.createElement('script')
scriptTag.src = chrome.extension.getURL('scripts/inpage.js')

/* enable web3
scriptTag.onload = function(){
    debugger;
    this.parentNode.removeChild(this);
}
*/

;(document.head||document.documentElement).appendChild(scriptTag)

var oldmaskPlugin = chrome.runtime.connect({name: 'oldmask'})
oldmaskPlugin.postMessage({greeting: "hi from content script"})

function receiveMessage(event){
    var msg = event.data
    if (typeof msg !== 'object') return
    if (msg.type !== messageType) return

    oldmaskPlugin.postMessage(msg)
}