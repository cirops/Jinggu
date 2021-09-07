import { drawMap, drawPlayer } from './draw'
import { GameMap } from './GameMap'
import { inputsSetup } from './input'
import { Player } from './Player'
import { loadSprites } from './sprites'
import { loadMap } from './map'

export const WINDOW_WIDTH = 42 * 32
export const WINDOW_HEIGHT = 24 * 32

export let canvas = document.createElement('canvas')
export let context: any
export let player: Player
export let gameMap: GameMap
export let spriteLibrary: any

const setup = async () => {
  canvas.width = WINDOW_WIDTH
  canvas.height = WINDOW_HEIGHT
  context = canvas.getContext('2d')
  document.body.insertBefore(canvas, document.body.childNodes[0])

  spriteLibrary = await loadSprites()

  player = new Player(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2)
  gameMap = new GameMap(loadMap())

  inputsSetup()
}

const loop = async () => {
  drawMap()
  drawPlayer()

  // if (player.traveling) {
  //   player.travel()
  // }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

let FRAME = 100

const theLoop = async () => {
  loop()

  await sleep(FRAME)
  window.requestAnimationFrame(theLoop)
}

;(async () => {
  await setup()

  theLoop()
  window.requestAnimationFrame(theLoop)
})()
