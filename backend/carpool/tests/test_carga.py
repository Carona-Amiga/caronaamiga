import time
import requests

url = 'http://localhost:3000/'
num_requests = 1000

start = time.time()
for _ in range(num_requests):
    requests.get(url)
end = time.time()

elapsed_time = end - start
print('Tempo decorrido para', num_requests, 'requisições:', elapsed_time)
