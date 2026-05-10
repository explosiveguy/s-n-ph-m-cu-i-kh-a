function giaithua(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let result1 = giaithua(5);
console.log(result1);
function conver_C_to_F(celcius) {
    let faraheit = celcius * 9/5 +32;
    return faraheit;    
}