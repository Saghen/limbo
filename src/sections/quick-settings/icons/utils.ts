import type { ButtonProps } from 'types/widgets/button'

import config from 'src/config'

const step = config.quickSettings.icons.volume.step

export const newVolume = (current: number, raise: boolean) =>
  raise
    ? Math.round(Math.min(1, current + step) / step) * step
    : Math.round(Math.max(0, current - step) / step) * step

export const buttonProps: ButtonProps = {
  cursor: 'pointer',
  css: `
			margin: 0;
			padding: 0;
		`,
}