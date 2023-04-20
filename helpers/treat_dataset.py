import os
import json

files = os.listdir('../datasets')

params = {}

for file in files:
    f = open('../datasets/' + file, 'r')
    tmp = json.load(f)
    f.close()
    x = tmp[0]
    for y in x.keys():
        if y not in params:
            params[y] = 1
        else:
            params[y] += 1
    tmp = None

for name in params.keys():
    print(f"{name}: {params[name]}")

print(params)
