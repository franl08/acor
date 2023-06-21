import os
import json


def compress():
    f = open('../datasets/jstj_acordaos.json', 'r', encoding='utf-8')
    tmp = json.load(f)
    final = []
    f.close()
    for val in tmp:
        val['Sumário'] = ''
        val['Decisão Texto Integral'] = ''
        final.append(val)

    f = open('../datasets/jstj_acordaos_comp.json', 'w', encoding='utf-8')
    f.write(json.dumps(final))


def get_data():
    params = {}
    files = os.listdir('../datasets')
    for file in files:
        if file == 'jstj_acordaos.json':
            continue
        f = open('../datasets/' + file, 'r', encoding='utf-8')
        tmp = json.load(f)
        f.close()
        for val in tmp:
            for y in val.keys():
                if y not in params:
                    params[y] = {}
                    params[y][file] = 1
                elif file not in params[y]:
                    params[y][file] = 1
                else:
                    params[y][file] += 1
        tmp = None
    f = open('result.txt', 'w', encoding='utf-8')
    f.write(json.dumps(params))


get_data()
