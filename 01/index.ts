// interger array
var originalArray: number[] = [2, 2, 3, 4, 5, 3, 3];

// object for frequency
var freqCollection: { number: number, count: number }[] = []

// array without duplicate
var arrayWithoutDuplicate = originalArray.filter((item, index) => originalArray.indexOf(item) === index);

// calculate frequency of value
var count: number = 0;
for (let value of arrayWithoutDuplicate) {
    for (let i: number = 0; i < originalArray.length; i++) {
        if (value === originalArray[i]) {
            count++;
        }
    }
    freqCollection.push({ number: value, count: count });
    count = 0;
}

var luckyIntergerCollection: { number: number, count: number }[] = freqCollection.filter((item, index) => item.number === item.count);

if (luckyIntergerCollection.length) {
    console.log(`Lucky interger is = ${luckyIntergerCollection.sort((a, b) => (b.count - a.count))[0].number}`);
} else {
    console.log("-1");
}
