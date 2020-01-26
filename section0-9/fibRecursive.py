def fib(pos):
    if pos < 3: return 1
    return fib(pos-1) + fib(pos-2)

print(fib(19))