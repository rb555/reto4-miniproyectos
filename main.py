import requests

def obtener_rating_pelicula(titulo):
    api_key = "e8825201ecb00096059152e639e22525"  
    url = f"https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={titulo}"
    response = requests.get(url)
    data = response.json()

    if response.status_code == 200 and data["results"]:
        rating = data["results"][0]["vote_average"]
        return rating
    else:
        return None


titulo_pelicula = input("Ingresa el título de la película: ")
rating = obtener_rating_pelicula(titulo_pelicula)

if rating:
    print(f"El rating de la película {titulo_pelicula} es: {rating}")
else:
    print(f"No se encontró el rating de la película {titulo_pelicula}")
