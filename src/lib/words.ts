import GraphemeSplitter from 'grapheme-splitter'
import Riichi from 'riichi'
import { HANDS } from '../constants/hands'
import { Tile, Hand } from 'hk-mahjong'

const graphemeSplitter = new GraphemeSplitter()

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
  '🀙': '1p',
  '🀚': '2p',
  '🀛': '3p',
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
  '🀄': '5z',
  '🀅': '6z',
  '🀆': '7z',
}

const tileToUnicodeMap: { [id: string]: string } = {
  '1m': '🀇',
  '2m': '🀈',
  '3m': '🀉',
  '4m': '🀊',
  '5m': '🀋',
  '6m': '🀌',
  '7m': '🀍',
  '8m': '🀎',
  '9m': '🀏',
  '1p': '🀙',
  '2p': '🀚',
  '3p': '🀛',
  '4p': '🀜',
  '5p': '🀝',
  '6p': '🀞',
  '7p': '🀟',
  '8p': '🀠',
  '9p': '🀡',
  '1s': '🀐',
  '2s': '🀑',
  '3s': '🀒',
  '4s': '🀓',
  '5s': '🀔',
  '6s': '🀕',
  '7s': '🀖',
  '8s': '🀗',
  '9s': '🀘',
  '1z': '🀀',
  '2z': '🀁',
  '3z': '🀂',
  '4z': '🀃',
  '5z': '🀄',
  '6z': '🀅',
  '7z': '🀆',
}

export const convertHandToAscii = (hand: string) => {
  var tiles = graphemeSplitter.splitGraphemes(hand)
  var lastTile = tiles.pop()
  if (lastTile !== undefined) {
    return (
      tiles.map((tile: string) => tileToAsciiMap[tile]).join('') +
      `${isTsumo ? '' : '+'}${tileToAsciiMap[lastTile]}+${wind}`
    )
  }
  return ''
}

export const convertHandToUnicode = (hand: string) => {
  const tiles = hand.slice(0, 26).match(/.{1,2}/g)
  const lastTile: string =
    hand[26] !== '+' ? hand.slice(26, 28) : hand.slice(27, 29)
  if (tiles !== null) {
    return (
      tiles.map((tile: string) => tileToUnicodeMap[tile]).join('') +
      tileToUnicodeMap[lastTile]
    )
  }
  return ''
}

export const isInvalidHand = (word: string) => {
  const tiles = graphemeSplitter.splitGraphemes(word)
  const counts: { [id: string]: number } = {}
  const t = []
  for (const tile of tiles) {
    t.push(new Tile(tile))
    counts[tile] = counts[tile] ? counts[tile] + 1 : 1
  }
  const hand = new Hand({ tiles: t, melds: [] })
  console.log(hand.isWinningHand())

  for (const tile in counts) {
    if (Object.prototype.hasOwnProperty.call(counts, tile)) {
      if (counts[tile] > 4) {
        return false
      }
    }
  }
  // if (!hand.isWinningHand()) return false
  return true
}

export const isWordInWordList = (word: string) => {
  const riichiCalc = new Riichi(convertHandToAscii(word)).calc()
  return riichiCalc.isAgari && Object.keys(riichiCalc.yaku).length > 0
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // February 2, 2022 Game Epoch
  const epochMs = new Date('February 2, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  const hand = HANDS[index % HANDS.length]

  return {
    solution: convertHandToUnicode(hand),
    wind: parseInt(hand.slice(-2)),
    isTsumo: hand[26] !== '+',
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, wind, isTsumo, solutionIndex, tomorrow } =
  getWordOfDay()
export { tileToAsciiMap }
