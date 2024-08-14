export const fetchArticles = () => {
  const url = "http://export.arxiv.org/api/query?search_query=physics&max_results=40&sortBy=lastUpdatedDate"
  return fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("entry")
      const articles: any[] = []

      Array.from(items).forEach((entry: any) => {
        const title = entry.querySelector("title")?.innerHTML || "unknow"
        const link = entry.querySelector("link")?.innerHTML || "unknow"
        const summary = entry.querySelector("summary")?.innerHTML || "unknow"
        const published = entry.querySelector("published")?.innerHTML || "unknow"

        articles.push({
          title,
          link,
          summary,
          published
        })
      })

      return articles
    })
}
