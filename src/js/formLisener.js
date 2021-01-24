import refs from './refs';
import fetchNews from './apiService';

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.setItem('page', fetchNews.page);

  const query = event.target.children[0].value;
  const page = localStorage.getItem('page');

  if (query !== '' && query.indexOf(' ') < 0) {
    fetchNews.fetchNewses(query, page);
  } else {
    refs.imageList.innerHTML = '';
  }
});
