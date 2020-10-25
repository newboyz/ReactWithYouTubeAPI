import { article_url, _api_key, provenance, q_code, sort } from '../config/rest_config.js';

export async function getArticles() {

  try {
      let articles = await fetch(`${article_url}?q=${q_code}&from=${provenance}&sortBy=${sort}`, {
        headers: {
          'X-API-KEY': _api_key
        }
      });

      let result = await articles.json();
      articles = null;

      return result.articles;
  }
  catch(error) {
    throw error;
  }
}
