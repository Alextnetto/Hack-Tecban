import json


def format(raw_data: list):
    data = []

    for i in range(11000):
        item = raw_data[i]
        data.append(
            {
                'nome': item['Location']['PostalAddress']['StreetName'],
                'coordinates': {
                    'lat': item['Location']['PostalAddress']['GeoLocation']['GeographicCoordinates']['Latitude'],
                    'lng': item['Location']['PostalAddress']['GeoLocation']['GeographicCoordinates']['Longitude']
                }
            }
        )
    
    with open('./src/assets/db.json', '+w') as fin:
        fin.write(json.dumps(data, indent=4, ensure_ascii=False))


with open('raw.json', 'r') as fin:
    raw_data = json.load(fin)['data'][0]['Brand'][0]['ATM']

format(raw_data)