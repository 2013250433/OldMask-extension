'use strict';

const web3 = require('web3')

const identitiesUrl = "https://github.com/2013250433/OldMask-extension"
const messagingChannelName = 'oldmask'

chrome.browserAction.setBadgeText({text: ':)'});

chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.create({ url: identitiesUrl})
})

chrome.browserAction.setBadgeText({text: 'yee'})
chrome.runtime.onConnect.addListener(function(port){
  console.assert(port.name == messagingChannelName)
  port.onMessage.addListener(function(msg){
    console.log(msg)
    port.postMessage({res: ':p'})
  })
})

chrome.storage.onChanged.addListener(function(changes, namespace){
  for(key in changes){
    var storageChange = changes[key]
    console.log('Storage key:"%s" Namespace:"%s"' +
      'Old value:"%s", New value:"%s"',
      key, namespace, storageChange.oldValue, storageChange.newValue
    )
  }
})

chrome.storage.sync.set({'a':61}, function(){
  console.log('Setting saved')
})
