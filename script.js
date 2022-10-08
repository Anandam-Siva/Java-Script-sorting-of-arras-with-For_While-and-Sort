

//By using of FOR Only

let arr = [1, 18, 12, 15, 17, 25, 21, 16]


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let tem = arr[i]
            arr[i] = arr[j]
            arr[j] = tem
        }
    }
}
console.log(arr)



//By using of FOR WHILE and function
function sortin(arr) {
    var x = false;
    while (!x) {

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    x = true;
                    let tem = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tem
                }
            }
        }
    }
}
let arru = [12, 10, 5, 1, 15, 14, 85]
console.log(arru);
sortin(arru);
console.log(arru)



// by using of sort() Method

let arra = [12, 10, 5, 1, 15, 14, 85]
// arra.sort();
console.log(arra)
// if we done this type of sort the numbers converted as a string and it will compare at first place only or example 15 and 5 the 1 st place of 1 compare with 5 and th number 5 will be grater than 15 
//  so for this reasion to avoid this mistake we will do the below code

arra.sort(
    function (a, b) {
        if (a > b)
            return 1
        else
            return -1

    }
)
console.log(arra)
arra.sort(
    function (a, b) {
        if (a > b)
            return -1
        else
            return 1

    }
)
console.log(arra)


