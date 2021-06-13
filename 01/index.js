// interger array
var originalArray = [2, 2, 3, 4, 5, 3, 3];
// object for frequency
var freqCollection = [];
// array without duplicate
var arrayWithoutDuplicate = originalArray.filter(function (item, index) { return originalArray.indexOf(item) === index; });
// calculate frequency of value
var count = 0;
for (var _i = 0, arrayWithoutDuplicate_1 = arrayWithoutDuplicate; _i < arrayWithoutDuplicate_1.length; _i++) {
    var value = arrayWithoutDuplicate_1[_i];
    for (var i = 0; i < originalArray.length; i++) {
        if (value === originalArray[i]) {
            count++;
        }
    }
    freqCollection.push({ number: value, count: count });
    count = 0;
}
var luckyIntergerCollection = freqCollection.filter(function (item, index) { return item.number === item.count; });
if (luckyIntergerCollection.length) {
    console.log("Lucky interger is = " + luckyIntergerCollection.sort(function (a, b) { return (b.count - a.count); })[0].number);
}
else {
    console.log("-1");
}
