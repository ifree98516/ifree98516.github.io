from random import randint

wins=0
for i in range(10000):  #This loop determines the wins in each region from 0 to 100000 for this Election
    regions=0
    if randint(1,100) <= 87:#This increases the number of regions won if the number is less that 87%
        regions += 1
    if randint(1,100) <= 65:#This increases the number of regions won if the number is less that 65%
        regions += 1
    if randint(1,100) <= 17:#This increases the number of regions won if the number is less that 17%
        regions += 1
    if regions >= 2:#This increases the number of wins if the number of won regions is greater than or equal to 2.
        wins+= 1

print "the chances of winning are: %s" %(wins/float(100000))#This takes the number of wins and divides it by the total number of elections to find the possibility of winning the election.


