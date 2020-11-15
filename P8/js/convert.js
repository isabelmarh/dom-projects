function binaryToDecimal(binary){
    let result = 0;
    let binArr = binary.split('');
    for (let i = 0; i < binArr.length; i++){
        result += Number(binArr[i]) * 2 ** (binArr.length -i -1);
    }
    return result;
}

function decimalToBinary(num){
    let binary = '';
    let number = num;
    while (number > 0){
        if (number% 2 === 0){
            binary = "0" + binary
        } else {
            binary = "1" + binary
        }
        number = Math.floor(number / 2);
    }
    return binary;
}