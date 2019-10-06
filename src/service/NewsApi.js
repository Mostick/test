const API_KEY = '4d570658952e4ecd9c93b19d5cfed939';
const domain = 'https://newsapi.org/v2';
const category = 'top-headlines';
const country = 'ua';

export function fetchNewsList(count, page){
    let url = `${domain}/${category}?country=${country}&apiKey=${API_KEY}&pageSize=${count || 10}&page=${page || 1}`;

    return fetch(url);
}
