console.log('content script!')

var scriptTag = document.createElement('script')
scriptTag.src = chrome.extension.getURL('scripts/web3.js')
;(document.head||document.documentElement).appendChild(scriptTag)