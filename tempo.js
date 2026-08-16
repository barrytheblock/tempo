// ==UserScript==
// @name         tempo
// @namespace    https://airstudios.nl/
// @version      1.2.0
// @description  YouTube Music statistic tracker & themes, with AIRSTUDIOS Cloud save/load.
// @author       barrytheblock
// @match        https://music.youtube.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjgiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNiIgeT0iMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNSIgeT0iMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iNCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNSIgeT0iNCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTEiIHk9IjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE0IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxIiB5PSI2IiB3aWR0aD0iNyIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxNCIgeT0iNiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMSIgeT0iNyIgd2lkdGg9IjciIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTEiIHk9IjciIHdpZHRoPSI2IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjExIiB5PSI4IiB3aWR0aD0iNiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMCIgeT0iOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjAiIHk9IjEwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxOSIgeT0iMTEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIxIiB5PSIxMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTEiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxOCIgeT0iMTIiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIxIiB5PSIxMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTAiIHk9IjEzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxMiIgeT0iMTMiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE3IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjEiIHk9IjEzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI5IiB5PSIxNCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTIiIHk9IjE0IiB3aWR0aD0iNiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMSIgeT0iMTQiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjYiIHk9IjE1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxMyIgeT0iMTUiIHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIxIiB5PSIxNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjMiIHk9IjE1IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI0IiB5PSIxNiIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iOCIgeT0iMTYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE0IiB5PSIxNiIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjIiIHk9IjE2IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyNCIgeT0iMTYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjMiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI3IiB5PSIxNyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjMiIHk9IjE3IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyIiB5PSIxOCIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNyIgeT0iMTgiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIzIiB5PSIxOCIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMiIgeT0iMTkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjciIHk9IjE5IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMyIgeT0iMTkiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjEiIHk9IjIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI3IiB5PSIyMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjIiIHk9IjIwIiB3aWR0aD0iNSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIwIiB5PSIyMSIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNyIgeT0iMjEiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjEwIiB5PSIyMSIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjAiIHk9IjIxIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyNSIgeT0iMjEiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjAiIHk9IjIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI4IiB5PSIyMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTAiIHk9IjIyIiB3aWR0aD0iNSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxOSIgeT0iMjIiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIzIiB5PSIyMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjUiIHk9IjIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIwIiB5PSIyMyIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iOCIgeT0iMjMiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjEyIiB5PSIyMyIgd2lkdGg9IjQiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTkiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMyIgeT0iMjMiIHdpZHRoPSI1IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjAiIHk9IjI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI5IiB5PSIyNCIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTYiIHk9IjI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMiIgeT0iMjQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjI0IiB5PSIyNCIgd2lkdGg9IjQiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMCIgeT0iMjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjEwIiB5PSIyNSIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTgiIHk9IjI1IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMCIgeT0iMjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjIzIiB5PSIyNSIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjYiIHk9IjI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxIiB5PSIyNiIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTEiIHk9IjI2IiB3aWR0aD0iOSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyMiIgeT0iMjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjI2IiB5PSIyNiIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMiIgeT0iMjciIHdpZHRoPSI3IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE1IiB5PSIyNyIgd2lkdGg9IjUiIGhlaWdodD0iMSIgZmlsbD0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjIiIHk9IjI3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIyNSIgeT0iMjciIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjgiIHk9IjI4IiB3aWR0aD0iOSIgaGVpZ2h0PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxOSIgeT0iMjgiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      airstudios.nl
// @run-at       document-idle
// ==/UserScript==


