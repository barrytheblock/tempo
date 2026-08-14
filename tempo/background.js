// Clicking the toolbar icon replaces the userscript's GM_registerMenuCommand:
// it tells the active YouTube Music tab's content script to toggle the panel.
chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'ytt_toggle_panel' }, () => {
    // Swallow "no receiving end" errors (e.g. tab isn't music.youtube.com yet).
    if (chrome.runtime.lastError) {
      // no-op
    }
  });
});