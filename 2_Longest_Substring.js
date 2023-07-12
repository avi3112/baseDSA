// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


function longestsubstring(s) {
    let set= new Set()
    if(s.length ===0 || s.length ===1){
        return s.length
    }
    let start=0
    let end=0
    let maxlen=0
    while(end < s.length){
        if(!set.has(s[end])){
            set.add(s[end])
            end++
            maxlen =Math.max(maxlen,set.size)
        }
        else{
            set.delete(s[start])
            start++
        }
        
    }
    return maxlen
    
};

const result= longestsubstring("abcabcbb")
console.log(result)