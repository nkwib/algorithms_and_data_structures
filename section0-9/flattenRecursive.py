def flatten(arr):
    if len(arr)==0: return []
    finalArray = []
    if type(arr[0]) is list:
        finalArray = flatten(arr[0])
    else:
        finalArray.append(arr[0])
    return finalArray+flatten(arr[1:])

print(flatten([1, 2, 3, [4, 5] ]))
print(flatten([1, [2, [3, 4], [[5]]]]))
print(flatten([[1],[2],[3]]))
print(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))