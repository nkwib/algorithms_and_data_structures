function isPalindrome(s){
    if(s.length <= 1) return true
    if(s[0] === s.slice(-1)) return isPalindrome (s.slice(1, -1))
    else return false
}

console.log(isPalindrome('ciao'))
console.log(isPalindrome('cicaooaic'))
console.log(isPalindrome('ciaoaic'))