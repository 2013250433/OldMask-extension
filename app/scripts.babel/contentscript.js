console.log('content script!!!')

var scriptTag = document.createElement('script')
scriptTag.src = chrome.extension.getURL('scripts/inpage.js')
/*
scriptTag.onload = function(){
    debugger;
    this.parentNode.removeChild(this);
    console.log(this)
}
*/
;(document.head||document.documentElement).appendChild(scriptTag)

var port = chrome.runtime.connect({name: 'oldmask'})
port.postMessage({req: ':)'})
port.onMessage.addListener(function(msg){
    console.log(msg)
})