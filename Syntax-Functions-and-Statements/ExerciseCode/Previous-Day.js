function previousDay(y, m, d){
    if(d == 1){
        m -= 1
        d = 30
    }else {
        d -= 1
    }
    if(m == 1){
        y -= 1
    }
    return `${y}-${m}-${d}`
}


console.log(previousDay(2016,9,30))