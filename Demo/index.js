import * as wp from '../wavepoints.js';

function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }


let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
svg.setAttribute('id', 'svgWave')
document.body.appendChild(svg)

let waveResolution = 350
let waveLength = 300


let multiwave = new wp.compoundWave()
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:50, frequency:5}))
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:30, frequency:2}))
multiwave.addWave(new wp.wave({resolution:waveResolution, length:waveLength, amplitude:15, frequency:10}))

let drawSVGParams = {
    containerID: '#svgWave',
    type: 'instances',
    position: {cx: 200, cy: 200},
}
let drawSVGParams_iso = {
    wave:multiwave,
    containerID: '#svgWave',
    type: 'instances',
    position: {cx: 200, cy: 200},
}

wp.drawSVG(drawSVGParams_iso)

// function drawCircles(){

//     svg.innerHTML = ''
//     let points = multiwave.generateCircularWavePoints({cX:200, cY:200})

//     for(let i = 0; i < multiwave.resolution; i++){
    
//         let circle = createSVGElement('circle')
//         circle.setAttribute('r', 3)
//         circle.setAttribute('cx', points[i][0])
//         circle.setAttribute('cy', points[i][1])
//         svg.appendChild(circle) 
//     }
// }
// drawCircles()

window.addEventListener('keypress', (e)=>{
    if(e.key === 'a'){
        multiwave.shiftWavePhase(0, 0.05)
    }
    if(e.key === 's'){
        multiwave.shiftWavePhase(0, -0.05)
    }
    
    wp.drawSVG(drawSVGParams_iso)
})


