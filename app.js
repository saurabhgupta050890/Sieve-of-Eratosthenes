const getPrimes = (limit) => {
    let primes = [];
    let booleans = Array.from(Array(limit - 1)).map(x => true); // Initial Array of limit with all set to true starting from 2

    for (let i = 2; i < limit; i++) {
        // Pick a number and if true set all of its multiple to false. It will start from 2 
        if (booleans[i - 2]) {
            for (var j = i * 2; j <= limit; j += i) {
                booleans[j - 2] = false;
            }
        }
    }

    //Enter numbers which are true from booleans Array;
    for (let i = 0; i < booleans.length; i++) {
        if (booleans[i]) {
            primes.push(i + 2);
        }
    }

    return primes;
}

const printPrimes = (limit) => {
    console.log(`All primes till ${limit} are: ${getPrimes(limit).join(",")}`);
}

printPrimes(30);