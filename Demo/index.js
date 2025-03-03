import * as wp from '../wavepoints.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';

// create SVG element
function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
}
let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
svg.setAttribute('id', 'waveBox')
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



// const gui = new GUI();
// const waveParameters = {
//     addWave: ()=>{addWave()},
//     waves:[],
//     fakeNum:10
// };
// gui.add( waveParameters, 'addWave' ).onChange(()=>{wp.drawSVG(drawSVGParams_iso)});  // Checkbox



// // create empty multiwave
// let multiwave = new wp.compoundWave()

// function addWave(){
//     let waveIndex = multiwave.waves.length
//     multiwave.addWave(new wp.wave({resolution:100}))
    
//     let newWaveParameters = {
//         frequency: 3,
//         amplitude: 10
//     }

//     let folder = gui.addFolder(`wave ${waveIndex}`)
//     folder.add( newWaveParameters, 'frequency').onChange(()=>{multiwave.upateChildWave(waveIndex, newWaveParameters)})
//     folder.add( newWaveParameters, 'amplitude').onChange(()=>{multiwave.upateChildWave(waveIndex, newWaveParameters)})
// }
// addWave()
// // multiwave.upateChildWave(0, {frequency:3})

// let waveResolution = 300
// let waveLength = 300
// let muffleArr = [
//     {start:0, end:0.95, amount:0, taper:[0.1, 0.1]},
// ]


// // multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:10, frequency:3}))
// // multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:15, frequency:10}))
// // multiwave.mufflePoints(muffleArr)
// // multiwave.muffleWavePoints(0, muffleArr)



// let drawSVGParams = {
//     containerID: '#svgWave',
//     type: 'instances',
//     position: {cx: 200, cy: 200},
// }
// let drawSVGParams_iso = {
//     wave:multiwave,
//     containerID: '#svgWave',
//     type: 'path',
//     position: {cx: 200, cy: 200},
// }


// wp.drawSVG(drawSVGParams_iso)

// window.addEventListener('keypress', (e)=>{
//     if(e.key === 'a'){
//         multiwave.shiftWavePhase(0, 0.01)
//     }
//     if(e.key === 's'){
//         multiwave.shiftWavePhase(0, -0.01)
//     }
    
//     wp.drawSVG(drawSVGParams_iso)
// })







