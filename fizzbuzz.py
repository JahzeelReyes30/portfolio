# FizzBuzz: classic coding exercise
# Rules: count from 1 to 100.
#   - if the number is divisible by 3, print "Fizz"
#   - if the number is divisible by 5, print "Buzz"
#   - if it's divisible by both 3 and 5, print "FizzBuzz"
#   - otherwise, just print the number

for number in range(1, 101):
    if number % 3 == 0 and number % 5 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)