(function () {
  'use strict';

  const NS = 'ytt_';
  const MAX_SCROBBLES = 10000;

  const DEFAULT_SETTINGS = {
    userName: '',
    hotkey: 'ShiftRight',
    themeId: 'moondark',
    themeScope: 'panel',
    notifyErrors: true,
    notifyEvents: true,
    suppressNamePrompt: false,
    autoSaveMinutes: 5
  };


  const GM_KEYS = {
    settings: NS + 'settings',
    scrobbles: NS + 'scrobbles',
    streakState: NS + 'streakState',
    cloud: NS + 'cloud'
  };

  function loadJSON(key, fallback) {
    try {
      const raw = GM_getValue(key, null);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.error('[Tempo] failed to parse', key, e);
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      GM_setValue(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('[Tempo] failed to save', key, e);
      notify('error', 'Could not save data to storage.');
      return false;
    }
  }

  const pendingSaves = new Map();
  const saveTimers = new Map();

  function scheduleSave(key, value, delay = 600) {
    pendingSaves.set(key, value);
    if (saveTimers.has(key)) clearTimeout(saveTimers.get(key));
    saveTimers.set(key, setTimeout(() => flushSave(key), delay));
  }

  function flushSave(key) {
    saveTimers.delete(key);
    if (!pendingSaves.has(key)) return;
    const value = pendingSaves.get(key);
    pendingSaves.delete(key);
    writeJSON(key, value);
  }

  function flushAllSaves() {
    [...pendingSaves.keys()].forEach(flushSave);
  }

  let settings = Object.assign({}, DEFAULT_SETTINGS, loadJSON(GM_KEYS.settings, {}));
  function saveSettings() { scheduleSave(GM_KEYS.settings, settings); }

  let scrobbles = loadJSON(GM_KEYS.scrobbles, []);
  let streakState = loadJSON(GM_KEYS.streakState, {});
  let cloud = Object.assign({ token: '', username: '', avatarUrl: '', lastSyncAt: 0, lastLoadAt: 0, pendingDisconnect: false }, loadJSON(GM_KEYS.cloud, {}));
  function saveCloud() { scheduleSave(GM_KEYS.cloud, cloud); }

  function addScrobble(entry) {
    scrobbles.push(entry);
    if (scrobbles.length > MAX_SCROBBLES) scrobbles.splice(0, scrobbles.length - MAX_SCROBBLES);
    scheduleSave(GM_KEYS.scrobbles, scrobbles);
    checkStreaksAndNotify();
    if (panelOpen) refreshCurrentView();
    updateLiveNow();
  }

  const CLOUD_CLIENT_ID = 'tempo';
  const CLOUD_BASE = 'https://airstudios.nl/api/v1/';
  const CLOUD_AUTHORIZE_URL = `https://airstudios.nl/cloud/authorize.php?client_id=${CLOUD_CLIENT_ID}`;
  const CLOUD_DISCONNECT_URL = 'https://airstudios.nl/cloud';
  const CLOUD_DATA_KEY = 'tempo_data';
  const CLOUD_DISCONNECT_POLL_MS = 5000;

  function gmRequest(method, url, opts = {}) {
    return new Promise((resolve, reject) => {
      if (typeof GM_xmlhttpRequest !== 'function') {
        reject(new Error('GM_xmlhttpRequest is not available.'));
        return;
      }
      GM_xmlhttpRequest({
        method,
        url,
        headers: opts.headers || {},
        data: opts.body,
        timeout: 15000,
        onload: (res) => {
          let json = null;
          try { json = JSON.parse(res.responseText); } catch (e) {  }
          resolve({ status: res.status, json, text: res.responseText });
        },
        onerror: () => reject(new Error('Network error contacting AIRSTUDIOS Cloud.')),
        ontimeout: () => reject(new Error('AIRSTUDIOS Cloud request timed out.'))
      });
    });
  }

  function isCloudConnected() { return !!cloud.token; }

  function cloudHeaders(extra) {
  return Object.assign(
    { Authorization: `Bearer ${cloud.token}`, 'X-AIRSTUDIOS-Token': cloud.token },
    extra || {}
  );
 }

  function sanitizedSettingsForCloud() {
    const { userName, hotkey, themeId, themeScope, notifyErrors, notifyEvents, suppressNamePrompt } = settings;
    return { userName, hotkey, themeId, themeScope, notifyErrors, notifyEvents, suppressNamePrompt };
  }

  async function verifyAndConnect(rawToken) {
    const token = String(rawToken || '').trim();
    if (!token) {
      notify('error', 'Paste your AIRSTUDIOS Cloud token first.');
      return false;
    }
    const priorToken = cloud.token;
    cloud.token = token;
    try {
      const res = await gmRequest('GET', CLOUD_BASE + 'me.php', { headers: cloudHeaders() });
      if (res.status === 401) {
        cloud.token = priorToken;
        notify('error', 'That token was rejected. Double-check it and try again.');
        return false;
      }
      if (res.status !== 200 || !res.json) {
        cloud.token = priorToken;
        notify('error', (res.json && res.json.message) || 'Could not verify that token.');
        return false;
      }
      cloud.username = res.json.username || '';
      cloud.avatarUrl = res.json.avatarUrl || res.json.avatar || res.json.avatar_url || '';
      cloud.pendingDisconnect = false;
      saveCloud();
      notify('info', `Connected to AIRSTUDIOS Cloud as ${cloud.username || 'your account'}.`);
      await cloudInitialSync();
      setupAutoSaveTimer();
      refreshCurrentView();
      return true;
    } catch (e) {
      cloud.token = priorToken;
      notify('error', 'Connection failed: ' + e.message);
      return false;
    }
  }

  async function cloudInitialSync() {
    try {
      const res = await gmRequest('GET', CLOUD_BASE + `data.php?key=${CLOUD_DATA_KEY}`, { headers: cloudHeaders() });
      if (res.status === 200 && res.json && res.json.value) {
        const remote = res.json.value;
        if (scrobbles.length === 0 && Array.isArray(remote.scrobbles) && remote.scrobbles.length) {
          scrobbles = remote.scrobbles;
          scheduleSave(GM_KEYS.scrobbles, scrobbles);
          if (remote.streakState) {
            streakState = remote.streakState;
            scheduleSave(GM_KEYS.streakState, streakState);
          }
          cloud.lastLoadAt = Date.now();
          saveCloud();
          notify('info', 'Imported your existing AIRSTUDIOS Cloud data.');
        }
      }
    } catch (e) {

    }
  }

  async function cloudSyncPush(silent) {
    if (!isCloudConnected()) return;
    try {
      const payload = { scrobbles, streakState, settings: sanitizedSettingsForCloud() };
      const res = await gmRequest('POST', CLOUD_BASE + `data.php?key=${CLOUD_DATA_KEY}`, {
        headers: cloudHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(payload)
      });
      if (res.status === 401) {
        cloud.token = '';
        cloud.username = '';
        cloud.avatarUrl = '';
        saveCloud();
        setupAutoSaveTimer();
        notify('error', 'Your AIRSTUDIOS Cloud session was revoked. Please reconnect.');
        refreshCurrentView();
        return;
      }
      if (res.status === 413) {
        if (!silent) notify('error', 'Your local history is too large for AIRSTUDIOS Cloud right now.');
        return;
      }
      if (res.status !== 200) {
        if (!silent) notify('error', (res.json && res.json.message) || 'Save failed.');
        return;
      }
      cloud.lastSyncAt = Date.now();
      saveCloud();
      if (!silent) notify('info', 'Saved to AIRSTUDIOS Cloud.');
      refreshCurrentView();
    } catch (e) {
      if (!silent) notify('error', 'Save failed: ' + e.message);
    }
  }

  async function cloudLoad() {
    if (!isCloudConnected()) return;
    if (!confirm('This will replace your local data with what is stored in AIRSTUDIOS Cloud. Continue?')) return;
    try {
      const res = await gmRequest('GET', CLOUD_BASE + `data.php?key=${CLOUD_DATA_KEY}`, { headers: cloudHeaders() });
      if (res.status === 401) {
        cloud.token = '';
        cloud.username = '';
        cloud.avatarUrl = '';
        saveCloud();
        setupAutoSaveTimer();
        notify('error', 'Your AIRSTUDIOS Cloud session was revoked. Please reconnect.');
        refreshCurrentView();
        return;
      }
      if (res.status !== 200 || !res.json || !res.json.value) {
        notify('error', (res.json && res.json.message) || 'Could not load data.');
        return;
      }
      const remote = res.json.value;
      if (Array.isArray(remote.scrobbles)) {
        scrobbles = remote.scrobbles;
        scheduleSave(GM_KEYS.scrobbles, scrobbles);
      }
      if (remote.streakState) {
        streakState = remote.streakState;
        scheduleSave(GM_KEYS.streakState, streakState);
      }
      if (remote.settings) {
        settings = Object.assign({}, DEFAULT_SETTINGS, settings, remote.settings);
        scheduleSave(GM_KEYS.settings, settings);
        applyTheme(settings.themeId, settings.themeScope);
      }
      cloud.lastLoadAt = Date.now();
      saveCloud();
      notify('info', 'Loaded data from AIRSTUDIOS Cloud.');
      refreshCurrentView();
    } catch (e) {
      notify('error', 'Load failed: ' + e.message);
    }
  }

  let autoSaveTimer = null;
  function setupAutoSaveTimer() {
    if (autoSaveTimer) { clearInterval(autoSaveTimer); autoSaveTimer = null; }
    if (!isCloudConnected() || cloud.pendingDisconnect || !settings.autoSaveMinutes) return;
    autoSaveTimer = setInterval(() => cloudSyncPush(true), settings.autoSaveMinutes * 60 * 1000);
  }

  function autoSaveLabel(v) {
    return v === 0 ? 'Off' : `Every ${v} min`;
  }

  let disconnectPollTimer = null;
  function startDisconnectPoll() {
    if (disconnectPollTimer) clearInterval(disconnectPollTimer);
    disconnectPollTimer = setInterval(checkDisconnectStatus, CLOUD_DISCONNECT_POLL_MS);
  }
  function stopDisconnectPoll() {
    if (disconnectPollTimer) { clearInterval(disconnectPollTimer); disconnectPollTimer = null; }
  }

  async function checkDisconnectStatus() {
    if (!cloud.pendingDisconnect || !cloud.token) { stopDisconnectPoll(); return; }
    try {
      const res = await gmRequest('GET', CLOUD_BASE + 'me.php', { headers: cloudHeaders() });
      if (res.status === 401) {
        stopDisconnectPoll();
        cloud = { token: '', username: '', avatarUrl: '', lastSyncAt: 0, lastLoadAt: 0, pendingDisconnect: false };
        saveCloud();
        setupAutoSaveTimer();
        notify('info', 'AIRSTUDIOS Cloud access removed.');
        refreshCurrentView();
      }
    } catch (e) {

    }
  }

  function initiateDisconnect() {
    window.open(CLOUD_DISCONNECT_URL, '_blank', 'noopener');
    cloud.pendingDisconnect = true;
    saveCloud();
    setupAutoSaveTimer();
    startDisconnectPoll();
    notify('info', 'Remove Tempo access on the AIRSTUDIOS Cloud page to finish disconnecting.');
    refreshCurrentView();
  }

  function cancelDisconnect() {
    cloud.pendingDisconnect = false;
    saveCloud();
    stopDisconnectPoll();
    setupAutoSaveTimer();
    refreshCurrentView();
  }

  function timeAgo(ts) {
    if (!ts) return 'never';
    const s = Math.max(0, Math.round((Date.now() - ts) / 1000));
    if (s < 5) return 'just now';
    if (s < 60) return `${s} sec${s === 1 ? '' : 's'} ago`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m} min${m === 1 ? '' : 's'} ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h} hour${h === 1 ? '' : 's'} ago`;
    const d = Math.floor(h / 24);
    return `${d} day${d === 1 ? '' : 's'} ago`;
  }

  const THEMES = {
    dark: {
      name: 'Dark',
      vars: { bg: '#121212', bg2: '#191919', surface: '#1e1e1e', accent: '#8b5cf6', accent2: '#a78bfa', text: '#f2f2f2', text2: '#b3b3b3', border: '#2a2a2a' },
      preview: 'linear-gradient(135deg,#121212,#242424)'
    },
    light: {
      name: 'Light',
      vars: { bg: '#f7f7f9', bg2: '#ffffff', surface: '#ffffff', accent: '#6d28d9', accent2: '#8b5cf6', text: '#1a1a1a', text2: '#5a5a5a', border: '#e2e2e6' },
      preview: 'linear-gradient(135deg,#ffffff,#e9e9f2)'
    },
    moondark: {
      name: 'Moon Dark',
      vars: { bg: '#0a0e1a', bg2: '#101627', surface: '#131a2e', accent: '#7dd3fc', accent2: '#c4b5fd', text: '#e6ebff', text2: '#8b93b8', border: '#1e2740' },
      preview: 'linear-gradient(135deg,#0a0e1a,#1b2547)'
    },
    beach: {
      name: 'Beach',
      vars: { bg: '#eaf7f6', bg2: '#dff3ef', surface: '#ffffff', accent: '#ff8c69', accent2: '#2dd4bf', text: '#0f2a2a', text2: '#3a5a5f', border: '#cdeeea' },
      preview: 'linear-gradient(135deg,#a8e6cf,#ffd3b0,#ff9a76)'
    },
    starryNight: {
      name: 'Starry Night',
      vars: { bg: '#050818', bg2: '#0b1030', surface: '#0f1538', accent: '#fbbf24', accent2: '#818cf8', text: '#eef0ff', text2: '#9aa0c9', border: '#1c2452' },
      preview: 'linear-gradient(135deg,#0b1030,#050818)',
      stars: true
    },
    sunset: {
      name: 'Sunset',
      vars: { bg: '#2b0f3a', bg2: '#421a4a', surface: '#3a1450', accent: '#ff7a59', accent2: '#ffb86b', text: '#fff3ec', text2: '#f0b8c8', border: '#5a2560' },
      preview: 'linear-gradient(135deg,#ff7a59,#c2478a,#2b0f3a)'
    },
    pinkBears: {
      name: 'Pink Bears',
      vars: { bg: '#fff0f5', bg2: '#ffe4ee', surface: '#ffffff', accent: '#e0729c', accent2: '#c97b8f', text: '#5a2a3a', text2: '#8a5566', border: '#ffd0e0' },
      preview: 'linear-gradient(135deg,#ffd1e3,#ffb6c9)'
    },
    image1: {
      name: 'Blush',
      vars: { bg: '#fbdde6', bg2: '#f7cddb', surface: '#fff5f8', accent: '#d6537a', accent2: '#a63f5f', text: '#3a1a24', text2: '#7a4a58', border: '#f2bccb' },
      preview: 'linear-gradient(135deg,#fbdde6,#f6c9d8)'
    },
    image2: {
      name: 'Dusk Skyline',
      vars: { bg: '#1b1830', bg2: '#2a2143', surface: '#241d3d', accent: '#e8a0c4', accent2: '#8f7fd6', text: '#f3ecff', text2: '#b7a9d9', border: '#382c58' },
      preview: 'linear-gradient(180deg,#2b2550,#443a68,#8a6f96,#e8c7c0)',
      skyline: true
    }
  };

  let starfieldCache = null;
  function getStarfieldDataURL() {
    if (starfieldCache) return starfieldCache;
    const c = document.createElement('canvas');
    c.width = 800; c.height = 450;
    const ctx = c.getContext('2d');
    ctx.fillStyle = 'transparent';
    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < 160; i++) {
      const x = Math.random() * c.width;
      const y = Math.random() * c.height;
      const r = Math.random() * 1.4 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(Math.random() * 0.6 + 0.3).toFixed(2)})`;
      ctx.fill();
    }
    starfieldCache = c.toDataURL('image/png');
    return starfieldCache;
  }

  function getSkylineDataURL() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" preserveAspectRatio="none">
      <polygon points="0,450 0,300 60,260 120,310 180,270 240,320 300,280 360,330 420,290 480,340 540,300 600,335 660,300 720,340 800,300 800,450" fill="rgba(0,0,0,0.55)"/>
    </svg>`;
    return 'data:image/svg+xml;base64,' + btoaSafe(svg);
  }

  function btoaSafe(str) {
    try { return btoa(unescape(encodeURIComponent(str))); } catch (e) { return btoa(str); }
  }

  const YT_SPEC_VAR_MAP = {
    bg: ['--yt-spec-base-background', '--yt-spec-general-background-a'],
    bg2: ['--yt-spec-raised-background', '--yt-spec-menu-background'],
    surface: ['--yt-spec-brand-background-solid'],
    accent: ['--yt-spec-call-to-action', '--yt-spec-brand-icon-active'],
    accent2: ['--yt-spec-brand-link-text'],
    text: ['--yt-spec-text-primary'],
    text2: ['--yt-spec-text-secondary'],
    border: ['--yt-spec-10-percent-layer']
  };

  let appOverrideSheet = null;
 function getReadableText(background, light = '#f5f5f5', dark = '#171717') {
  const hex = background.replace('#', '');

  if (hex.length !== 6) return light;

  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const linear = c =>
    c <= 0.03928
      ? c / 12.92
      : Math.pow((c + 0.055) / 1.055, 2.4);

  const luminance =
    0.2126 * linear(r) +
    0.7152 * linear(g) +
    0.0722 * linear(b);

  return luminance > 0.55 ? dark : light;
}

function getReadableSecondary(background) {
  const primary = getReadableText(background);
  return primary === '#171717' ? '#5a5a5a' : '#b8b8b8';
}

function buildAppOverrideCSS(theme) {
  const v = theme.vars;

  const getReadableText = (hex, light = '#f5f5f5', dark = '#171717') => {
    const value = String(hex || '').replace('#', '');
    if (value.length !== 6) return light;

    const r = parseInt(value.slice(0, 2), 16) / 255;
    const g = parseInt(value.slice(2, 4), 16) / 255;
    const b = parseInt(value.slice(4, 6), 16) / 255;

    const linear = c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);

    return luminance > 0.55 ? dark : light;
  };

  const getSecondaryText = background => {
    const primary = getReadableText(background);
    return primary === '#171717' ? '#5a5a5a' : '#b8b8b8';
  };

  const innerBg = v.bg;
  const outerBg = v.bg2;

  const innerPrimary = getReadableText(innerBg);
  const innerSecondary = getSecondaryText(innerBg);
  const outerPrimary = getReadableText(outerBg);
  const outerSecondary = getSecondaryText(outerBg);

  return `

    html, body, ytmusic-app, #app {
      background-color: ${innerBg} !important;
      color: ${innerPrimary} !important;
    }

    ytmusic-browse, ytmusic-home, ytmusic-search, ytmusic-library,
    ytmusic-section-list-renderer, ytmusic-item-section-renderer,
    ytmusic-rich-grid-renderer, ytmusic-grid-renderer,
    ytmusic-carousel-shelf-renderer, ytmusic-app-layout,
    #contents, #header, .content-container, #page-manager {
      --yt-spec-base-background: ${innerBg} !important;
      --yt-spec-general-background-a: ${innerBg} !important;
      --yt-spec-general-background-b: ${innerBg} !important;
      --yt-spec-text-primary: ${innerPrimary} !important;
      --yt-spec-text-secondary: ${innerSecondary} !important;
      background-color: ${innerBg} !important;
      color: ${innerPrimary} !important;
    }

    ytmusic-nav-bar, #nav-bar-background, ytmusic-player-bar,
    ytmusic-guide-renderer, tp-yt-app-drawer, ytmusic-popup-container {
      --yt-spec-base-background: ${outerBg} !important;
      --yt-spec-raised-background: ${outerBg} !important;
      --yt-spec-menu-background: ${outerBg} !important;
      --yt-spec-text-primary: ${outerPrimary} !important;
      --yt-spec-text-secondary: ${outerSecondary} !important;
      --yt-spec-icon-active-other: ${outerPrimary} !important;
      --yt-spec-icon-inactive: ${outerSecondary} !important;
      background-color: ${outerBg} !important;
      border-color: ${v.border} !important;
      color: ${outerPrimary} !important;
    }

    ytmusic-search-box, #search-input, iron-input input, .search-box-input {
      background-color: ${innerBg} !important;
      color: ${innerPrimary} !important;
    }
    ytmusic-search-box input::placeholder,
    #search-input::placeholder,
    .search-box-input::placeholder {
      color: ${innerSecondary} !important;
      opacity: 1 !important;
    }
    ytmusic-search-box #icon, ytmusic-search-box iron-icon {
      color: ${outerPrimary} !important;
    }

    ytmusic-nav-bar tp-yt-paper-icon-button,
    ytmusic-nav-bar iron-icon,
    ytmusic-guide-renderer iron-icon,
    ytmusic-guide-renderer tp-yt-paper-item,
    ytmusic-player-bar iron-icon,
    ytmusic-player-bar tp-yt-paper-icon-button,
    ytmusic-player-bar yt-formatted-string {
      color: ${outerPrimary} !important;
      fill: ${outerPrimary} !important;
    }

    ytmusic-player-bar .content-info-wrapper yt-formatted-string,
    ytmusic-player-bar .title,
    ytmusic-player-bar .byline {
      color: ${outerPrimary} !important;
    }
    ytmusic-player-bar .byline yt-formatted-string,
    ytmusic-player-bar .secondary {
      color: ${outerSecondary} !important;
    }

    ytmusic-app ytmusic-browse-response yt-formatted-string,
    ytmusic-app ytmusic-browse-response span,
    ytmusic-app ytmusic-browse-response h1,
    ytmusic-app ytmusic-browse-response h2,
    ytmusic-app ytmusic-browse-response h3,
    ytmusic-section-list-renderer yt-formatted-string,
    .title, h2.title {
      color: ${innerPrimary} !important;
    }

    ytmusic-app a, ytmusic-app yt-formatted-string a {
      color: ${v.accent2} !important;
    }

    ytmusic-app .secondary, ytmusic-app .subtext, ytmusic-app .byline,
    ytmusic-app .subtitle, ytmusic-app .description, ytmusic-app .view-all {
      color: ${innerSecondary} !important;
    }

    ytmusic-app yt-img-shadow,
    ytmusic-app yt-image,
    ytmusic-app ytmusic-thumbnail-renderer,
    ytmusic-app .thumbnail-container,
    ytmusic-app img {
      background-color: transparent !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    ytmusic-thumbnail-renderer #background,
    ytmusic-app .image-wrapper,
    ytmusic-app .placeholder {
      background-color: transparent !important;
    }
  `;
}
  function applyAppReskin(theme) {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([k, v]) => {
      (YT_SPEC_VAR_MAP[k] || []).forEach(varName => root.style.setProperty(varName, v));
    });
    root.setAttribute('data-ytt-app-theme', theme.name);
    try {
      if (!appOverrideSheet) {
        appOverrideSheet = new CSSStyleSheet();
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, appOverrideSheet];
      }
      appOverrideSheet.replaceSync(buildAppOverrideCSS(theme));
    } catch (e) {

    }
  }

  function clearAppReskin() {
    const root = document.documentElement;
    Object.values(YT_SPEC_VAR_MAP).flat().forEach(varName => root.style.removeProperty(varName));
    root.removeAttribute('data-ytt-app-theme');
    if (appOverrideSheet) {
      try { appOverrideSheet.replaceSync(''); } catch (e) {  }
    }
  }

  function applyTheme(themeId, scope) {
    const theme = THEMES[themeId] || THEMES.moondark;
    const applyToPanel = scope === 'panel' || scope === 'both';
    const applyToApp = scope === 'app' || scope === 'both';

    if (panelEl) {
      panelEl.removeAttribute('data-ytt-stars');
      panelEl.style.backgroundImage = '';
    }

    if (applyToPanel && panelEl) {

      Object.entries(theme.vars).forEach(([k, v]) => {
        panelEl.style.setProperty(`--ytt-${k}`, v);
        if (hostEl) hostEl.style.setProperty(`--ytt-${k}`, v);
      });
      if (theme.stars) {
        panelEl.style.backgroundImage = `linear-gradient(160deg, var(--ytt-bg2), var(--ytt-bg)), url(${getStarfieldDataURL()})`;
        panelEl.style.backgroundSize = 'cover, cover';
        panelEl.style.backgroundBlendMode = 'normal, screen';
      } else if (theme.skyline) {
        panelEl.style.backgroundImage = `linear-gradient(180deg, var(--ytt-bg2), var(--ytt-bg)), url(${getSkylineDataURL()})`;
        panelEl.style.backgroundSize = 'cover, cover';
        panelEl.style.backgroundPosition = 'center, bottom';
        panelEl.style.backgroundRepeat = 'no-repeat, no-repeat';
      } else {
        panelEl.style.backgroundImage = 'linear-gradient(160deg, var(--ytt-bg2), var(--ytt-bg))';
      }
    } else if (panelEl) {

      Object.entries(THEMES.moondark.vars).forEach(([k, v]) => panelEl.style.setProperty(`--ytt-${k}`, v));
    }

    if (applyToApp) {
      applyAppReskin(theme);
    } else {
      clearAppReskin();
    }
  }

  function fmtDuration(ms) {
    const totalSec = Math.round(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }

  function keyLabel(code) {
    const map = { ShiftRight: 'Right Shift', ShiftLeft: 'Left Shift', ControlRight: 'Right Ctrl', AltRight: 'Right Alt' };
    return map[code] || code;
  }

  function getLocalDateKey(ts) {
    const d = new Date(ts);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  let trustedHTMLPolicy = null;
  if (window.trustedTypes && typeof trustedTypes.createPolicy === 'function') {
    try {
      trustedHTMLPolicy = trustedTypes.createPolicy('ytt-html', { createHTML: (s) => s });
    } catch (e) {
      trustedHTMLPolicy = null;
    }
  }

  function setInnerHTML(node, htmlString) {
    while (node.firstChild) node.removeChild(node.firstChild);
    if (!htmlString) return;
    if (trustedHTMLPolicy) {
      node.innerHTML = trustedHTMLPolicy.createHTML(htmlString);
      return;
    }
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    Array.from(doc.body.childNodes).forEach(n => node.appendChild(document.importNode(n, true)));
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (v == null) return;
      if (k === 'class') node.className = v;
      else if (k === 'html') setInnerHTML(node, v);
      else if (k === 'style' && typeof v === 'object') {
        Object.entries(v).forEach(([sk, sv]) => { node.style[sk] = sv; });
      }
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    });
    (children || []).forEach(c => { if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return node;
  }

  const ICONS = {
    home: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/></svg>',
    charts: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20v-7h3v7h-3z"/></svg>',
    streaks: '<svg viewBox="0 0 20 20" width="20" height="20"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.151-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"/></svg>',
    headphones: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 3a8 8 0 00-8 8v6a2.5 2.5 0 002.5 2.5H7a1 1 0 001-1v-5a1 1 0 00-1-1H6v-1.5a6 6 0 1112 0V12h-1a1 1 0 00-1 1v5a1 1 0 001 1h.5A2.5 2.5 0 0020 17v-6a8 8 0 00-8-8z"/></svg>',
    settings: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19.14 12.94a7.14 7.14 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.3 7.3 0 00-1.63-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.13.56-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.66 8.84a.5.5 0 00.12.64l2.03 1.58a7.14 7.14 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.92 3.32c.14.24.4.32.6.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54c.05.25.26.42.5.42h3.84c.24 0 .45-.17.5-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96c.2.1.46.02.6-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"/></svg>',
    themes: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 000 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a5 5 0 005-5c0-4.9-4.5-9-9-9zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>',
    share: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18 16.08a2.9 2.9 0 00-1.94.75L8.91 12.7a3 3 0 000-1.4l7.05-4.11A2.9 2.9 0 0018 7.92 3 3 0 1015 5c0 .24.03.47.09.7L8.04 9.81a3 3 0 100 4.38l7.05 4.11c-.06.23-.09.46-.09.7a3 3 0 103-3z"/></svg>',
    music: '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z"/></svg>',
    cat: '<svg viewBox="0 0 28 29" width="34" height="35" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="8" height="1" fill="currentColor"/><rect x="6" y="1" width="1" height="1" fill="currentColor"/><rect x="3" y="2" width="1" height="1" fill="currentColor"/><rect x="5" y="2" width="1" height="1" fill="currentColor"/><rect x="3" y="3" width="2" height="1" fill="currentColor"/><rect x="3" y="4" width="1" height="1" fill="currentColor"/><rect x="5" y="4" width="1" height="1" fill="currentColor"/><rect x="11" y="4" width="6" height="1" fill="currentColor"/><rect x="2" y="5" width="1" height="1" fill="currentColor"/><rect x="14" y="5" width="2" height="1" fill="currentColor"/><rect x="1" y="6" width="7" height="1" fill="currentColor"/><rect x="14" y="6" width="1" height="1" fill="currentColor"/><rect x="1" y="7" width="7" height="1" fill="currentColor"/><rect x="11" y="7" width="6" height="1" fill="currentColor"/><rect x="11" y="8" width="6" height="1" fill="currentColor"/><rect x="20" y="9" width="1" height="1" fill="currentColor"/><rect x="20" y="10" width="1" height="1" fill="currentColor"/><rect x="19" y="11" width="1" height="1" fill="currentColor"/><rect x="21" y="11" width="1" height="1" fill="currentColor"/><rect x="11" y="12" width="2" height="1" fill="currentColor"/><rect x="18" y="12" width="1" height="1" fill="currentColor"/><rect x="21" y="12" width="1" height="1" fill="currentColor"/><rect x="10" y="13" width="1" height="1" fill="currentColor"/><rect x="12" y="13" width="2" height="1" fill="currentColor"/><rect x="17" y="13" width="1" height="1" fill="currentColor"/><rect x="21" y="13" width="1" height="1" fill="currentColor"/><rect x="9" y="14" width="1" height="1" fill="currentColor"/><rect x="12" y="14" width="6" height="1" fill="currentColor"/><rect x="21" y="14" width="2" height="1" fill="currentColor"/><rect x="6" y="15" width="3" height="1" fill="currentColor"/><rect x="13" y="15" width="4" height="1" fill="currentColor"/><rect x="21" y="15" width="1" height="1" fill="currentColor"/><rect x="23" y="15" width="1" height="1" fill="currentColor"/><rect x="4" y="16" width="2" height="1" fill="currentColor"/><rect x="8" y="16" width="1" height="1" fill="currentColor"/><rect x="14" y="16" width="3" height="1" fill="currentColor"/><rect x="22" y="16" width="1" height="1" fill="currentColor"/><rect x="24" y="16" width="1" height="1" fill="currentColor"/><rect x="3" y="17" width="1" height="1" fill="currentColor"/><rect x="7" y="17" width="1" height="1" fill="currentColor"/><rect x="23" y="17" width="3" height="1" fill="currentColor"/><rect x="2" y="18" width="2" height="1" fill="currentColor"/><rect x="7" y="18" width="1" height="1" fill="currentColor"/><rect x="23" y="18" width="3" height="1" fill="currentColor"/><rect x="2" y="19" width="1" height="1" fill="currentColor"/><rect x="7" y="19" width="1" height="1" fill="currentColor"/><rect x="23" y="19" width="3" height="1" fill="currentColor"/><rect x="1" y="20" width="1" height="1" fill="currentColor"/><rect x="7" y="20" width="1" height="1" fill="currentColor"/><rect x="22" y="20" width="5" height="1" fill="currentColor"/><rect x="0" y="21" width="2" height="1" fill="currentColor"/><rect x="7" y="21" width="2" height="1" fill="currentColor"/><rect x="10" y="21" width="2" height="1" fill="currentColor"/><rect x="20" y="21" width="4" height="1" fill="currentColor"/><rect x="25" y="21" width="2" height="1" fill="currentColor"/><rect x="0" y="22" width="2" height="1" fill="currentColor"/><rect x="8" y="22" width="1" height="1" fill="currentColor"/><rect x="10" y="22" width="5" height="1" fill="currentColor"/><rect x="19" y="22" width="3" height="1" fill="currentColor"/><rect x="23" y="22" width="1" height="1" fill="currentColor"/><rect x="25" y="22" width="2" height="1" fill="currentColor"/><rect x="0" y="23" width="2" height="1" fill="currentColor"/><rect x="8" y="23" width="2" height="1" fill="currentColor"/><rect x="12" y="23" width="4" height="1" fill="currentColor"/><rect x="19" y="23" width="1" height="1" fill="currentColor"/><rect x="23" y="23" width="5" height="1" fill="currentColor"/><rect x="0" y="24" width="2" height="1" fill="currentColor"/><rect x="9" y="24" width="2" height="1" fill="currentColor"/><rect x="16" y="24" width="1" height="1" fill="currentColor"/><rect x="22" y="24" width="1" height="1" fill="currentColor"/><rect x="24" y="24" width="4" height="1" fill="currentColor"/><rect x="0" y="25" width="2" height="1" fill="currentColor"/><rect x="10" y="25" width="2" height="1" fill="currentColor"/><rect x="18" y="25" width="1" height="1" fill="currentColor"/><rect x="20" y="25" width="2" height="1" fill="currentColor"/><rect x="23" y="25" width="2" height="1" fill="currentColor"/><rect x="26" y="25" width="2" height="1" fill="currentColor"/><rect x="1" y="26" width="2" height="1" fill="currentColor"/><rect x="11" y="26" width="9" height="1" fill="currentColor"/><rect x="22" y="26" width="2" height="1" fill="currentColor"/><rect x="26" y="26" width="2" height="1" fill="currentColor"/><rect x="2" y="27" width="7" height="1" fill="currentColor"/><rect x="15" y="27" width="5" height="1" fill="currentColor"/><rect x="22" y="27" width="1" height="1" fill="currentColor"/><rect x="25" y="27" width="3" height="1" fill="currentColor"/><rect x="8" y="28" width="9" height="1" fill="currentColor"/><rect x="19" y="28" width="8" height="1" fill="currentColor"/></svg>',
  };

  let current = null;

  function getNowPlaying() {
    const titleEl = document.querySelector('ytmusic-player-bar .title.ytmusic-player-bar, .content-info-wrapper .title');
    const bylineEl = document.querySelector('ytmusic-player-bar .byline.ytmusic-player-bar, .content-info-wrapper .byline');
    const video = document.querySelector('video');
    const imgEl = document.querySelector('ytmusic-player-bar img.image, .image.ytmusic-player-bar img');
    if (!titleEl || !video || !titleEl.textContent.trim()) return null;

    const title = titleEl.textContent.trim();
    const bylineText = bylineEl ? bylineEl.textContent.trim() : '';
    const parts = bylineText.split('•').map(s => s.trim()).filter(Boolean);
    const artist = parts[0] || 'Unknown Artist';
    const album = parts[1] || '';

    return {
      title, artist, album,
      duration: (video.duration || 0) * 1000,
      currentTime: (video.currentTime || 0) * 1000,
      paused: video.paused,
      art: imgEl ? imgEl.src : ''
    };
  }

  function commitCurrent() {
    if (!current) return;
    const threshold = Math.min(30000, (current.duration / 2) || 30000);
    if (current.accumulatedMs >= threshold) {
      addScrobble({
        title: current.title,
        artist: current.artist,
        album: current.album,
        art: current.art,
        duration: current.duration,
        playedMs: Math.round(current.accumulatedMs),
        timestamp: current.startedAt
      });
    }
    current = null;
  }

  function trackTick() {
    let np;
    try { np = getNowPlaying(); } catch (e) { return; }

    if (hostEl && !document.documentElement.contains(hostEl)) {
      document.body.appendChild(hostEl);
      if (!panelOpen) {  }
    }

    if (!np) return;

    const key = np.title + '::' + np.artist;
    if (!current || current.key !== key) {
      commitCurrent();
      current = { key, title: np.title, artist: np.artist, album: np.album, art: np.art, duration: np.duration, startedAt: Date.now(), accumulatedMs: 0, lastTs: Date.now() };
    }

    const now = Date.now();
    if (!np.paused) {
      current.accumulatedMs += now - current.lastTs;
    }
    current.lastTs = now;
    current.duration = np.duration || current.duration;

    updateLiveNow(np);
  }

  function computeStats(scrobbles) {
    const now = Date.now();
    const weekAgo = now - 7 * 86400000;
    const artistMap = new Map();
    const songMap = new Map();
    const albumMap = new Map();
    const hourBuckets = new Array(24).fill(0);
    const dowBuckets = new Array(7).fill(0);
    const dayTotals = new Map();

    let totalMs = 0;
    let weekMs = 0;

    scrobbles.forEach(s => {
      totalMs += s.playedMs;
      if (s.timestamp >= weekAgo) weekMs += s.playedMs;

      artistMap.set(s.artist, (artistMap.get(s.artist) || 0) + s.playedMs);
      const songKey = s.title + ' — ' + s.artist;
      songMap.set(songKey, (songMap.get(songKey) || 0) + s.playedMs);
      if (s.album) albumMap.set(s.album, (albumMap.get(s.album) || 0) + s.playedMs);

      const d = new Date(s.timestamp);
      hourBuckets[d.getHours()] += s.playedMs;
      dowBuckets[d.getDay()] += s.playedMs;

      const dayKey = d.toISOString().slice(0, 10);
      dayTotals.set(dayKey, (dayTotals.get(dayKey) || 0) + s.playedMs);
    });

    const toSorted = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);

    const last14 = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now - i * 86400000);
      const key = d.toISOString().slice(0, 10);
      last14.push({ label: d.toLocaleDateString(undefined, { weekday: 'short' }), ms: dayTotals.get(key) || 0 });
    }

    return {
      totalTracks: scrobbles.length,
      totalMs, weekMs,
      uniqueArtists: artistMap.size,
      uniqueSongs: songMap.size,
      topArtists: toSorted(artistMap, 8),
      topSongs: toSorted(songMap, 8),
      topAlbums: toSorted(albumMap, 6),
      hourBuckets, dowBuckets,
      last14
    };
  }

  function computeArtistDays(scrobbles) {
    const map = new Map();
    scrobbles.forEach(s => {
      const day = getLocalDateKey(s.timestamp);
      if (!map.has(s.artist)) map.set(s.artist, new Set());
      map.get(s.artist).add(day);
    });
    const result = new Map();
    map.forEach((daySet, artist) => result.set(artist, [...daySet].sort()));
    return result;
  }

  function currentStreakLength(days) {
    if (!days.length) return 0;
    let streak = 1;
    for (let i = days.length - 1; i > 0; i--) {
      const cur = new Date(days[i] + 'T00:00:00');
      const prev = new Date(days[i - 1] + 'T00:00:00');
      const diffDays = Math.round((cur - prev) / 86400000);
      if (diffDays === 1) streak++;
      else break;
    }
    return streak;
  }

  function getArtistLastArt(scrobbles) {
    const map = new Map();
    scrobbles.forEach(s => {
      if (s.art) map.set(s.artist, s.art);
    });
    return map;
  }

  function getArtistStreaks() {
    const artistDays = computeArtistDays(scrobbles);
    const artistArt = getArtistLastArt(scrobbles);
    const today = getLocalDateKey(Date.now());
    const yesterday = getLocalDateKey(Date.now() - 86400000);
    const out = [];
    artistDays.forEach((days, artist) => {
      const streak = currentStreakLength(days);
      const lastDay = days[days.length - 1];
      let status = 'ended';
      if (lastDay === today) status = 'active';
      else if (lastDay === yesterday) status = 'atRisk';
      out.push({ artist, streak, lastDay, status, art: artistArt.get(artist) || '' });
    });
    return out.filter(s => s.streak >= 2 && s.status !== 'ended').sort((a, b) => b.streak - a.streak);
  }

  function checkStreaksAndNotify() {
    const artistDays = computeArtistDays(scrobbles);
    const today = getLocalDateKey(Date.now());
    const yesterday = getLocalDateKey(Date.now() - 86400000);
    let changed = false;

    artistDays.forEach((days, artist) => {
      const lastDay = days[days.length - 1];
      const streak = currentStreakLength(days);
      const st = streakState[artist] || { streakAtLastNotify: 0, lapseWarnedDate: null };

      if (lastDay === today) {
        if (streak >= 2 && st.streakAtLastNotify < 2) {
          notify('info', `🔥 Streak started! You've listened to ${artist} ${streak} days in a row.`);
        }
        st.streakAtLastNotify = streak >= 2 ? streak : 0;
        if (st.lapseWarnedDate !== null) { st.lapseWarnedDate = null; changed = true; }
        changed = true;
      } else if (lastDay === yesterday && streak >= 2) {
        if (st.lapseWarnedDate !== today) {
          notify('info', `⏳ Your ${artist} streak (${streak} days) ends today if you don't listen!`);
          st.lapseWarnedDate = today;
          changed = true;
        }
      } else if (st.streakAtLastNotify !== 0) {
        st.streakAtLastNotify = 0;
        changed = true;
      }
      streakState[artist] = st;
    });

    if (changed) scheduleSave(GM_KEYS.streakState, streakState);
  }

  function themeColor(varName, fallback) {
    if (!panelEl) return fallback;
    const v = getComputedStyle(panelEl).getPropertyValue(`--ytt-${varName}`).trim();
    return v || fallback;
  }

  function makeCanvas(w, h) {
    const c = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    c.width = w * dpr; c.height = h * dpr;
    c.style.width = w + 'px'; c.style.height = h + 'px';
    const ctx = c.getContext('2d');
    ctx.scale(dpr, dpr);
    return { canvas: c, ctx, w, h };
  }

  function truncateForWidth(ctx, text, maxWidth) {
    text = String(text);
    if (ctx.measureText(text).width <= maxWidth) return text;
    let t = text;
    while (t.length > 1 && ctx.measureText(t + '…').width > maxWidth) t = t.slice(0, -1);
    return t + '…';
  }

  function drawBarChart(labels, values, opts) {
    opts = opts || {};
    const maxLabelLen = Math.max(0, ...labels.map(l => String(l).length));
    const shouldRotate = values.length > 6 && maxLabelLen > 2;
    const w = opts.w || 480, h = opts.h || (shouldRotate ? 250 : 220);
    const { canvas, ctx } = makeCanvas(w, h);
    const accent = themeColor('accent', '#8b5cf6');
    const text2 = themeColor('text2', '#999');
    const max = Math.max(1, ...values);
    const padL = 8, padB = shouldRotate ? 56 : 26, padT = 10, padR = 8;
    const barAreaW = w - padL - padR;
    const barAreaH = h - padT - padB;
    const gap = 10;
    const barW = (barAreaW - gap * (values.length - 1)) / Math.max(1, values.length);

    ctx.font = '10px -apple-system, Segoe UI, Roboto, sans-serif';
    values.forEach((v, i) => {
      const barH = (v / max) * barAreaH;
      const x = padL + i * (barW + gap);
      const y = padT + (barAreaH - barH);
      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0, accent);
      grad.addColorStop(1, themeColor('accent2', accent));
      ctx.fillStyle = grad;
      roundRect(ctx, x, y, barW, Math.max(barH, 2), 4);
      ctx.fill();

      ctx.fillStyle = text2;
      const rawLabel = (labels[i] || '').toString();

      if (shouldRotate) {

        const label = truncateForWidth(ctx, rawLabel, barAreaH * 0.9 || 90);
        ctx.save();
        ctx.textAlign = 'right';
        ctx.translate(x + barW / 2, h - padB + 14);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(label, 0, 0);
        ctx.restore();
      } else {
        const label = truncateForWidth(ctx, rawLabel, barW + gap - 2);
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barW / 2, h - padB + 16);
      }
    });
    return canvas;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawDonut(labels, values, opts) {
    opts = opts || {};
    const w = opts.w || 220, h = opts.h || 220;
    const { canvas, ctx } = makeCanvas(w, h);
    const total = values.reduce((a, b) => a + b, 0) || 1;
    const cx = w / 2, cy = h / 2, rOuter = Math.min(w, h) / 2 - 6, rInner = rOuter * 0.6;
    const accent = themeColor('accent', '#8b5cf6');
    const accent2 = themeColor('accent2', '#a78bfa');
    const palette = [accent, accent2, '#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#f87171'];

    let start = -Math.PI / 2;
    values.forEach((v, i) => {
      const angle = (v / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, rOuter, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = palette[i % palette.length];
      ctx.fill();
      start += angle;
    });
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    return canvas;
  }

  function drawLineChart(labels, values, opts) {
    opts = opts || {};
    const w = opts.w || 480, h = opts.h || 180;
    const { canvas, ctx } = makeCanvas(w, h);
    const accent = themeColor('accent', '#8b5cf6');
    const text2 = themeColor('text2', '#999');
    const max = Math.max(1, ...values);
    const padL = 8, padB = 22, padT = 12, padR = 8;
    const areaW = w - padL - padR, areaH = h - padT - padB;
    const stepX = values.length > 1 ? areaW / (values.length - 1) : areaW;

    const grad = ctx.createLinearGradient(0, padT, 0, padT + areaH);
    grad.addColorStop(0, accent + 'aa');
    grad.addColorStop(1, accent + '05');

    ctx.beginPath();
    values.forEach((v, i) => {
      const x = padL + i * stepX;
      const y = padT + areaH - (v / max) * areaH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();

    ctx.lineTo(padL + (values.length - 1) * stepX, padT + areaH);
    ctx.lineTo(padL, padT + areaH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.font = '9px -apple-system, Segoe UI, Roboto, sans-serif';
    ctx.fillStyle = text2;
    ctx.textAlign = 'center';
    labels.forEach((l, i) => {
      if (i % Math.ceil(labels.length / 7) === 0) ctx.fillText(l, padL + i * stepX, h - 6);
    });
    return canvas;
  }

  let hostEl = null, shadowRoot = null, overlayEl = null, panelEl = null, panelOpen = false, activeView = 'home';
  let liveNowCache = null;
  let uiBuilt = false;

  const BASE_CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    #ytt-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0);
      display: flex; align-items: center; justify-content: center;
      z-index: 999999; pointer-events: none; opacity: 0;
      transition: background .25s ease, backdrop-filter .25s ease, opacity .25s ease;
    }
    #ytt-overlay.open { background: rgba(0,0,0,.65); backdrop-filter: blur(3px); pointer-events: auto; opacity: 1; }
    #ytt-panel {
      width: min(90vw, 1100px); aspect-ratio: 16/9; max-height: 86vh;
      display: flex; border-radius: 16px; overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,.5);
      transform: scale(.96); opacity: 0; transition: transform .25s ease, opacity .25s ease;
      color: var(--ytt-text, #eee); font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
      position: relative;
    }
    #ytt-overlay.open #ytt-panel { transform: scale(1); opacity: 1; }

    .ytt-sidebar { width: 180px; flex-shrink: 0; background: rgba(0,0,0,.15); border-right: 1px solid var(--ytt-border,#333); display: flex; flex-direction: column; padding: 16px 10px; gap: 4px; }
    .ytt-brand { display:flex; align-items:center; gap:10px; padding: 8px 10px 22px; color: var(--ytt-text); font-weight: 700; }
    .ytt-brand svg { display:block; color: var(--ytt-accent); flex-shrink: 0; }
    .ytt-brand-text { font-size: 16px; letter-spacing: .3px; }
    .ytt-nav-btn { display:flex; align-items:center; gap:10px; background:none; border:none; color: var(--ytt-text2,#999); padding: 10px 12px; border-radius: 10px; cursor:pointer; font-size: 13px; text-align:left; transition: background .15s, color .15s; }
    .ytt-nav-btn:hover { background: rgba(255,255,255,.06); color: var(--ytt-text,#eee); }
    .ytt-nav-btn.active { background: var(--ytt-accent); color: #fff; }
    .ytt-nav-icon { display:flex; }

    .ytt-main { flex: 1; overflow-y: auto; padding: 22px 26px; background: transparent; }
    .ytt-main::-webkit-scrollbar { width: 8px; }
    .ytt-main::-webkit-scrollbar-thumb { background: var(--ytt-border,#333); border-radius: 4px; }

    .ytt-header { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom: 16px; gap: 10px; }
    .ytt-greeting { font-size: 22px; margin: 0 0 4px; }
    .ytt-subtext { color: var(--ytt-text2,#999); font-size: 12px; }
    .ytt-share-btn { display:flex; align-items:center; gap:6px; background: var(--ytt-accent); color:#fff; border:none; padding: 8px 14px; border-radius: 20px; font-size: 12px; cursor:pointer; white-space:nowrap; }
    .ytt-share-btn:hover { filter: brightness(1.1); }

    .ytt-stat-grid { display:grid; grid-template-columns: repeat(4,1fr); gap: 10px; margin-bottom: 18px; }
    .ytt-stat-card { background: var(--ytt-surface,#1e1e1e); border: 1px solid var(--ytt-border,#333); border-radius: 12px; padding: 12px; }
    .ytt-stat-value { font-size: 18px; font-weight: 700; }
    .ytt-stat-label { font-size: 11px; color: var(--ytt-text2,#999); margin-top: 2px; }

    .ytt-two-col { display:grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .ytt-panel-block { background: var(--ytt-surface,#1e1e1e); border: 1px solid var(--ytt-border,#333); border-radius: 12px; padding: 14px; margin-bottom: 14px; }
    .ytt-panel-block h3 { margin: 0 0 10px; font-size: 13px; color: var(--ytt-text2,#999); text-transform: uppercase; letter-spacing: .5px; }

    .ytt-track-list { display:flex; flex-direction:column; gap: 8px; }
    .ytt-track-row { display:flex; align-items:center; gap: 10px; }
    .ytt-track-rank { width: 18px; color: var(--ytt-accent); font-weight: 700; font-size: 12px; }
    .ytt-track-info { flex:1; min-width:0; }
    .ytt-track-title { font-size: 13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .ytt-track-sub { font-size: 11px; color: var(--ytt-text2,#999); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .ytt-track-ms { font-size: 11px; color: var(--ytt-text2,#999); white-space:nowrap; }

    .ytt-now-playing { display:flex; gap: 12px; align-items:center; background: var(--ytt-surface,#1e1e1e); border: 1px solid var(--ytt-border,#333); border-radius: 12px; padding: 12px; margin-bottom: 18px; }
    .ytt-now-art { width: 48px; height: 48px; border-radius: 8px; overflow:hidden; background: var(--ytt-bg2,#222); flex-shrink:0; }
    .ytt-now-art img { width:100%; height:100%; object-fit: cover; }
    .ytt-now-info { flex:1; min-width:0; }
    .ytt-now-title { font-size: 13px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .ytt-now-artist { font-size: 11px; color: var(--ytt-text2,#999); margin-bottom: 6px; }
    .ytt-now-progress { height: 4px; background: var(--ytt-border,#333); border-radius: 2px; overflow:hidden; }
    .ytt-now-progress-fill { height:100%; width:0%; background: var(--ytt-accent); transition: width .3s linear; }

    .ytt-chart-row { display:grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
    .ytt-chart-block canvas { max-width: 100%; }
    .ytt-canvas-wrap, .ytt-donut-wrap { display:flex; justify-content:center; }

    .ytt-theme-grid { display:grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
    .ytt-theme-card { border-radius: 12px; overflow:hidden; cursor:pointer; border: 2px solid transparent; background: var(--ytt-surface,#1e1e1e); }
    .ytt-theme-card.active { border-color: var(--ytt-accent); }
    .ytt-theme-preview { height: 60px; }
    .ytt-theme-name { padding: 8px 10px; font-size: 12px; }

    .ytt-toggle-group { display:flex; gap: 8px; flex-wrap: wrap; }
    .ytt-toggle-btn { background: var(--ytt-bg2,#222); color: var(--ytt-text2,#999); border: 1px solid var(--ytt-border,#333); padding: 6px 14px; border-radius: 20px; font-size: 12px; cursor:pointer; }
    .ytt-toggle-btn.active { background: var(--ytt-accent); color:#fff; border-color: var(--ytt-accent); }

    .ytt-input { width: 100%; box-sizing: border-box; background: var(--ytt-bg2,#222); border: 1px solid var(--ytt-border,#333); color: var(--ytt-text,#eee); padding: 8px 10px; border-radius: 8px; font-size: 13px; }
    .ytt-hotkey-btn { background: var(--ytt-bg2,#222); border: 1px solid var(--ytt-border,#333); color: var(--ytt-text,#eee); padding: 8px 14px; border-radius: 8px; font-size: 12px; cursor:pointer; }
    .ytt-checkbox-row { display:flex; align-items:center; gap: 8px; font-size: 13px; margin: 6px 0; cursor:pointer; }
    .ytt-btn-row { display:flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
    .ytt-secondary-btn { background: var(--ytt-bg2,#222); border: 1px solid var(--ytt-border,#333); color: var(--ytt-text,#eee); padding: 8px 14px; border-radius: 8px; font-size: 12px; cursor:pointer; }
    .ytt-danger-btn { background: #7f1d1d; border: 1px solid #991b1b; color: #fecaca; padding: 8px 14px; border-radius: 8px; font-size: 12px; cursor:pointer; }

    .ytt-streak-list { display:flex; flex-direction:column; gap: 10px; }
    .ytt-streak-row { display:flex; align-items:center; gap: 12px; background: var(--ytt-surface,#1e1e1e); border: 1px solid var(--ytt-border,#333); border-radius: 12px; padding: 12px 14px; }
    .ytt-streak-fire { font-size: 20px; flex-shrink: 0; }
    .ytt-streak-avatar { width: 36px; height: 36px; border-radius: 50%; overflow: hidden; flex-shrink: 0; background: var(--ytt-bg2,#222); display:flex; align-items:center; justify-content:center; }
    .ytt-streak-avatar img { width: 100%; height: 100%; object-fit: cover; display:block; }
    .ytt-streak-avatar-fallback { font-size: 14px; font-weight: 700; color: var(--ytt-text2,#999); }
    .ytt-streak-info { flex: 1; min-width: 0; }
    .ytt-streak-artist { font-size: 14px; font-weight: 600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .ytt-streak-status { font-size: 11px; margin-top: 2px; }
    .ytt-streak-status.active { color: #34d399; }
    .ytt-streak-status.atRisk { color: #fbbf24; }
    .ytt-streak-days { font-size: 18px; font-weight: 700; color: var(--ytt-accent); white-space: nowrap; }
    .ytt-streak-empty { color: var(--ytt-text2,#999); font-size: 13px; padding: 20px 0; text-align: center; }

    .ytt-cloud-account-row { display:flex; align-items:center; gap: 12px; margin-bottom: 10px; }
    .ytt-cloud-account-info { flex: 1; min-width: 0; }
    .ytt-cloud-username { font-size: 14px; font-weight: 600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .ytt-cloud-pending { font-size: 12px; color: var(--ytt-text2,#999); background: var(--ytt-bg2,#222); border: 1px solid var(--ytt-border,#333); border-radius: 8px; padding: 10px; line-height: 1.4; }
    .ytt-slider-row { display:flex; flex-direction:column; gap: 6px; margin-top: 12px; }
    .ytt-slider { width: 100%; accent-color: var(--ytt-accent, #8b5cf6); }

    .ytt-name-modal-backdrop { position:absolute; inset:0; background: rgba(0,0,0,.6); display:flex; align-items:center; justify-content:center; z-index: 10; border-radius: 16px; }
    .ytt-name-modal { width: 280px; background: var(--ytt-surface,#1e1e1e); border: 1px solid var(--ytt-border,#333); border-radius: 14px; padding: 18px; }
    .ytt-name-modal h3 { margin: 0 0 4px; font-size: 16px; }
    .ytt-name-modal .ytt-input { margin: 10px 0 4px; }

    #ytt-toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999999; display:flex; flex-direction:column; gap: 8px; }
    .ytt-toast { background: #1e1e1e; color: #f2f2f2; border-left: 3px solid #8b5cf6; padding: 10px 14px; border-radius: 8px; font-size: 12px; font-family: -apple-system, sans-serif; box-shadow: 0 8px 24px rgba(0,0,0,.4); max-width: 280px; opacity: 0; transform: translateX(20px); transition: opacity .2s, transform .2s; }
    .ytt-toast.show { opacity: 1; transform: translateX(0); }
    .ytt-toast.error { border-left-color: #ef4444; }
    .ytt-toast.info { border-left-color: #8b5cf6; }
  `;

  function injectPanelCSS(root) {
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(BASE_CSS);
      root.adoptedStyleSheets = [sheet];
    } catch (e) {
      const style = document.createElement('style');
      style.textContent = BASE_CSS;
      root.appendChild(style);
    }
  }

  function buildUI() {

    if (hostEl && hostEl.parentNode) hostEl.parentNode.removeChild(hostEl);

    hostEl = document.createElement('div');
    hostEl.id = 'ytt-host';
    hostEl.style.all = 'initial';
    document.body.appendChild(hostEl);
    shadowRoot = hostEl.attachShadow({ mode: 'open' });

    injectPanelCSS(shadowRoot);

    overlayEl = el('div', { id: 'ytt-overlay' });
    panelEl = el('div', { id: 'ytt-panel' });

    const sidebar = el('div', { class: 'ytt-sidebar' }, [
      el('div', { class: 'ytt-brand' }, [el('span', { html: ICONS.cat }), el('span', { class: 'ytt-brand-text' }, ['tempo'])]),
      navBtn('home', 'Home', ICONS.home),
      navBtn('charts', 'Charts', ICONS.charts),
      navBtn('streaks', 'Streaks', ICONS.streaks),
      navBtn('themes', 'Themes', ICONS.themes),
      navBtn('settings', 'Settings', ICONS.settings)
    ]);

    const main = el('div', { class: 'ytt-main', id: 'ytt-main' });
    panelEl.appendChild(sidebar);
    panelEl.appendChild(main);
    overlayEl.appendChild(panelEl);
    shadowRoot.appendChild(overlayEl);

    overlayEl.addEventListener('click', (e) => { if (e.target === overlayEl) closePanel(); });

    toastContainer = el('div', { id: 'ytt-toast-container' });
    shadowRoot.appendChild(toastContainer);

    applyTheme(settings.themeId, settings.themeScope);
    uiBuilt = true;
  }

  function ensureUI() {
    if (!uiBuilt || !hostEl || !document.documentElement.contains(hostEl)) {
      buildUI();
    }
  }

  function navBtn(id, label, icon) {
    return el('button', { class: 'ytt-nav-btn', 'data-view': id, onclick: () => renderView(id) }, [
      el('span', { class: 'ytt-nav-icon', html: icon }),
      el('span', { class: 'ytt-nav-label' }, [label])
    ]);
  }

  function setActiveNav(id) {
    panelEl.querySelectorAll('.ytt-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === id));
  }

  function renderView(id) {
    ensureUI();
    activeView = id;
    setActiveNav(id);
    const main = panelEl.querySelector('#ytt-main');
    if (!main) return;
    while (main.firstChild) main.removeChild(main.firstChild);
    if (id === 'home') renderHome(main);
    else if (id === 'charts') renderCharts(main);
    else if (id === 'streaks') renderStreaks(main);
    else if (id === 'themes') renderThemes(main);
    else if (id === 'settings') renderSettings(main);
  }

  function refreshCurrentView() { if (panelOpen) renderView(activeView); }

  function openPanel() {
    ensureUI();
    overlayEl.classList.add('open');
    panelOpen = true;
    renderView(activeView);
    maybeShowNamePrompt();
  }
  function closePanel() {
    if (overlayEl) overlayEl.classList.remove('open');
    panelOpen = false;
  }
  function togglePanel() { panelOpen ? closePanel() : openPanel(); }

  function maybeShowNamePrompt() {
    if (settings.userName || settings.suppressNamePrompt) return;
    if (panelEl.querySelector('.ytt-name-modal-backdrop')) return;

    const input = el('input', { class: 'ytt-input', type: 'text', placeholder: 'e.g. barry' });
    const checkbox = el('input', { type: 'checkbox' });

    const backdrop = el('div', { class: 'ytt-name-modal-backdrop' });

    const save = () => {
      const v = input.value.trim();
      if (v) settings.userName = v;
      settings.suppressNamePrompt = checkbox.checked;
      saveSettings();
      backdrop.remove();
      refreshCurrentView();
    };

    const modal = el('div', { class: 'ytt-name-modal' }, [
      el('h3', {}, ['Welcome to Tempo 🐱']),
      el('div', { class: 'ytt-subtext' }, ["What should I call you?"]),
      input,
      el('label', { class: 'ytt-checkbox-row' }, [checkbox, el('span', {}, ["Don't show this again"])]),
      el('div', { class: 'ytt-btn-row' }, [
        el('button', { class: 'ytt-share-btn', onclick: save }, ['Save']),
        el('button', { class: 'ytt-secondary-btn', onclick: () => backdrop.remove() }, ['Skip'])
      ])
    ]);

    backdrop.appendChild(modal);
    panelEl.appendChild(backdrop);
    input.focus();
  }

  function statCard(label, value) {
    return el('div', { class: 'ytt-stat-card' }, [
      el('div', { class: 'ytt-stat-value' }, [value]),
      el('div', { class: 'ytt-stat-label' }, [label])
    ]);
  }

  function trackRow(rank, title, sub, ms) {
    return el('div', { class: 'ytt-track-row' }, [
      el('div', { class: 'ytt-track-rank' }, [String(rank)]),
      el('div', { class: 'ytt-track-info' }, [
        el('div', { class: 'ytt-track-title' }, [title]),
        el('div', { class: 'ytt-track-sub' }, [sub])
      ]),
      el('div', { class: 'ytt-track-ms' }, [fmtDuration(ms)])
    ]);
  }

  function greetingWord() {
    const h = new Date().getHours();
    if (h < 5) return 'Late night';
    if (h < 12) return 'Morning';
    if (h < 17) return 'Afternoon';
    if (h < 21) return 'Evening';
    return 'Night';
  }

  function renderHome(main) {
    const stats = computeStats(scrobbles);
    const name = settings.userName ? settings.userName : 'there';

    const header = el('div', { class: 'ytt-header' }, [
      el('div', {}, [
        el('h1', { class: 'ytt-greeting' }, [`${greetingWord()}, ${name}`]),
        el('div', { class: 'ytt-subtext' }, [`${stats.totalTracks} tracks tracked • ${fmtDuration(stats.totalMs)} total`])
      ]),
      el('button', { class: 'ytt-share-btn', onclick: exportShareImage }, [el('span', { html: ICONS.share }), ' Share Stats'])
    ]);

    const nowPlayingCard = buildNowPlayingCard();

    const statsRow = el('div', { class: 'ytt-stat-grid' }, [
      statCard('This Week', fmtDuration(stats.weekMs)),
      statCard('Unique Artists', String(stats.uniqueArtists)),
      statCard('Unique Songs', String(stats.uniqueSongs)),
      statCard('All-Time', fmtDuration(stats.totalMs))
    ]);

    const topArtistsBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Top Artists']),
      el('div', { class: 'ytt-track-list' }, stats.topArtists.slice(0, 5).map(([name, ms], i) => trackRow(i + 1, name, '', ms)))
    ]);

    const recentBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Recently Played']),
      el('div', { class: 'ytt-track-list' }, scrobbles.slice(-5).reverse().map((s, i) => trackRow(i + 1, s.title, s.artist, s.playedMs)))
    ]);

    const grid = el('div', { class: 'ytt-two-col' }, [topArtistsBlock, recentBlock]);

    main.appendChild(header);
    if (nowPlayingCard) main.appendChild(nowPlayingCard);
    main.appendChild(statsRow);
    main.appendChild(grid);
  }

  function buildNowPlayingCard() {
    if (!current) return null;
    return el('div', { class: 'ytt-now-playing', id: 'ytt-now-playing-card' }, [
      el('div', { class: 'ytt-now-art', id: 'ytt-now-art', html: current.art ? `<img src="${current.art}" />` : '' }),
      el('div', { class: 'ytt-now-info' }, [
        el('div', { class: 'ytt-now-title', id: 'ytt-now-title' }, [current.title]),
        el('div', { class: 'ytt-now-artist', id: 'ytt-now-artist' }, [current.artist]),
        el('div', { class: 'ytt-now-progress' }, [el('div', { class: 'ytt-now-progress-fill', id: 'ytt-now-progress-fill' })])
      ])
    ]);
  }

  function updateLiveNow(np) {
    liveNowCache = np;
    if (!panelOpen || activeView !== 'home' || !current || !shadowRoot) return;
    const titleEl2 = shadowRoot.getElementById('ytt-now-title');
    if (!titleEl2) return;
    titleEl2.textContent = current.title;
    shadowRoot.getElementById('ytt-now-artist').textContent = current.artist;
    const pct = current.duration ? Math.min(100, (current.accumulatedMs / current.duration) * 100) : 0;
    const fill = shadowRoot.getElementById('ytt-now-progress-fill');
    if (fill) fill.style.width = pct + '%';
  }

  function renderCharts(main) {
    const stats = computeStats(scrobbles);

    main.appendChild(el('div', { class: 'ytt-header' }, [
      el('h1', { class: 'ytt-greeting' }, ['Charts']),
      el('button', { class: 'ytt-share-btn', onclick: exportShareImage }, [el('span', { html: ICONS.share }), ' Share Stats'])
    ]));

    const row1 = el('div', { class: 'ytt-chart-row' }, [
      chartBlock('Top Artists (by time)', drawBarChart(stats.topArtists.map(a => a[0]), stats.topArtists.map(a => a[1]))),
      chartBlock('Top Songs (by time)', drawBarChart(stats.topSongs.map(a => a[0].split(' — ')[0]), stats.topSongs.map(a => a[1])))
    ]);

    const row2 = el('div', { class: 'ytt-chart-row' }, [
      chartBlock('Last 14 Days', drawLineChart(stats.last14.map(d => d.label), stats.last14.map(d => d.ms / 60000)), 'minutes / day'),
      chartBlock('By Hour of Day', drawBarChart(stats.hourBuckets.map((_, i) => i), stats.hourBuckets))
    ]);

    const row3 = el('div', { class: 'ytt-chart-row' }, [
      chartBlock('By Day of Week', drawDonut(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], stats.dowBuckets), null, true),
      chartBlock('Top Albums (by time)', drawBarChart(stats.topAlbums.map(a => a[0]), stats.topAlbums.map(a => a[1])))
    ]);

    main.appendChild(row1);
    main.appendChild(row2);
    main.appendChild(row3);
  }

  function chartBlock(title, canvas, sub, isDonut) {
    return el('div', { class: 'ytt-panel-block ytt-chart-block' }, [
      el('h3', {}, [title]),
      sub ? el('div', { class: 'ytt-subtext' }, [sub]) : null,
      el('div', { class: isDonut ? 'ytt-donut-wrap' : 'ytt-canvas-wrap' }, [canvas])
    ]);
  }

  function streakStatusLabel(s) {
    if (s.status === 'active') return 'Last listened today';
    return "Last listened yesterday";
  }

  function streakAvatarFallback(artist) {
    return el('div', { class: 'ytt-streak-avatar-fallback' }, [(artist.trim()[0] || '?').toUpperCase()]);
  }

  function streakAvatar(s) {
    const wrap = el('div', { class: 'ytt-streak-avatar' }, []);
    if (s.art) {
      const img = el('img', {
        src: s.art,
        alt: s.artist,
        onerror: () => {
          img.remove();
          wrap.appendChild(streakAvatarFallback(s.artist));
        }
      });
      wrap.appendChild(img);
    } else {
      wrap.appendChild(streakAvatarFallback(s.artist));
    }
    return wrap;
  }

  function renderStreaks(main) {
    main.appendChild(el('div', { class: 'ytt-header' }, [
      el('div', {}, [
        el('h1', { class: 'ytt-greeting' }, ['Streaks']),
        el('div', { class: 'ytt-subtext' }, ["Keep track of how many times in a row you've been listening to your favorite artists."])
      ])
    ]));

    const streaks = getArtistStreaks();

    if (!streaks.length) {
      main.appendChild(el('div', { class: 'ytt-panel-block' }, [
        el('div', { class: 'ytt-streak-empty' }, ['You have no streaks.'])
      ]));
      return;
    }

    const list = el('div', { class: 'ytt-streak-list' }, streaks.map(s => el('div', { class: 'ytt-streak-row' }, [
      streakAvatar(s),
      el('div', { class: 'ytt-streak-info' }, [
        el('div', { class: 'ytt-streak-artist' }, [s.artist]),
        el('div', { class: `ytt-streak-status ${s.status}` }, [streakStatusLabel(s)])
      ]),
      el('div', { class: 'ytt-streak-days' }, [`${s.streak}d`])
    ])));

    main.appendChild(el('div', { class: 'ytt-panel-block' }, [list]));
  }

  function renderThemes(main) {
    main.appendChild(el('div', { class: 'ytt-header' }, [el('h1', { class: 'ytt-greeting' }, ['Themes'])]));

    const scopeRow = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Apply theme to']),
      el('div', { class: 'ytt-toggle-group' }, [
        toggleBtn('Panel', settings.themeScope === 'panel', () => setThemeScope('panel')),
        toggleBtn('Entire App', settings.themeScope === 'app', () => setThemeScope('app')),
        toggleBtn('Both', settings.themeScope === 'both', () => setThemeScope('both'))
      ]),
      settings.themeScope !== 'panel' ? el('div', { class: 'ytt-subtext', style: { marginTop: '8px' } }, ['Hooking a custom theme into YouTube Music is not officially supported and may not reach every element.']) : null
    ]);

    const grid = el('div', { class: 'ytt-theme-grid' }, Object.entries(THEMES).map(([id, t]) => {
      return el('div', { class: 'ytt-theme-card' + (settings.themeId === id ? ' active' : ''), onclick: () => selectTheme(id) }, [
        el('div', { class: 'ytt-theme-preview', style: { background: t.preview } }),
        el('div', { class: 'ytt-theme-name' }, [t.name])
      ]);
    }));

    main.appendChild(scopeRow);
    main.appendChild(grid);
  }

  function toggleBtn(label, active, onclick) {
    return el('button', { class: 'ytt-toggle-btn' + (active ? ' active' : ''), onclick }, [label]);
  }

  function setThemeScope(scope) {
    settings.themeScope = scope;
    saveSettings();
    applyTheme(settings.themeId, settings.themeScope);
    refreshCurrentView();
    const label = scope === 'app' ? 'Entire App' : scope === 'both' ? 'Panel + Entire App' : 'Panel';
    notify('info', `Theme scope set to ${label}.`);
  }

  function selectTheme(id) {
    settings.themeId = id;
    saveSettings();
    applyTheme(settings.themeId, settings.themeScope);
    refreshCurrentView();
    notify('info', `Theme changed to ${THEMES[id].name}.`);
  }

  function renderCloudBlock() {
    const block = el('div', { class: 'ytt-panel-block' }, [el('h3', {}, ['Cloud Sync'])]);

    if (!isCloudConnected()) {
      const tokenInput = el('input', { class: 'ytt-input', type: 'text', placeholder: 'Paste your AIRSTUDIOS Cloud token', style: { display: 'none', marginTop: '10px' } });
      const saveBtn = el('button', { class: 'ytt-share-btn' }, ['Save Token']);
      saveBtn.style.display = 'none';

      const connectBtn = el('button', { class: 'ytt-secondary-btn' }, ['Connect Account']);
      connectBtn.addEventListener('click', () => {
        window.open(CLOUD_AUTHORIZE_URL, '_blank', 'noopener');
        tokenInput.style.display = 'block';
        saveBtn.style.display = 'inline-block';
        tokenInput.focus();
      });

      saveBtn.addEventListener('click', async () => {
        const val = tokenInput.value.trim();
        if (!val) return;
        const original = saveBtn.textContent;
        saveBtn.textContent = 'Connecting…';
        saveBtn.disabled = true;
        await verifyAndConnect(val);
        saveBtn.disabled = false;
        saveBtn.textContent = original;
      });

      block.appendChild(el('div', { class: 'ytt-subtext' }, ['No account']));
      block.appendChild(el('div', { class: 'ytt-btn-row' }, [connectBtn]));
      block.appendChild(tokenInput);
      block.appendChild(el('div', { class: 'ytt-btn-row' }, [saveBtn]));
      return block;
    }

    const avatar = el('div', { class: 'ytt-streak-avatar' }, [
      cloud.avatarUrl
        ? el('img', { src: cloud.avatarUrl, alt: cloud.username })
        : el('div', { class: 'ytt-streak-avatar-fallback' }, [(cloud.username.trim()[0] || '?').toUpperCase()])
    ]);
    const info = el('div', { class: 'ytt-cloud-account-info' }, [
      el('div', { class: 'ytt-cloud-username' }, [cloud.username || 'Connected']),
      el('div', { class: 'ytt-subtext', id: 'ytt-cloud-last-sync' }, [`Last saved: ${timeAgo(cloud.lastSyncAt)} • Last loaded: ${timeAgo(cloud.lastLoadAt)}`])
    ]);
    block.appendChild(el('div', { class: 'ytt-cloud-account-row' }, [avatar, info]));

    if (cloud.pendingDisconnect) {
      block.appendChild(el('div', { class: 'ytt-cloud-pending' }, [
        'Waiting for you to remove Tempo access on the AIRSTUDIOS Cloud page. Go to the tab that opened, remove access there, and this will update automatically once removal is detected.'
      ]));
      block.appendChild(el('div', { class: 'ytt-btn-row' }, [
        el('button', { class: 'ytt-secondary-btn', onclick: () => { window.open(CLOUD_DISCONNECT_URL, '_blank', 'noopener'); } }, ['Open AIRSTUDIOS Cloud']),
        el('button', { class: 'ytt-secondary-btn', onclick: checkDisconnectStatus }, ['Check Now']),
        el('button', { class: 'ytt-danger-btn', onclick: cancelDisconnect }, ['Cancel'])
      ]));
      return block;
    }

    block.appendChild(el('div', { class: 'ytt-btn-row' }, [
      el('button', { class: 'ytt-secondary-btn', onclick: () => cloudSyncPush(false) }, ['Save']),
      el('button', { class: 'ytt-secondary-btn', onclick: cloudLoad }, ['Load']),
      el('button', { class: 'ytt-danger-btn', onclick: initiateDisconnect }, ['Disconnect'])
    ]));

    const sliderLabel = el('div', { class: 'ytt-subtext' }, [autoSaveLabel(settings.autoSaveMinutes)]);
    const slider = el('input', { class: 'ytt-slider', type: 'range', min: '0', max: '60', step: '5', value: String(settings.autoSaveMinutes) });
    slider.addEventListener('input', (e) => { sliderLabel.textContent = autoSaveLabel(parseInt(e.target.value, 10)); });
    slider.addEventListener('change', (e) => {
      const v = parseInt(e.target.value, 10);
      settings.autoSaveMinutes = v;
      saveSettings();
      setupAutoSaveTimer();
      notify('info', v === 0 ? 'Auto save turned off.' : `Auto save set to every ${v} minutes.`);
    });
    block.appendChild(el('div', { class: 'ytt-slider-row' }, [
      el('div', { class: 'ytt-subtext' }, ['Auto Save']),
      slider,
      sliderLabel
    ]));

    return block;
  }

  function renderSettings(main) {
    main.appendChild(el('div', { class: 'ytt-header' }, [el('h1', { class: 'ytt-greeting' }, ['Settings'])]));

    const nameBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Your Name']),
      el('input', { class: 'ytt-input', type: 'text', value: settings.userName, placeholder: 'e.g. barry', oninput: (e) => { settings.userName = e.target.value; saveSettings(); } }),
      checkboxRow("Don't ask for my name when opening the panel", settings.suppressNamePrompt, (v) => { settings.suppressNamePrompt = v; saveSettings(); })
    ]);

    const cloudBlock = renderCloudBlock();

    const hotkeyBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Panel Hotkey']),
      (() => {
        const btn = el('button', { class: 'ytt-hotkey-btn' }, [keyLabel(settings.hotkey)]);
        btn.addEventListener('click', () => {
          btn.textContent = 'Press a key…';
          const handler = (e) => {
            e.preventDefault(); e.stopPropagation();
            settings.hotkey = e.code;
            saveSettings();
            btn.textContent = keyLabel(e.code);
            document.removeEventListener('keydown', handler, true);
            notify('info', `Hotkey set to ${keyLabel(e.code)}.`);
          };
          document.addEventListener('keydown', handler, true);
        });
        return btn;
      })()
    ]);

    const notifBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Notifications']),
      checkboxRow('Show error notifications', settings.notifyErrors, (v) => { settings.notifyErrors = v; saveSettings(); }),
      checkboxRow('Show event notifications (theme changes, streaks, etc.)', settings.notifyEvents, (v) => { settings.notifyEvents = v; saveSettings(); })
    ]);

    const dataBlock = el('div', { class: 'ytt-panel-block' }, [
      el('h3', {}, ['Data']),
      el('div', { class: 'ytt-subtext' }, [`${scrobbles.length} tracked plays stored locally.`]),
      el('div', { class: 'ytt-btn-row' }, [
        el('button', { class: 'ytt-secondary-btn', onclick: exportData }, ['Export JSON']),
        (() => {
          const input = el('input', { type: 'file', accept: 'application/json', style: 'display:none' });
          input.addEventListener('change', importData);
          const btn = el('button', { class: 'ytt-secondary-btn', onclick: () => input.click() }, ['Import JSON']);
          return el('span', {}, [btn, input]);
        })(),
        el('button', { class: 'ytt-danger-btn', onclick: clearData }, ['Clear All Data'])
      ])
    ]);

    main.appendChild(nameBlock);
    main.appendChild(cloudBlock);
    main.appendChild(hotkeyBlock);
    main.appendChild(notifBlock);
    main.appendChild(dataBlock);
  }

  function checkboxRow(label, checked, onchange) {
    const input = el('input', { type: 'checkbox' });
    input.checked = checked;
    input.addEventListener('change', (e) => onchange(e.target.checked));
    return el('label', { class: 'ytt-checkbox-row' }, [input, el('span', {}, [label])]);
  }

  function exportData() {
    try {
      const data = JSON.stringify({ scrobbles, streakState, settings }, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = el('a', { href: url, download: `tempo-export-${Date.now()}.json` });
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
      notify('info', 'Exported data as JSON.');
    } catch (e) {
      notify('error', 'Export failed: ' + e.message);
    }
  }

  function importData(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (Array.isArray(parsed.scrobbles)) { scrobbles = parsed.scrobbles; scheduleSave(GM_KEYS.scrobbles, scrobbles); }
        if (parsed.streakState) { streakState = parsed.streakState; scheduleSave(GM_KEYS.streakState, streakState); }
        if (parsed.settings) { settings = Object.assign({}, DEFAULT_SETTINGS, parsed.settings); scheduleSave(GM_KEYS.settings, settings); applyTheme(settings.themeId, settings.themeScope); }
        notify('info', 'Import complete.');
        refreshCurrentView();
      } catch (err) {
        notify('error', 'Import failed: invalid file.');
      }
    };
    reader.readAsText(file);
  }

  function clearData() {
    if (!confirm('This will permanently delete all tracked listening data. Continue?')) return;
    scrobbles = [];
    streakState = {};
    scheduleSave(GM_KEYS.scrobbles, scrobbles);
    scheduleSave(GM_KEYS.streakState, streakState);
    notify('info', 'All tracked data cleared.');
    refreshCurrentView();
  }

  function truncateText(ctx, text, maxWidth) {
    if (ctx.measureText(text).width <= maxWidth) return text;
    let t = text;
    while (t.length > 1 && ctx.measureText(t + '…').width > maxWidth) t = t.slice(0, -1);
    return t + '…';
  }

  function exportShareImage() {
    try {
      const stats = computeStats(scrobbles);
      const theme = THEMES[settings.themeId] || THEMES.moondark;
      const w = 1080, h = 1350;
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, theme.vars.bg2);
      bg.addColorStop(1, theme.vars.bg);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      if (theme.stars) {
        for (let i = 0; i < 220; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * w, Math.random() * h * 0.6, Math.random() * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.7 + 0.2})`;
          ctx.fill();
        }
      }

      ctx.fillStyle = theme.vars.accent;
      ctx.font = '700 26px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText('TEMPO', 60, 90);

      ctx.fillStyle = theme.vars.text;
      ctx.font = '700 52px -apple-system, Segoe UI, Roboto, sans-serif';
      const name = settings.userName || 'Listener';
      ctx.fillText(`${name}'s Stats`, 60, 160);

      ctx.font = '400 20px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillStyle = theme.vars.text2;
      ctx.fillText(new Date().toLocaleDateString(), 60, 195);

      ctx.fillStyle = theme.vars.surface;
      roundRect(ctx, 60, 240, w - 120, 140, 20);
      ctx.fill();
      ctx.fillStyle = theme.vars.accent;
      ctx.font = '700 46px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText(fmtDuration(stats.totalMs), 90, 310);
      ctx.fillStyle = theme.vars.text2;
      ctx.font = '400 18px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText(`Total time listened • ${stats.totalTracks} tracks • ${stats.uniqueArtists} artists`, 90, 345);

      let y = 430;
      ctx.fillStyle = theme.vars.text;
      ctx.font = '700 24px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText('Top Artists', 60, y);
      y += 20;
      stats.topArtists.slice(0, 5).forEach(([artistName, ms], i) => {
        y += 52;
        ctx.fillStyle = theme.vars.accent;
        ctx.font = '700 24px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.fillText(String(i + 1), 60, y);
        ctx.fillStyle = theme.vars.text;
        ctx.font = '600 24px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.fillText(truncateText(ctx, artistName, w - 260), 100, y);
        ctx.fillStyle = theme.vars.text2;
        ctx.font = '400 18px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(fmtDuration(ms), w - 60, y);
        ctx.textAlign = 'left';
      });

      y += 70;
      ctx.fillStyle = theme.vars.text;
      ctx.font = '700 24px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText('Top Songs', 60, y);
      y += 20;
      stats.topSongs.slice(0, 5).forEach(([songKey, ms], i) => {
        y += 52;
        const [songTitle] = songKey.split(' — ');
        ctx.fillStyle = theme.vars.accent;
        ctx.font = '700 24px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.fillText(String(i + 1), 60, y);
        ctx.fillStyle = theme.vars.text;
        ctx.font = '600 24px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.fillText(truncateText(ctx, songTitle, w - 260), 100, y);
        ctx.fillStyle = theme.vars.text2;
        ctx.font = '400 18px -apple-system, Segoe UI, Roboto, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(fmtDuration(ms), w - 60, y);
        ctx.textAlign = 'left';
      });

      ctx.fillStyle = theme.vars.text2;
      ctx.font = '400 16px -apple-system, Segoe UI, Roboto, sans-serif';
      ctx.fillText('YouTube Music Stas via tempo ♫ - AIRSTUDIOS Corporation', 60, h - 40);

      const url = canvas.toDataURL('image/png');
      const a = el('a', { href: url, download: `tempo-stats-${Date.now()}.png` });
      document.body.appendChild(a); a.click(); a.remove();
      notify('info', 'Stats image saved!');
    } catch (e) {
      console.error(e);
      notify('error', 'Could not generate the share image.');
    }
  }

  let toastContainer = null;
  function notify(type, message) {
    if (type === 'error' && !settings.notifyErrors) return;
    if (type === 'info' && !settings.notifyEvents) return;
    ensureUI();
    const toast = el('div', { class: `ytt-toast ${type}` }, [message]);
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  }

  function getRealActiveElement() {
    let node = document.activeElement;
    while (node && node.shadowRoot && node.shadowRoot.activeElement) {
      node = node.shadowRoot.activeElement;
    }
    return node;
  }

  function onKeydown(e) {
    if (e.code !== settings.hotkey) return;
    const active = getRealActiveElement();
    const activeTag = active && active.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
    e.preventDefault();
    togglePanel();
  }

  const STREAK_CHECK_INTERVAL_MS = 10 * 60 * 1000;

  function init() {
    document.addEventListener('keydown', onKeydown);
    setInterval(trackTick, 1000);
    setInterval(checkStreaksAndNotify, STREAK_CHECK_INTERVAL_MS);
    setInterval(() => {
      if (!panelOpen || activeView !== 'settings' || !shadowRoot) return;
      const lastSyncEl = shadowRoot.getElementById('ytt-cloud-last-sync');
      if (lastSyncEl) lastSyncEl.textContent = `Last saved: ${timeAgo(cloud.lastSyncAt)} • Last loaded: ${timeAgo(cloud.lastLoadAt)}`;
    }, 5000);
    window.addEventListener('beforeunload', () => { commitCurrent(); flushAllSaves(); });

    if (typeof GM_registerMenuCommand === 'function') {
      GM_registerMenuCommand('Open Tempo panel', togglePanel);
    }

    ensureUI();
    if (settings.themeScope !== 'panel') applyAppReskin(THEMES[settings.themeId] || THEMES.moondark);
    checkStreaksAndNotify();
    setupAutoSaveTimer();
    if (isCloudConnected() && cloud.pendingDisconnect) startDisconnectPoll();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 1200);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(init, 1200));
  }
})();
