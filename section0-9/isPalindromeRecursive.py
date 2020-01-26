def isPalindrome(s):
    if len(s)<=1:
        return True
    if s[0] == s[-1]:
        return isPalindrome(s[1:-1])
    else:
        return False

a = str(input("Enter the string to be reversed: "))
print(isPalindrome(a))