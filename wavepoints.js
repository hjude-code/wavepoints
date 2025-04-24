const radians = (angle) => {return angle * (Math.PI/180) }
function createSVGElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

function lerp(start, end, t) {
return (1 - t) * start + t * end;
}

export function taper({
    range = [0, 100],
    taper = [0.25, 0.25],
    outMin = 0,
    outMax = 1,
    input = 50
}={}){

    let length = range[1] - range[0]
    let startTaper = range[0] + (taper[0] * length)
    let endTaper
    if(taper[1]){
        endTaper = range[1] - (taper[1] * length)
    }else{
        endTaper = range[1] - (taper[0] * length)
    }

    let taperAmount
    if(input < startTaper){
        taperAmount = (input-range[0]) / (startTaper-range[0])
        return lerp(outMax, outMin, taperAmount)
    }
    if(input > endTaper){
        taperAmount = (input-endTaper) / (range[1]-endTaper)
        return lerp(outMin, outMax, taperAmount)
    }
    return outMin
    


}




export function generateWaveHeight(percent, amplitude, frequency){

    let angle = percent/100 * 360
    let waveHeightValue = Math.sin(radians(angle)*frequency) * amplitude
    return Number(waveHeightValue.toFixed(3))
}

export const primitive = {}

primitive.wave = (frequency = 1, amplitude = 1, phase = 0) =>{

    const values = {
        frequency, amplitude, phase
    }

    return {
        get frequency(){
            return values.frequency
        },
        set frequency(newFrequency){
            if(newFrequency){
                typeof newFrequency == "number" ? values.frequency = newFrequency : console.warn('frequency not updated. must be number value')
            }else{
                console.warn('Frequency not updated. No value provided')
            }
        },

        get amplitude(){
            return values.amplitude
        },
        set amplitude(newAmplitude){
            if(newAmplitude){
                typeof newAmplitude == "number" ? values.amplitude = newAmplitude : console.warn('amplitude not updated. must be number value')
            }else{
                console.warn('Amplitude not updated. No value provided')
            }
        },

        get phase(){
            return values.phase
        },
        set phase(newPhase){
            if(newPhase){
                typeof newPhase == "number" ? values.phase = newPhase : console.warn('phase not updated. must be number value')
            }else{
                console.warn('Phase not updated. No value provided')
            }
        },
        shiftPhase(offset = 0.1){
            typeof offset == "number" ? this.phase += offset : console.warn('shiftPhase() requires number value')
        },
        get values(){
            return values
        }
    }

}

// export class wave{
//     constructor({
//         resolution=10,
//         length=100,
//         amplitude=10,
//         frequency=3,
//         span={
//             start:0,
//             end:1,
//             taper:[0, 0]
//         },
//         phase = 0.5
//     }={}){
//         this.resolution = resolution,
//         this.length = length,
//         this.amplitude = amplitude,
//         this.frequency = frequency,
//         this.phase = phase,
//         this.span = span,
//         this.points,
//         this.init()
//     }

//     init(){
//         this.points = this.generateWave()
//         this.setPhase({oldPhase:0})
//     }

//     generateWave({resolution=this.resolution, length=this.length, amplitude=this.amplitude, frequency=this.frequency, phase=this.phase}={}){
//         this.points = {}
//         let x = 0;
//         let step = length/resolution

//         let startWave = resolution*this.span.start
//         let endWave = resolution*this.span.end
//         let waveLength = endWave-startWave
//         let points = {
//             x: [],
//             y: []
//         };

//         for(let i = 0; i < resolution; i++){
           

//             let y = 0
//             if(i >= startWave && i <= endWave){
//                 let percent = Math.abs(startWave-i) /waveLength * 100
//                 let yMax = generateWaveHeight(percent, amplitude, frequency)

//                 y = taper({
//                     range: [startWave, endWave],
//                     taper: this.span.taper,
//                     outMin: yMax,
//                     outMax: 0,
//                     input: i
//                 })
//             }

//             points.x.push(x)
//             points.y.push(y)
//             x+=step
            
//         }

//         return points
//     }

//     updateWave({resolution=this.resolution, length=this.length, span=this.span, amplitude=this.amplitude, frequency=this.frequency}={}){
        
//         if(resolution != this.resolution){
//             this.resolution = resolution
//         }
//         if(length != this.length){
//             this.length = length
//         }
//         if(amplitude != this.amplitude){
//             this.amplitude = amplitude
//         }
//         if(frequency != this.frequency){
//             this.frequency = Math.floor(frequency)
//         }
//         if(span != this.span){
//             this.span = span
//         }

