export const fetchArticles = () => {
  const url = "https://export.arxiv.org/api/query?search_query=cat:math-ph&max_results=40&sortBy=submittedDate&sortOrder=descending"
  return fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("entry")
      const articles: any[] = []

      Array.from(items).forEach((entry: any) => {
        const title = entry.querySelector("title")?.textContent || "unknow"
        const link = entry.querySelector("id")?.textContent.replace("abs", "pdf") || "unknow"
        const summary = entry.querySelector("summary")?.textContent || "unknow"
        const published = entry.querySelector("published")?.textContent || "unknow"

        const author = Array.from(entry.querySelectorAll("name"))
          .map((author: any) => author?.textContent || null)
          .join(", ")

        articles.push({
          title,
          link,
          summary,
          published,
          author
        })
      })

      return articles
    })
}
