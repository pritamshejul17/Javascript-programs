function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= 100; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= 100; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}