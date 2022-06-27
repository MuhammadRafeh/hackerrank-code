function adjustingFloat(ratio){
    let remainingLength = Math.abs(8 - ratio.toString().length);
    if (remainingLength == 0){
        return ratio.toString();
    }
    let dupRatio = ratio.toString();
    if (!dupRatio.includes('.')){
        dupRatio += '.';
        remainingLength -= 1;
    }
    for (let i = 0; i< remainingLength; i++){
        dupRatio += '0';
    }
    
    return dupRatio
}

function plusMinus(arr) {
    // Write your code here
    const totalLength = arr.length;
    let negativeStack = 0;
    let positiveStack = 0;
    let numberOfZeros = 0;
    
    arr.forEach(number => {
        if (number < 0){
            negativeStack += 1;
        } else if (number > 0){
            positiveStack += 1;         
        } else { // number = 0
            numberOfZeros += 1;
        }
    })
    let positiveRatio = +(positiveStack / totalLength).toFixed(6);
    let negativeRatio = +(negativeStack / totalLength).toFixed(6);
    let zeroRatio =+(numberOfZeros / totalLength).toFixed(6);
    console.log(adjustingFloat(positiveRatio))
    console.log(adjustingFloat(negativeRatio))
    console.log(adjustingFloat(zeroRatio))
}

const arr = [1, 1, 4,63,26,3];

plusMinus(arr)
