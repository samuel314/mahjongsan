import { encryptData, decryptData } from './utils'
const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  const encryptedSolution = encryptData(
    gameState.solution,
    process.env.REACT_APP_SALT!
  )
  gameState.solution = encryptedSolution
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  const gameState = state ? (JSON.parse(state) as StoredGameState) : null
  if (gameState === null) return gameState

  const decryptedSolution = decryptData(
    gameState.solution,
    process.env.REACT_APP_SALT!
  )
  gameState.solution = decryptedSolution
  return gameState
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}
