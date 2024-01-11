import { WindowConfig } from 'browser/types'

export const window: WindowConfig['window'] = () => ({
  alwaysOnTop: true,
  frame: false,
  resizable: false,
  roundedCorners: false,
  show: false,
  skipTaskbar: true,
  title: 'Playback Window',
})
