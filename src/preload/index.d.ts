import * as musicApi from 'NeteaseCloudMusicApi'
// import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        /** 只有函数部分被注入了 */
        musicApi: typeof musicApi
    }
}
