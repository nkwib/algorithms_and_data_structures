def isOdd(val):
    return val%2 != 0

def someRecursive(arr, fun):
    if len(arr) == 0: return False
    if (fun(arr[0])): return True
    return someRecursive(arr[1:], fun)

print(someRecursive([2,2,4,4,7,6], isOdd))