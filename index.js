let numOrStr = prompt('input number or string');
console.log(numOrStr)

/* second code
switch (numOrStr?.trim() && isNaN(+numOrStr)) {
    case undefined:
        console.log('ви скасували');
    break;
    case '':
        console.log('Empty String');
    break;
    case true:
        console.log(' number is Ba_NaN');
    break;
    default:
        console.log('OK!');
    break;
}
*/

switch (true){
    case numOrStr === null:
       console.log('ви скасували');
    break;
    case numOrStr.trim() === '':
        console.log('Empty String');
    break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
    break;
    default:
        console.log('OK!');
    break;
}


