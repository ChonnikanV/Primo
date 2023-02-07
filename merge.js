function merge(collection_1, collection_2) {
    var sz = collection_1.length + collection_2.length;
    var mergeTwo = [sz];
    var i = 0, j = 0, c = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            mergeTwo[c] = collection_1[i];
            i++;
            c++;
        }
        else {
            mergeTwo[c] = collection_2[j];
            j++;
            c++;
        }
    }
    while (i < collection_1.length) {
        mergeTwo[c] = collection_1[i];
        i++;
        c++;
    }
    while (j < collection_2.length) {
        mergeTwo[c] = collection_2[j];
        j++;
        c++;
    }
    return mergeTwo;
}
var Col_1 = [1, 3, 5, 7, 9, 15];
var Col_2 = [2, 4, 6, 8, 10];
var merged = merge(Col_1, Col_2);
console.log(merged);
