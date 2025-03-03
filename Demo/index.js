import * as wp from '../wavepoints.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';

// create SVG element
function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
}
let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
svg.setAttribute('id', 'waveBox')
svg.style.setProperty('height', '100%')
svg.style.setProperty('max-height', '95vh')
svg.style.setProperty('position', 'absolute')
svg.style.setProperty('left', '50%')
svg.style.setProperty('top', '50%')
svg.style.setProperty('transform', 'translate(-50%, -50%)')

document.body.appendChild(svg)

const gui = new GUI();









let multiwave = new wp.compoundWave()





let waveResolution = 300
let waveLength = 300

const wave1Parameters = {
    frequency:3,
    amplitude:30,
    phase:0
}
let wave1Folder = gui.addFolder(`wave 1`)
wave1Folder.add(wave1Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
wave1Folder.add(wave1Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
wave1Folder.add(wave1Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(0, wave1Parameters.phase)})
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:wave1Parameters.amplitude, frequency:wave1Parameters.frequency}))


const wave2Parameters = {
    frequency:3,
    amplitude:10,
    phase:0
  }
let wave2Folder = gui.addFolder(`wave 2`)
wave2Folder.add(wave2Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
wave2Folder.add(wave2Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
wave2Folder.add(wave2Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(1, wave2Parameters.phase)})
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:wave2Parameters.amplitude, frequency:wave2Parameters.frequency}))

const wave3Parameters = {
    frequency:3,
    amplitude:10,
    phase:0
  }
let wave3Folder = gui.addFolder(`wave 2`)
wave3Folder.add(wave3Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
wave3Folder.add(wave3Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
wave3Folder.add(wave3Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(2, wave3Parameters.phase)})
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:wave3Parameters.amplitude, frequency:wave3Parameters.frequency}))

let drawSVGParams_iso = {
    wave:multiwave,
    containerID: '#waveBox',
    type: 'path',
    position: {cx: 200, cy: 200},
}

// wp.drawSVG(drawSVGParams_iso)

function updateMultiwaveWaves(index, newVals){
        multiwave.updateChildWave(index, newVals)
        drawMultiwave()
}

function updateMultiwaveWavesPhase(index, newPhase){
    multiwave.shiftWavePhase(index, newPhase)
    drawMultiwave()
}

function drawMultiwave(){
    wp.drawSVG(drawSVGParams_iso)
}

drawMultiwave()






