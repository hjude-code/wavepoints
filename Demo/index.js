import { wave, compoundWave } from '../wavepoints.js';

function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }


let svg = createSVGElement('svg')
svg.setAttribute('viewBox', '0 0 400 400')
document.body.appendChild(svg)

let waveResolution = 100
let waveLength = 300


let multiwave = new compoundWave()
multiwave.addWave(new wave({resolution:waveResolution, length:waveLength, amplitude:10, frequency:5}))
multiwave.addWave(new wave({resolution:waveResolution, length:waveLength, amplitude:10, frequency:2}))
multiwave.addWave(new wave({resolution:waveResolution, length:waveLength, amplitude:5, frequency:4}))

function drawCircles(){

    svg.innerHTML = ''
    let points = multiwave.generateCircularWavePoints({cX:200, cY:200})

    for(let i = 0; i < multiwave.resolution; i++){
    
        let circle = createSVGElement('circle')
        circle.setAttribute('r', 3)
        circle.setAttribute('cx', points[i][0])
        circle.setAttribute('cy', points[i][1])
        svg.appendChild(circle) 
    }
}
drawCircles()

window.addEventListener('keypress', (e)=>{
    if(e.key === 'a'){
        multiwave.shiftWavePhase(0, 0.05)
    }
    if(e.key === 's'){
        multiwave.shiftWavePhase(0, -0.05)
    }
    
    drawCircles()
})


