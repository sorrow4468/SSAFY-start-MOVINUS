import requests
from tmdb import TMDBHelper
from pprint import pprint

tmdb_helper = TMDBHelper('17ad6036a4743047f1619ddbc5e0fbf2')

results = list()

for i in range(1, 21):
    request_url = tmdb_helper.get_request_url(
        region='KR', 
        language='ko',
        page = i
        )

    data = requests.get(request_url).json()
    results += data.get('results')

results.sort(key=lambda x: x['release_date'])

pprint((results))
















"""
최신영화 나오는거 같은데 20개 밖에 안주네
이게 하루에 영화 20개밖에 안줘서
크롤링 할거면 일찍 시작하라는 얘기 같은데
영화는 나름 최신영화 들어있는거같아
누나 API_KEY, 내 API_KEY 돌려서 모으면 
하루 40개씩 2~3일정도 모으면 될거같다 
"""