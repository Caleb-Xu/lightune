import { InjectKey } from '@constant/index'
import { ipcRenderer } from 'electron'
import { contextBridge } from 'electron'
import * as musicApi from 'NeteaseCloudMusicApi'
// import { electronAPI } from '@electron-toolkit/preload'

// contextBridge.exposeInMainWorld('electron', electronAPI)
// 注入网易云api
const api = {}
for (const key in musicApi) {
    if (typeof musicApi[key] === 'function') {
        api[key] = (...args: unknown[]) => ipcRenderer.invoke(key, ...args)
    }
}

contextBridge.exposeInMainWorld(InjectKey.MusicApi, api)
