function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    // const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    let reversedCaselessStr = '';
    
    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }
    
    return caselessStr === reversedCaselessStr;
}



/**
* Test Suite 
*/
//describe('caseInsensitivePalindrome()', () => {
  //  it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'AaBaa';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
       // expect(result).toBe(true);
    //});
    
    //it('returns false when not a case insensitive palindrome', () => {
        // arrange
       // const str = 'abac';
        
        // act
        //const result = caseInsensitivePalindrome(str);

        // log
        //console.log("result 2: ", result);
        
        // assert
   //     expect(result).toBe(false);
    //});    
//});