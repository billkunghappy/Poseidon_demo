import random
# a=[]
# b=[]
# empty_str=[]
# for i in range(15):
# 	r=random.randint(1000,2000)
# 	a.append(r)
# 	b.append(r+random.randint(500,1200))
# 	empty_str.append(" ")
# print(a)
# print(b)
# print(empty_str)

ip_time=[]
asec=[]
amin=[]
ahour=[]
for i in range(4):
	asec.append(random.randint(0,60))
	amin.append(random.randint(0,60))
	ahour.append(random.randint(0,10))
print(asec)
asec.sort()
amin.sort()
ahour.sort()

print(asec)
for i in range(12):
	a=""
	for x in range(4):
		a+=str(random.randint(128,256))
		if x!=3:
			a+="."
	if i<4:
		ip_time.append([a,str(asec[i])+" sec"]);
	elif i<8:
		ip_time.append([a,str(amin[i-4])+" min"]);
	else:
		ip_time.append([a,str(ahour[i-8])+" hour"]);
print(ip_time)