import tailwindCss from './tailwind.output.css?raw'
import { css } from '../../utils/css'

export function Tailwind() {
  return (
    <style>{css`
      ${tailwindCss}
    `}</style>
  )
}
