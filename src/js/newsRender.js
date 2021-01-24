import newsTemplate from '../templates/newsTemplate.hbs';
import refs from './refs';

refs.btnPrev.disabled = true;
refs.btnNext.disabled = true;

const newsRender = {
  getNewsArray: async ({ articles }) => {
    if (Number(localStorage.getItem('page')) === 1) {
      refs.newsList.innerHTML = '';
      refs.btnPrev.disabled = true;
    }

    const newsMarkup = newsTemplate(articles);
    return newsRender.render(newsMarkup);
  },

  render: async newsMarkup => {
    refs.newsList.innerHTML = newsMarkup;
    if (refs.btnNext.disabled) {
      refs.btnNext.disabled = false;
      refs.btnPrev.classList.remove('is-hidden');
      refs.btnNext.classList.remove('is-hidden');
    }
  },
};

export default newsRender;
