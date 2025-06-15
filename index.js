let numOrStr = prompt('input number or string');
console.log(numOrStr)

/*
if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}
*/
const validValue = numOrStr?.trim();

switch (validValue) {
    case undefined:
        console.log('ви скасували');
    break;
    case '':
        console.log('Empty String');
    break;
    default:
        console.log('OK!');
    break;

}