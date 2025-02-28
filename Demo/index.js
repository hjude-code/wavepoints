import * as wp from '../wavepoints.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';
const gui = new GUI();
const waveParameters = {
    addWave: ()=>{addWave()},
    waves:[],
    fakeNum:10
};
gui.add( waveParameters, 'addWave' ).onChange(()=>{wp.drawSVG(drawSVGParams_iso)});  // Checkbox

// create SVG element
function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
}
let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
svg.setAttribute('id', 'svgWave')
document.body.appendChild(svg)

// create empty multiwave
let multiwave = new wp.compoundWave()

function addWave(){
    let waveIndex = multiwave.waves.length
    multiwave.addWave(new wp.wave({resolution:100}))
    
    const newWaveParameters = {
        frequency: 3,
        amplitude: 10
    }

    let folder = gui.addFolder(`wave ${waveIndex}`)
    folder.add( newWaveParameters, 'frequency').onChange(()=>{multiwave.upateChildWave(waveIndex, newWaveParameters)})
    folder.add( newWaveParameters, 'amplitude').onChange(()=>{multiwave.upateChildWave(waveIndex, newWaveParameters)})
}
addWave()
// multiwave.upateChildWave(0, {frequency:3})

let waveResolution = 300
let waveLength = 300
let muffleArr = [
    {start:0, end:0.95, amount:0, taper:[0.1, 0.1]},
]


// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:10, frequency:3}))
// multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:15, frequency:10}))
// multiwave.mufflePoints(muffleArr)
// multiwave.muffleWavePoints(0, muffleArr)



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







