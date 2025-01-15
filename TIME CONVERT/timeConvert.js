function timeConvert(minutes){

    let hours= Math.trunc(minutes/60);
    let min=minutes%60;

    if(hours<10){
        hours = "0"+hours;
    }
    if(min<10){
        min = "0"+min;
    }
   

    return `${hours}:${min}`


}

module.exports = timeConvert;

console.log(timeConvert('1000'));
console.log(timeConvert('59'));
console.log(timeConvert('61'));
console.log(timeConvert('1440'));
console.log(timeConvert('0'));
console.log(timeConvert('34303'));