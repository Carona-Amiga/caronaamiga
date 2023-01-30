import time
import requests

url = 'http://172.21.96.155:3000/'
num_requests = 500

start = time.time()
for _ in range(num_requests):
    requests.get(url)
end = time.time()

elapsed_time = end - start
print('Time elapsed for', num_requests, 'requests:', elapsed_time)
