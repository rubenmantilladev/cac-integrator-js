const API_SERVER = "https://api.themoviedb.org/3"; //esto se cambiara por una api propia que tenga las peliculas en la base de mysql

const options = {
  method: "GET", // Método de la petición (GET)
  headers: {
    accept: "application/json", // Tipo de respuesta esperada (JSON)
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8",
  },
};

const getPopularMovies = async () => {
  const response = await fetch(`${API_SERVER}/movie/popular?page=2`, options);
  const data = await response.json();
  const movies = data.results;
  console.log(movies);
};

getPopularMovies();

const getTopMovies = async () => {
  const response = await fetch(`${API_SERVER}/movie/top_rated`, options);
  const data = await response.json();
  const movies = data.results;
  console.log(movies);
};

getTopMovies();