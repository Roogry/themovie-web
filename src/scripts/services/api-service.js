/* eslint-disable no-console */
/* eslint-disable no-undef */
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'e5eb91034c8392b491593219344c6817';

const renderTrending = (trendings) => {
  const listTrendingElement = $('#section-trending .swiper-wrapper')[0];
  listTrendingElement.innerHTML = '';
  trendings.forEach((trending) => {
    if (trending.backdrop_path != null) {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = trending;
      movieItemElement.hasDetail = false;
      movieItemElement.classList.add('swiper-slide');
      movieItemElement.classList.add('!bg-transparent');
      listTrendingElement.appendChild(movieItemElement);
    }
  });
};

const renderAllMovies = (movies) => {
  const listMovieElement = $('#section-movies .swiper-wrapper')[0];
  listMovieElement.innerHTML = '';

  movies.forEach((movie) => {
    if (movie.backdrop_path != null) {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      movieItemElement.hasDetail = true;
      movieItemElement.classList.add('swiper-slide');
      movieItemElement.classList.add('!bg-transparent');
      listMovieElement.appendChild(movieItemElement);
    }
  });
};

const renderAllSeries = (series) => {
  const listSeriesElement = $('#section-series .swiper-wrapper')[0];
  listSeriesElement.innerHTML = '';
  series.forEach((seri) => {
    if (seri.backdrop_path != null) {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = seri;
      movieItemElement.hasDetail = false;
      movieItemElement.classList.add('swiper-slide');
      movieItemElement.classList.add('!bg-transparent');
      listSeriesElement.appendChild(movieItemElement);
    }
  });
};

const renderHero = (trendings) => {
  const heroElement = $('hero-section')[0];
  const index = Math.floor(Math.random() * trendings.length);
  const trending = trendings[index];

  heroElement.movie = trending;
};

const getTrending = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/trending/all/week?api_key=${apiKey}`,
    );
    const responseJson = await response.json();
    renderTrending(responseJson.results);
    renderHero(responseJson.results);
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  try {
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const responseJson = await response.json();
    renderAllMovies(responseJson.results);
  } catch (error) {
    console.log(error);
  }
};

const getSeries = async () => {
  try {
    const response = await fetch(`${baseUrl}/tv/popular?api_key=${apiKey}`);
    const responseJson = await response.json();
    renderAllSeries(responseJson.results);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTrending,
  getMovies,
  getSeries,
};
