import { wave, compoundWave } from '../wavepoints.js';

function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }


let svg = createSVGElement('svg')
document.body.appendChild(svg)


let multiwave = new compoundWave()
multiwave.addWave(new wave({resolution:10, length:300, amplitude:2, frequency:5}))
multiwave.addWave(new wave({resolution:10, length:300, amplitude:3, frequency:1}))


function drawCircles(){

    svg.innerHTML = '';

    for(let i = 0; i < multiwave.resolution; i++){
        // console.log(testWave.points.y[i]);
    
        let circle = createSVGElement('circle')
        circle.setAttribute('r', 3)
        circle.setAttribute('cx', multiwave.mergePoints.x[i])
        circle.setAttribute('cy', multiwave.mergePoints.y[i] + 50)
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


