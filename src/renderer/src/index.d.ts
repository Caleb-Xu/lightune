import * as musicApi from 'NeteaseCloudMusicApi'
import { InjectKey } from '@constant/index'
// import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    declare type MusicApi = typeof musicApi
    interface Window {
        /** 只有函数部分被注入了 */
        [InjectKey.MusicApi]: MusicApi
    }
}
