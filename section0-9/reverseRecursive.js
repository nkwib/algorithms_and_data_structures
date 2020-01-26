function reverse(s) {
    if (s.length === 1)
        return s
    else
        return reverse(s.slice(1, s.length)) + s[0]
}

console.log(reverse('ciao'))