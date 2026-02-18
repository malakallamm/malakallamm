print("numbers between 1 to 100 :")
for i in range(1, 101):
    print(i)
print("-----------------------------------------")
print("even numbers between 1 to 100")
for i in range(2, 101, 2):
    print(i)
print("-----------------------------------------")
print("odd numbers between 1 to 100")
for i in range(1, 101, 2):
    print(i)
print("-----------------------------------------")
numbers = [66, 78, 70, 81, 11, 10]
for num in numbers:
    print(num)
print("-----------------------------------------")
print("Number  \t  Square")
print("=========================================")
start = int(input("Enter the starting number: "))
end = int(input("Enter the end number: "))
for i in range(start,end):
    squ=i*i
    print(i,"   \t  \t   ",squ)
print("-----------------------------------------")
count = 0
while count < 100:
    print("hello")
    count += 1
print("-----------------------------------------")
count = 2
while count <= 100:
    print(count)
    count += 2