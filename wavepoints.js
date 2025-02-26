const radians = (angle) => {return angle * (Math.PI/180) }
function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

export function generateWaveHeight(percent, amplitude, frequency){

    let angle = percent/100 * 360

    return Math.floor(Math.cos(radians(angle)*frequency) * amplitude)
}

export class wave{
    constructor({resolution=10, length=100, amplitude=10, frequency=3}={}){
        this.resolution = resolution
        this.length = length
        this.amplitude = amplitude
        this.frequency = frequency
        this.points = this.generateBaseWave({resolution, length, amplitude, frequency})
    }

    generateBaseWave({resolution=10, length=100, amplitude=10, frequency=3}={}){
        let x = 0;
        let step = length/resolution
        let points = {
            x: [],
            y: []
        };
        for(let i = 0; i < resolution; i++){
            let percent = x/length * 100
            let y = generateWaveHeight(percent, amplitude, frequency)
            points.x.push(x)
            points.y.push(y)
            x+=step
        }
        return points
    }

    shiftPhase(shiftBy=0.1){ //shiftby percent of the wave length
        
        let stepCount = Math.abs(this.resolution*shiftBy)

        if(shiftBy > 0){

            for(let i = 0; i < stepCount; i++){
                let lastPoint = this.points.y.pop()
                this.points.y.unshift(lastPoint)
            }

        }
        if(shiftBy < 0){
            for(let i = 0; i < stepCount; i++){
                let firstPoint = this.points.y.shift()
                this.points.y.push(firstPoint)
            }
        }
    }

}

export class compoundWave{
    constructor(){
        this.waves = []
        this.points = null
        this.resolution = null
        this.length = null
    }

    addWave(wave){

        if(!wave){
            throw new Error('wave is required')
        }

        if(this.points != null && this.length != null && this.resolution != null){
            if(wave.resolution !== this.resolution){
                throw new Error(`wave resolution must equal ${this.resolution}. new wave resolution is ${wave.resolution}`)
            }
            if(wave.length !== this.length){
                throw new Error('wave length must be the same as compoundWave length')
            }
            this.waves.push(wave)
            this.mergeWaves()
        }
        else{
            this.createWave(wave)
        }
    }

    createWave(wave){
        this.resolution = wave.resolution
        this.length = wave.length
        this.points = {
            x: wave.points.x.map(point => point),
            y: wave.points.y.map(point => point)
        };
        this.waves.push(wave)
    }

    mergeWaves(){

        let newYPoints = []


        this.waves.forEach((wave, i)=>{

            // console.log(`newYPoints value before`, newYPoints)
            // console.log(`pulling wave ${i}`, wave.points.y, wave.points.y.length)
            
            let addedPoints = wave.points.y.map((point, i)=>{
                return point + (newYPoints[i] ? newYPoints[i] : 0)
            })

            newYPoints = addedPoints

            // console.log(`new points from merge`, addedPoints)
        })

        this.points.y = []
        this.points.y = newYPoints

    }

    shiftWavePhase(waveIndex, shiftBy){
        if(waveIndex >= this.waves.length){
            throw new Error('wave index out of bounds')
        }
        this.waves[waveIndex].shiftPhase(shiftBy)
        this.mergeWaves()

    }

    generateCircularWavePoints({cX=0, cY=0, radius=100}={}){
        
        let points = []
        let angle = 0;
        let step = 360/this.resolution

        for (let i = 0; i < this.resolution; i++){

            let ofstRadius = radius + this.points.y[i]

            let x = (Math.sin(radians(angle)) * ofstRadius) + cX
            let y = (Math.cos(radians(angle)) * ofstRadius) + cY

            points.push([x,y])
            angle += step
        }

        return points


    }

    drawSVG({
        form='circle',
        type='path',
        containerID,
    }={}){

        let container = document.querySelector(containerID)

        if(form === 'circle'){

            let points = this.generateCircularWavePoints()

            if(type === 'path'){
                let path = ''
            }

            if(type === 'instances'){
                for(let i = 0; i < this.resolution; i++){
                    let instance = createSVGElement('circle')
                    instance.setAttribute('r', 3)
                    instance.setAttribute('cX', points[i][0])
                    instance.setAttribute('cy', points[i][2])
                    
                    container.appendChild(instance)

                }
            }

        }

    }

}

