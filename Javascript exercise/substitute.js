function arraySubs(array1,elemtoReplace,susbtoReplace) {
    for(let i=0; i<=array1.length; i++){
        if(array1[i] === elemtoReplace) {
            array1[i] = susbtoReplace;
        }
    }
    return array1;
}

const array1 = [1, 2, 1];
        const elemtoReplace = 1;
        const susbtoReplacem = 3;
        
        // act
        const result = arraySubs(array1,elemtoReplace, susbtoReplacem);

        // log
        console.log("result: ", result);
        
        // assert
        
