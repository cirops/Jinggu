import { spriteLibrary } from './sprites'
import { Tile } from './Tile'

const spriteMap = [
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1204],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 2933],
    [43, 2934],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 2935],
    [43, 2936],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1548],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
  ],
  [
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1575],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1049],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1595],
    [43, 1596],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1597],
    [43, 1598],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43, 1203],
    [339, 79],
    [339, 85],
    [339, 85],
    [339, 85],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [339, 79],
    [339, 85],
    [339, 85],
    [339, 85],
    [339, 85],
    [339, 85],
    [339, 85],
    [339, 85],
    [339, 80],
    [339],
    [339],
    [339],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [339, 86],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
  ],
  [
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [43],
    [339, 86],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
    [339],
  ],
]

let map: any = []

for (let lineI = 0; lineI < 24; lineI += 1) {
  const line = []

  for (let columnI = 0; columnI < 42; columnI += 1) {
    let currentSprite = spriteMap[lineI][columnI]

    let tile = new Tile(
      lineI,
      columnI,
      currentSprite.map((spr: number) => spriteLibrary[spr]),
    )

    line.push(tile)
  }

  map.push(line)
}

export const gameMap = { tiles: map }
