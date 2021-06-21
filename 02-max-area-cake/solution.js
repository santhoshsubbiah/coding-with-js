

var vCuts = [3];

var hCuts = [3];

var max = hCuts[0];

var height = 5, width = 4;

if (vCuts.length === 1) {
    vCuts = [1, vCuts[0], width];
}

if (hCuts.length === 1) {
    hCuts = [1, hCuts[0], height];
}

var vDiff = Math.max.apply(null, vCuts) - Math.min.apply(null, vCuts);

for (var i = 1; i < hCuts.length; i++) {
    let adjDiff = hCuts[i] - hCuts[i - 1];
    if (max < adjDiff) {
        max = adjDiff;
    }
}

console.log(max * vDiff);