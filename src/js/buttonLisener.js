import refs from './refs';
import fetchNews from './apiService';

let page = '';
let countPage = '';
let query = '';

refs.btnNext.addEventListener('click', () => {
  page = localStorage.getItem('page');
  if (page === null) {
    localStorage.setItem('page', 1);
  } else {
    countPage = Number(page) + 1;
    localStorage.setItem('page', countPage);
    refs.btnPrev.disabled = false;
  }

  query = refs.form.children[0].value;
  page = localStorage.getItem('page');

  fetchNews.fetchNewses(query, page);
});

refs.btnPrev.addEventListener('click', () => {
  page = localStorage.getItem('page');
  if (page < 1) {
    return;
  } else {
    countPage = Number(page) - 1;
    localStorage.setItem('page', countPage);
  }

  query = refs.form.children[0].value;
  page = localStorage.getItem('page');

  fetchNews.fetchNewses(query, page);
});
