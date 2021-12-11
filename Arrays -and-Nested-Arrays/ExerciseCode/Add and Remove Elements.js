function addAndRemoveElements(arrCommands){
    let arrOutput = []
    for(let i = 1; i<=arrCommands.length; i++){
        if (arrCommands[i-1] === 'add'){
            arrOutput.push(i)
        }else{
            arrOutput.pop()
        }
    }
    if(arrOutput.length > 0) {
        return arrOutput.join('\n');
    }else{
        return 'Empty'
    }

}

console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'remove',
    'remove']))