import { KeyValue } from './keyboard'

// export const normalize = (value: KeyValue | string | undefined) =>
//   value === '🀄' ? `${value}\uFE0E` : value

const tileToAsciiMap: { [id: string]: string } = {
  '🀇': '1m',
  '🀈': '2m',
  '🀉': '3m',
  '🀊': '4m',
  '🀋': '5m',
  '🀌': '6m',
  '🀍': '7m',
  '🀎': '8m',
  '🀏': '9m',
  '🀙': 'p1',
  '🀚': 'p2',
  '🀛': 'p3',
  '🀜': '4p',
  '🀝': '5p',
  '🀞': '6p',
  '🀟': '7p',
  '🀠': '8p',
  '🀡': '9p',
  '🀐': '1s',
  '🀑': '2s',
  '🀒': '3s',
  '🀓': '4s',
  '🀔': '5s',
  '🀕': '6s',
  '🀖': '7s',
  '🀗': '8s',
  '🀘': '9s',
  '🀀': '1z',
  '🀁': '2z',
  '🀂': '3z',
  '🀃': '4z',
  '🀆': '5z',
  '🀅': '6z',
  '🀄': '7z',
}
export const normalize = (value: KeyValue | string | undefined) =>
  value !== undefined ? tileToAsciiMap[value] : value
