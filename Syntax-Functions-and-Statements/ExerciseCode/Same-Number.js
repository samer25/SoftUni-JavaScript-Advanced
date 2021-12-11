function sameNumber(num) {
    let sum = 0;
    let same = true;
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
        if (num[i] != num[i + 1] && num[i + 1] != undefined)  {
            same = false;
        }

    }
    return `${same}\n${sum}`;

}

console.log(sameNumber(1234));