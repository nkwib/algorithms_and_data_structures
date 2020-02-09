def fib(n):
    if n == 1 or n == 2:
        result = 1
    fibRes = [None] * (n+1)
    fibRes[1] = 1
    fibRes[2] = 1
    for i in range (3, n+1):
        fibRes[i] = fibRes[i-1] + fibRes[i-2]
    return fibRes[n]

print(fib(1662))
