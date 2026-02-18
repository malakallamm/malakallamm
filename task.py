print( "choise your operator" ,"-"," +", "/", "*", "%", "//")
operator=input("Enter your operator :")
FirstNumber=float(input( "Enter First Number :"))
SecondNumber= float(input(" Enter Second Number :"))
if operator=="-":
    Sub=FirstNumber - SecondNumber
    print("Sub is :", Sub)
elif operator=="+":
    Sum=FirstNumber + SecondNumber
    print("Sum is :", Sum)
elif operator=="/":
    if SecondNumber !=0 :
       Div=FirstNumber / SecondNumber
       print("Div is :", Div)
    else :
        print("the operation is rejected")
elif operator=="*":
    MUL=FirstNumber * SecondNumber
    print("MUL is :", MUL)
elif operator=="%":
    if SecondNumber !=0 :
       Mod=FirstNumber % SecondNumber
       print("Mod is :", Mod)
    else :
        print("the operation is rejected")
elif operator=="//":
    if SecondNumber !=0 :
       IntDiv =FirstNumber // SecondNumber
       print("Int Div is :", IntDiv)
    else :
       print("the operation is rejected")