//         let newPoints = this.generateWave()

//         this.points = newPoints
//         this.setPhase({oldPhase:0})
//     }

//     setPhase({oldPhase=this.phase, newPhase=this.phase}={}){

//         let phaseOfst = newPhase - oldPhase;
//         let stepCount = Math.abs(this.resolution*phaseOfst)


//         if(phaseOfst > 0){
//             for(let i = 0; i < stepCount; i++){
//                 let lastPoint = this.points.y.pop()
//                 this.points.y.unshift(lastPoint)
//             }

//         }
//         if(phaseOfst < 0){
//             for(let i = 0; i < stepCount; i++){
//                 let firstPoint = this.points.y.shift()
//                 this.points.y.push(firstPoint)
//             }
//         }

//         this.phase = newPhase
//     }


// }

export class compoundWave{
    constructor(){
        this.waves = []
        let phase = 0
    }

    get phase(){
        return phase
    }

    addWave(frequency=1, amplitude=1, phase=0){
        this.waves.push( primitive.wave(frequency, amplitude, phase) )
    }

}

export class wavePath{
    constructor(path){
        this.path = path,
        this.wave = new compoundWave()
    }
    

}


export function generateCircularWavePoints({wave, cx=0, cy=0, radius=100}={}){
        
    let points = []
    let angle = 0;
    let step = 360/wave.resolution

    for (let i = 0; i < wave.resolution; i++){

        let ofstRadius = radius + wave.points.y[i]

        let x = (Math.sin(radians(angle)) * ofstRadius) + cx
        x = Number(x.toFixed(1))
        let y = (Math.cos(radians(angle)) * ofstRadius) + cy
        y = Number(y.toFixed(1))

        points.push([x,y])
        angle += step
    }

    return points


}

function setSVGAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

export function drawSVG({
    wave,
    form='circle',
    type='path',
    instances={
        tag:'circle',
        attributes:{
            r:3,
        }
    },
    attributes={
        fill:'none',
        stroke:'black',
        'stroke-width':1
    },
    position={
        cx:0, cy:0
    },
    containerID,
}={}){

    let container

    if(containerID){
        container = document.querySelector(containerID)
        container.innerHTML = ''
    }else{
        throw new Error('containerID is required')
    }

    let points
    if(form === 'circle'){
        points = generateCircularWavePoints({wave:wave, cx:position.cx, cy:position.cy})
    }

        if(type === 'path'){
            let path = createSVGElement('path')
            setSVGAttributes(path, attributes)
            let d = ''

            points.forEach((point, i)=>{
                if(i === 0){
                    d += `M ${point[0]} ${point[1]} `
                }else{
                    d += `L ${point[0]} ${point[1]} `
                }
                
            })
            d += 'Z'

            path.setAttribute('d', d)
            container.appendChild(path)

            
        }

        if(type === 'instances'){
            for(let i = 0; i < wave.resolution; i++){
                let instance = createSVGElement(instances.tag)
                setSVGAttributes(instance, attributes)
                setSVGAttributes(instance, instances.attributes)
                instance.setAttribute('cx', points[i][0])
                instance.setAttribute('cy', points[i][1])
                
                container.appendChild(instance)
            }
        }

    

}

export function mufflePoints(wave, newMuffle){

    if(newMuffle){
        wave.muffle = newMuffle
    }
    let newPoints = wave.points.y.map(point => point)
    wave.muffle.forEach((muffle)=>{
        let startMuffle = muffle.start * wave.resolution
        let endMuffle = muffle.end * wave.resolution
        let muffleLength = endMuffle - startMuffle

        let startTaper = startMuffle + (muffle.taper[0] * muffleLength)
        let endTaper
        if(muffle.taper[1]){
            endTaper = endMuffle - (muffle.taper[1] * muffleLength)
        }else{
            endTaper = endMuffle - (muffle.taper[0] * muffleLength)
        }


        
        for(let i = startMuffle; i < endMuffle; i++){

            let taperMuffle = taper({
                range: [startMuffle, endMuffle],
                taper: muffle.taper,
                outMin: muffle.amount,
                outMax: 1, 
                input: i
            })

            newPoints[i] = wave.points.y[i] * taperMuffle
        }
    })
    return newPoints
}


