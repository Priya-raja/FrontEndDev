function encloseInBrackets(str) {
    // const solution1 = '(' + str + ')';
    // const solution2 = `(${str})`;
    const solution3 = '('.concat(str, ')');
    
    return solution3;
}

console.log(encloseInBrackets('abjhbdjs'))

