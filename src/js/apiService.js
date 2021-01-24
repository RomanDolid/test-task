import axios from 'axios';
import newsRender from './newsRender';

const fetchNews = {
  baseUrl: 'http://newsapi.org/v2/everything',
  query: '',
  pageSize: 10,
  page: 1,
  apiKey: 'dfe51acaeb93423681f9593a203ef679',

  fetchNewses: async (query, page) => {
    const { data } = await axios.get(
      `${fetchNews.baseUrl}?q=${query}&pageSize=${fetchNews.pageSize}&page=${page}&apiKey=${fetchNews.apiKey}`,
    );

    return newsRender.getNewsArray(data);
  },
};

export default fetchNews;
