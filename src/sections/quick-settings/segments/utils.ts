import type { ButtonProps } from 'types/widgets/button'

import allConfig from 'src/config'
const step = allConfig.bar.quickSettings.volume.step

export const newVolume = (current: number, raise: boolean) =>
  raise
    ? Math.round(Math.min(1, current + step) / step) * step
    : Math.round(Math.max(0, current - step) / step) * step

export const buttonProps: ButtonProps = {
  css: `
		`,
}
