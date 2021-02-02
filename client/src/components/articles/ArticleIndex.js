import React from 'react'
import { getAllArticles } from '../../lib/api'
import ArticleCard from './ArticleCard'


function ArticleIndex() {
  const [articles, setArticles] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllArticles()
        setArticles(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="hero is-fullheight-with-navbar has-background-light">
      <section className="is-large p-5">
        <h1 className="title has-text-left m-5 is-size-1 is-family-code">NOT FAKE NEWS</h1>
      </section>
      <div className="container">
        {articles ?
          <div className="columns is-multiline">
            {articles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Error, something went wrong' : '...loading'}
          </h2>
        }
      </div>
    </section>
  )

}

export default ArticleIndex