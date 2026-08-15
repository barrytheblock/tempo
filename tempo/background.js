
chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'ytt_toggle_panel' }, () => 
    if (chrome.runtime.lastError) {
      
    }
  });
});
