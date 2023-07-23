import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
let filteredNews = news.filter((card) => {
  
  return card.categories.includes("self care") && card.body.length < 260;
});

filteredNews.sort((a, b) => a.body.length - b.body.length);



// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.forEach((news) => {
  // sortedNews = news.body.length > 50;
  // console.log(news.body.length)
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
