// String Scramble
// Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
// Examples
// Input: "cdore" & str2 = "coder"
// Output: true
// Input: "h3llko" & str2 = "hello"
// Output: false
// Tags
// string manipulationsearching

function StringScramble(str1,str2) { 

    let s1map = new Map();
    
    for (let s of str2){
      s1map.has(s) ? s1map.set(s, s1map.get(s)+1) : s1map.set(s, 1)
    }
    for (let s of str1){
      if(s1map.has(s) && s1map.get(s)>0){
        s1map.set(s, s1map.get(s)-1)
      }
      else{
        return false
      }
    }
    return true;
  
  }
     
  // keep this function call here 
  console.log(StringScramble(readline()));