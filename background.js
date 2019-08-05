chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true}, function(tabs){
    const mercy = tabs.sort(() => 0.5 - Math.random());
    const snapped_count = Math.round(mercy.length/2);

    for(let dust = 0; dust < snapped_count; dust++) {
      chrome.tabs.remove(mercy[dust].id);
    }
  });
});
