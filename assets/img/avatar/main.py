import requests 
from time import sleep
for i in range(97, 123):
    url = f'https://ui-avatars.com/api/?format=svg&name={chr(i)}'
    print(url)
    data = requests.get(url).content 
    file = f'./{chr(i)}.svg'
    f = open(file,'wb')
    f.write(data)
    f.close()