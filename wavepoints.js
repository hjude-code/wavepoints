const radians = (angle) => {return angle * (Math.PI/180) }

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


}

