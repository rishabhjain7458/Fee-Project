
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://newsapi.org/v2/everything?qInTitle="Companies"&q=openings +hire&from=2024-03-01&to=2024-03-05&sortBy=popularity&apiKey=6a4df677f92548a8aebfd1200ef3791d`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the fetched news
    const newsContainer = document.querySelector('#news-container');
    const newsTemplate = document.querySelector('#news-template');

    data.articles.forEach(article => {
      const newsArticle = newsTemplate.content.cloneNode(true);

      newsArticle.querySelector('.title').innerText = article.title;
      newsArticle.querySelector('.description').innerText = article.description || '';
      newsArticle.querySelector('.url').setAttribute('href', article.url);
      newsArticle.querySelector('.url').innerText = 'Read more';

      newsContainer.appendChild(newsArticle);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  