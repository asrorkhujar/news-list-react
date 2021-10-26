function News(newsItem) {
  return (
      <li className="mt-5">
        <h3 className="text-primary">{newsItem.title}</h3>
        <img className="img-fluid w-100" src={newsItem.urlToImage} alt="" />
        <p className="my-1">{newsItem.description}</p>
        <a className="text-warning" href={newsItem.url} rel="noreferrer" target="_blank">{newsItem.url}</a>
      </li>
  )
}

export default News;