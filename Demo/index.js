import * as wp from '../wavepoints.js';
// import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';

// // create SVG element
// function createSVGElement(tag) {
//     return document.createElementNS('http://www.w3.org/2000/svg', tag)
// }
// let svg = createSVGElement('svg')
// svg.setAttribute('viewBox', '0 0 400 400')
// svg.setAttribute('id', 'waveBox')
// svg.style.setProperty('height', '100%')
// svg.style.setProperty('max-height', '95vh')
// svg.style.setProperty('position', 'absolute')
// svg.style.setProperty('left', '50%')
// svg.style.setProperty('top', '50%')
// svg.style.setProperty('transform', 'translate(-50%, -50%)')

// document.body.appendChild(svg)

// const gui = new GUI();


const newCompoundWave = new wp.compoundWave()

const wavePath = new wp.wavePath()

console.log(wavePath)







// let multiwave = new wp.compoundWave()





// let waveResolution = 300
// let waveLength = 300

// const wave1Parameters = {
//     frequency:3,
//     amplitude:30,
//     phase:0,
//     span:{
//         start:0,
//         end:1,
//         taper:[0,0]
//     }
// }
// let wave1Folder = gui.addFolder(`wave 1`)
// wave1Folder.add(wave1Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
// wave1Folder.add(wave1Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
// wave1Folder.add(wave1Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(0, wave1Parameters.phase)})
// wave1Folder.add(wave1Parameters.span, 'start', 0, 1).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
// wave1Folder.add(wave1Parameters.span, 'end', 0, 1).onChange(()=>{updateMultiwaveWaves(0, wave1Parameters)})
// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, span:wave1Parameters.span, amplitude:wave1Parameters.amplitude, frequency:wave1Parameters.frequency}))


// const wave2Parameters = {
//     frequency:3,
//     amplitude:0,
//     phase:0,
//     span:{
//         start:0,
//         end:1,
//         taper:[0,0]
//     }
//   }
// let wave2Folder = gui.addFolder(`wave 2`)
// wave2Folder.add(wave2Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
// wave2Folder.add(wave2Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
// wave2Folder.add(wave2Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(1, wave2Parameters.phase)})
// wave2Folder.add(wave2Parameters.span, 'start', 0, 1).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
// wave2Folder.add(wave2Parameters.span, 'end', 0, 1).onChange(()=>{updateMultiwaveWaves(1, wave2Parameters)})
// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:wave2Parameters.amplitude, frequency:wave2Parameters.frequency}))

// const wave3Parameters = {
//     frequency:3,
//     amplitude:0,
//     phase:0,
//     span:{
//         start:0,
//         end:1,
//         taper:[0,0]
//     }
//   }
// let wave3Folder = gui.addFolder(`wave 2`)
// wave3Folder.add(wave3Parameters, 'frequency', 0, 20).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
// wave3Folder.add(wave3Parameters, 'amplitude', 0, 200).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
// wave3Folder.add(wave3Parameters, 'phase', 0, 1).onChange(()=>{updateMultiwaveWavesPhase(2, wave3Parameters.phase)})
// wave3Folder.add(wave3Parameters.span, 'start', 0, 1).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
// wave3Folder.add(wave3Parameters.span, 'end', 0, 1).onChange(()=>{updateMultiwaveWaves(2, wave3Parameters)})
// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:wave3Parameters.amplitude, frequency:wave3Parameters.frequency}))

// let drawSVGParams = {
//     wave:multiwave,
//     containerID: '#waveBox',
//     type: 'path',
//     position: {cx: 200, cy: 200},
//     attributes:{
//         stroke:'black',
//         fill:'#ffffff',
//         'stroke-width':2
//     },
//     instances:{
//         tag:'circle',
//         attributes:{
//             r:3
//         }
//     }
// }
// let compoundWaveFolder = gui.addFolder(`Compound Wave`)
// compoundWaveFolder.add(drawSVGParams.position, 'cx', 0, 400).onChange(()=>{drawMultiwave()})
// compoundWaveFolder.add(drawSVGParams.position, 'cy', 0, 400).onChange(()=>{drawMultiwave()})
// compoundWaveFolder.add(drawSVGParams, 'type', ['instances', 'path']).onChange(()=>{drawMultiwave()})
// compoundWaveFolder.add(drawSVGParams.attributes, 'stroke-width', 0, 10).onChange(()=>{drawMultiwave()})
// compoundWaveFolder.addColor(drawSVGParams.attributes, 'fill').onChange(()=>{drawMultiwave()})
// compoundWaveFolder.add(drawSVGParams.instances.attributes, 'r', 0.5, 4).onChange(()=>{drawMultiwave()})


// function updateMultiwaveWaves(index, newVals){
//         multiwave.updateChildWave(index, newVals)
//         drawMultiwave()
// }

// function updateMultiwaveWavesPhase(index, newPhase){
//     multiwave.shiftWavePhase(index, newPhase)
//     drawMultiwave()
// }

// function drawMultiwave(){
//     wp.drawSVG(drawSVGParams)
// }

// drawMultiwave()






