# 逆数の総和がNを超える項は何番目か

answer = 0
number = 1
N = 12

def cal(answer,number):
  while(answer<N):
    answer += 1/number
    number += 1

  print (answer)
  print (number)

cal(answer,number)