const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Tendencias',
        url: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    },
    fetchTopRated: {
        title: 'Top',
        url: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    },
    fetchActionMovies: {
        title: 'Acción',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
    },
    fetchComedyMovies: {
        title: 'Comedia',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
    },
    fetchHorrorMovies: {
        title: 'Terror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
    },
    fetchMysteryMovies: {
        title: 'Misterio',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-ES`,
    },
    fetchDocumentaryMovies: {
        title: 'Documentales',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-ES`,
    },
    fetchDramaMovies: {
        title: 'Drama',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=es-ES`,
    },
    fetchScifiMovies: {
        title: 'Ciencia Ficcion',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-ES`,
    },
   
}