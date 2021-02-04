/* eslint-disable no-unused-vars */
import React from 'react'
import { getOneArticle, deleteArticle, createArticleComment } from '../../lib/api'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'

import { isOwner } from '../../lib/auth'

function ArticleShow() {
  const [error, setError] = React.useState(false)
  const [article, setArticle] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getOneArticle(id)
        setArticle(data)
      } catch (err) {
        setError(true)
      }
    }
    getData()
  }, [id])

  const { formdata, handleChange, setFormdata } = useForm({
    text: '',
    article: 7
  })
  
  const handleDelete = async () => {
    try {
      await deleteArticle(id)
      history.push('/articles/')
    } catch (err) {
      setError(true)
    }
  }

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createArticleComment(formdata)
      setFormdata(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  console.log(formdata.text)

  return (
    <section className="section">
      <div className="container">
        {article ?
          <div>
            <hr />
            <div className="columns">
              <div className="column is-4 is-offset-3">
                <h1 className="title has-text-centered is-uppercase">{article.headline}</h1>
                <hr />
                <h2 className="is-family-code">{article.subheadline}</h2>
                <hr />
                <figure className="image box">
                  <img src={article.image} alt={article.headline}/>
                </figure>

                
                  
                {article.comments.map(comment => {
                  return (
                    <article key={comment.id} className="media m-1">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src={comment.owner.profile_image} />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{comment.owner.username}</strong>
                            <br />
                            {comment.text}
                            <br />
                            <small><a>Like</a> · <a>Reply</a> · {comment.created_at}</small>
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
                


                  
                
                
                
                <form onSubmit={handleSubmitComment}>
                  <div className="field">
                    <label className="label">Comment</label>
                    <div className="control">
                      <input className="input" type="text" name="text" onFocus={handleFocus} onChange={handleChange} value={formdata.text} placeholder="Leave a comment..."/>
                    </div>
                  </div>
                  <div className="field">
                    <button type="submit" className="button is-fullwidth has-background-light">Submit</button>
                  </div>
                </form>
              </div>
              <div className="columns m-2">
                <div className="column is-6">
                  <p className="is-family-code">{article.description}</p>
                  <hr />
                  <footer className="footer">
                    <div className="content has-text-centered">
                      <p>
                        <strong>NOT FAKE NEWS</strong> www.notfakenews.com
                      </p>
                    </div>
                  </footer>
                  <div>
                    {isOwner(article.owner.id) ? <button className="button is-light"
                      onClick={handleDelete}>Delete
                    </button> : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {setError ? 'Error, something went wrong' : '...loading'}
          </h2>
        }
      </div>
    </section>
  )
}

export default ArticleShow