import math

def binarySearch (arr, start, end, x): 
    if end >= start: 
        mid = math.floor(start + (end - start)/2)
        if arr[mid] == x: return mid 
        elif arr[mid] > x: return binarySearch(arr, start, mid-1, x) 
        else: return binarySearch(arr, mid+1, end, x) 
    else: return -1


print(binarySearch([12,15,17,21,26,28,37,42], 0, 7, 20))