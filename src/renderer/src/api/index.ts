// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { InjectKey } from '@constant/index'

const musicApi = window[InjectKey.MusicApi]

for (const key in musicApi) {
    if (typeof musicApi[key] === 'function') {
        const fn = musicApi[key]
        musicApi[key] = (...args: unknown[]) => {
            const promise = fn(...args)
            // TODO: 拦截器相关开发
            return promise
        }
    }
}
