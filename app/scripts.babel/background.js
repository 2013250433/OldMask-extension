const identitiesUrl = "https://github.com/2013250433/OldMask-extension"
const messagingChannelName = 'oldmask'

var pendingTxs = []

chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.create({ url: identitiesUrl})
})

chrome.browserAction.setBadgeText({text: 'yee'})
chrome.runtime.onConnect.addListener(function(port){
  console.assert(port.name == messagingChannelName)
  port.onMessage.addListener(function(msg){
    addTransaction(msg.payload)
  })
})

updateBadge()

function addTransaction(tx){
  pendingTxs.push(tx)
  updateBadge()
}

function updateBadge(){
  var label = ''
  if (pendingTxs.length){
    label = String(pendingTxs.length)
  }

  chrome.browserAction.setBadgeText({text: label})
}
/*
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
*/