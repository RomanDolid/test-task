import axios from 'axios';
import newsRender from './newsRender';

const apiKey = 'dfe51acaeb93423681f9593a203ef679';
const options = {
  headers: {
    Authorization: apiKey,
  },
};
 const fetchNews = {
  baseUrl: 'http://newsapi.org/v2/everything',
  query: '',
  pageSize: 10,
  page: 1,

  fetchNewses: async (query, page) => {
    const { data } = await axios.get(
      `${fetchNews.baseUrl}?q=${query}&pageSize=${fetchNews.pageSize}&page=${page}`, options
    );

    return newsRender.getNewsArray(data);
  },
};

export default fetchNews;
