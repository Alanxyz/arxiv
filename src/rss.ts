export const fetchArticles = () => {
  const url = "https://export.arxiv.org/rss/physics"
  fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
    });

  return [];
}
