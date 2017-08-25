// Copyright (C) 2016-2017 MISTEMS Ltd.
const { wom } = require('maxwhere')

module.exports = [
  wom.create('mesh', {
    url: 'ball.mesh',
    position: {x: 0, y: 0, z: -200},
    scale: 5,
    autophysical: true
  }),
  wom.create('light', {
    position: {x: 0, y: 300, z: -200}
  })
]
