import * as wp from '../wavepoints.js';

import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';
const gui = new GUI();
gui.add( document, 'title' );

function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
svg.setAttribute('id', 'svgWave')
document.body.appendChild(svg)

let waveResolution = 300
let waveLength = 300
let muffleArr = [
    {start:0, end:0.95, amount:0, taper:[0.1, 0.1]},
]


let multiwave = new wp.compoundWave()
multiwave.addWave(new wp.wave({resolution:waveResolution, span:{start:0, end:1, taper:[0]}, length:waveLength, amplitude:20, frequency:8}))
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:10, frequency:3}))
// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:15, frequency:10}))
// multiwave.mufflePoints(muffleArr)
multiwave.muffleWavePoints(0, muffleArr)



let drawSVGParams = {
    containerID: '#svgWave',
    type: 'instances',
    position: {cx: 200, cy: 200},
}
let drawSVGParams_iso = {
    wave:multiwave,
    containerID: '#svgWave',
    type: 'path',
    position: {cx: 200, cy: 200},
}


wp.drawSVG(drawSVGParams_iso)

window.addEventListener('keypress', (e)=>{
    if(e.key === 'a'){
        multiwave.shiftWavePhase(0, 0.01)
    }
    if(e.key === 's'){
        multiwave.shiftWavePhase(0, -0.01)
    }
    
    wp.drawSVG(drawSVGParams_iso)
})


