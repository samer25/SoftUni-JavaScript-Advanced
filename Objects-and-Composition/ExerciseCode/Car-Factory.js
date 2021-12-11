function carFactory(obj){
    let newObj = {}
    newObj.model = obj.model
    if(obj.power <= 100) {
        newObj.engine = { power: 90, volume: 1800}
    }else if(obj.power > 100 && obj.power <= 160){
        newObj.engine = { power: 120, volume: 2400}
    }else {
        newObj.engine = { power: 200, volume: 3500}
    }
    newObj.carriage = {type: obj.carriage, color: obj.color}
    if(obj.wheelsize % 2 === 0){
        let wheels = obj.wheelsize - 1
        newObj.wheels = [wheels, wheels, wheels, wheels]
    }else {
        newObj.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
    }
    return newObj
}

console.log(carFactory(
    { model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 }
));