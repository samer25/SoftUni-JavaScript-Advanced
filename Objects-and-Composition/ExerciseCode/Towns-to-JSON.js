function townsToJSON(arr) {
    let splited = []
    let result = []
    for (let i = 0; i<arr.length; i++){
        splited.push(arr[i].split(/^[|]\s|\s[|]/gm))
        splited[i].shift()
        splited[i].pop()
    }
    splited.shift()
    splited.forEach(rows => {
        let [town, lat, long] = rows
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)
        result.push({Town:town,Latitude: parseFloat(lat), Longitude: parseFloat(long)})
    })

    console.log(JSON.stringify(result))

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])