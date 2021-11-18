import requests
from tmdb import TMDBHelper
from pprint import pprint
import json
import sys

tmdb_helper = TMDBHelper('17ad6036a4743047f1619ddbc5e0fbf2')

results = list()

movies_list = list()

for i in range(1, 21):
    request_url = tmdb_helper.get_request_url(
        region='KR', 
        language='ko',
        page = i
        )

    data = requests.get(request_url).json()
    results = data.get('results')

    for result in results:
        temp = {
            "model": "movies.genre",            
            "fields": {
                "title": result["title"],
                "release_date": result["release_date"],
                "popularity": result["popularity"],
                "vote_count": result["vote_count"],
                "vote_average": result["vote_average"],
                "overview": result["overview"],
                "poster_path": result["poster_path"],
                "genres": result["genre_ids"],

            }
        }
        movies_list.append(temp)

movies_list.sort(key=lambda x: x['fields']['release_date'])

print(movies_list)

with open('movies.json', 'w', encoding="utf-8") as make_file:
    json.dump(movies_list, make_file, ensure_ascii=False, indent="\t")

genre_url = tmdb_helper.get_genre_url()
data = requests.get(genre_url).json()
genres = data.get('genres')

# print(genres)

genre_list = []
for genre in genres:
    temp = {
        "model": "movies.genre",
        "pk": genre['id'],
        "fields": {
            "name": genre['name']
        }
    }
    genre_list.append(temp)
    
with open('genres.json', 'w', encoding="utf-8") as make_file:
    json.dump(genre_list, make_file, ensure_ascii=False, indent="\t")
