import { KeyValue } from './keyboard'
import { tileToAsciiMap } from './words'

// export const normalize = (value: KeyValue | string | undefined) =>
//   value === '🀄' ? `${value}\uFE0E` : value

export const normalize = (value: KeyValue | string | undefined) =>
  value !== undefined ? tileToAsciiMap[value] : value
