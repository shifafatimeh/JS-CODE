sum=0
i=0
for i in range(10):
    i=i+1
    sum=sum+i
print(sum)
print(i)
def im():
    for i in range(10):
        i+=1
        print(f"value of i is =  {i}")
    return i
    
print(im())

for i in range(10):
    i=i+1
    print ("heelooo")
    

def Func(m,n):
   return(m*n)
print(Func("PYTHON_3 ",6))


# def Func(m,n):
#    return m.repeat(n)
# print(Func("PYTHON_3 ",6))      #(py doesnt have repeat attribute !!!!    but      js have ,)


vow=["a","e","i","o","u"]

def means(string1):
    count=0
    for i in string1:
        for x in vow:
            if i.lower()==x:
                count=count+1
    return f"THE TOTAL NO. OF VOWELS IN {string1} is ' {count} '"
print(means("THANKYOU! FOR VIEWING MY PYTHON CODE ! ")) 