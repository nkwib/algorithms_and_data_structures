def productOfArray(arr):
    if len(arr) == 1: return arr[0]
    return arr[0] * productOfArray(arr[1:])

print(productOfArray([1,2,3,10]))