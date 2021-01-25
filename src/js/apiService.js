import axios from 'axios';
import newsRender from './newsRender';


 const fetchNews = {
  baseUrl: 'https://pixabay.com/api/',
  query: '',
  settings: '?image_type=photo&orientation=horizontal',
  page: 1,
  perPage: 12,
  key: '19986694-2a4121189ab57813819af57bc',

  fetchNewses: async (query, page) => {
    const { data } = await axios.get(
      `${fetchNews.baseUrl}${fetchNews.settings}&q=${query}&page=${page}&per_page=${fetchNews.perPage}&key=${fetchNews.key}`);

    return newsRender.getNewsArray(data);
  },
};

export default fetchNews;
