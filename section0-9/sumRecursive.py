def recursiveRange(num):
    if num == 1: return 1
    return num + recursiveRange(num-1)

print(recursiveRange(6))