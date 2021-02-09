// 1a. O(1)

// 1b. O(n)

// 2. 0(1), the algorithm is only performing one function therefore the runtime will always be the same
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// 3. O(n^2), the algorithm requires two levels of looping therefore the runtime increase by the power of 2 according to input size
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// 4. O(n), the algorithm iterates through each value in the array therefore runtime is directly proportional to input size
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// 5. O(n), the algorithm iterates through each value in the array therefore runtime is directly proportional to input size
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// 6. O(n^2), the algorithm requires two levels of looping therefore the runtime increase by the power of 2 according to input size
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// 7. O(n), the algorithm iterates through each value from 1-num therefore runtime is directly proportional to the value of num
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// .8 O(log n), the size of the value is cut in half each time through the loop therefore the runtime does not increase significantly with larger values
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// .9 O(1), the algorithm is choosing a random value from the array therefore runtime is not dependent on value size
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// .10 O(n), the algorithm checks if a given number is prime, it does this by iterating through each number below the given input and therefore is linear
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// .11
// numDisks = number of disks
// fromPeg = starting peg number 
// toPeg = destination peg number
// tempPeg = temporary peg
function towerOfHanoi(numDisks, fromPeg, toPeg, tempPeg ){
    // Base Case
    // If disk is one, then total moves to move disk is one (source to destination)
    if(numDisks === 1){
        console.log(`Move disk 1 from rod ${fromPeg} to ${toPeg}`)
    }
    // Recursive Case
    else{
        towerOfHanoi(numDisks - 1, fromPeg, tempPeg, toPeg);
        console.log(`Move disk ${numDisks} from rod ${fromPeg} to rod ${toPeg}`);
        towerOfHanoi(numDisks - 1, tempPeg, toPeg, fromPeg);
    }
}

// 12.
function sheep(number) {
    if (number <= 0 ) {
        console.log("all sheep jumped over")
        return ''
    }

    console.log("another sheep has jumped over")
    sheep(number - 1)
}

// sheep(5)

function powerCalc(number, power) {
    if (power < 0) {
        console.log("exponent should be greater than 0")
        return ""
    }
    if (number <= 0) {
        return ""
    }
    console.log(number ** power)
    powerCalc(number - 1, power)
}

// powerCalc(10, 4)

function reverseString(str) {
    if (str.length === 0) {
        return ""
    }
    const char = str.charAt([0])
    return reverseString(str.slice(1)) + char
}

// console.log(reverseString('reverse'))

function calcTriangularNumber(number) {
    if (number <= 0) {
        return 
    }
    const triangularNumber = (number * (number + 1)) / 2
    const star = "*"
    if (triangularNumber.toString().length < 2) {
        console.log(triangularNumber, "", star.repeat(number))
    } else {
        console.log(triangularNumber, star.repeat(number))
    }
    
    calcTriangularNumber(number - 1)
}

// console.log(calcTriangularNumber(10))

function stringSplitter(string, separator, array = [], newString = "") {
    if (string.length === 0) {
        array = [newString, ...array]
        console.log(array)
        return array
    }
    if (string.charAt([0]) === separator) {
        array = [newString, ...array]
        newString = ""
    } else {
        newString += string.charAt([0])
    }
    stringSplitter(string.slice(1), separator, array = array, newString = newString)
}

// stringSplitter("20/2jn0/20", "/")

function fibonacci(num, first = 0, second = 0, last = 1, array = [1, 1]) {
    if (num === 0) {
        return console.log(array)
    }
    if (second === 0) {
        first = last
    second = first
    }
    
    last = first + second
    array = [...array, last]
    fibonacci(num - 1, first = array[array.length - 2], second = array[array.length - 1], last = array[array.length], array)
}

// console.log(fibonacci(10))

function factorial(num, result = 0) {
    if (num <= 2) {
        return console.log(result)
    }
    if (result === 0) {
        result = num * (num - 1)
    }
    result = result * (num - 2)
    factorial(num - 1, result)
}

// factorial(3)

// 13. all recursions in number 12 are O(n) as they iterate through each value in a given input

// 14. number 11 is O(n) as the runtime depents on the number of disks





