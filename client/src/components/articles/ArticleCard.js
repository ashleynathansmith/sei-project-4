import React from 'react'
import { Link } from 'react-router-dom'


function ArticleCard({ id, headline, image, description, subheadline, favorites, owner }) {

  return (
    <div className="column is-8-desktop is-offset-2">
      <hr />
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child ">
                <Link to={`/articles/${id}`}>
                  <h1 className="is-uppercase has-text-weight-bold is-size-3 has-text-black">{headline}</h1>
                </Link>
              </article>
            </div>
            <div className="tile is-parent m-1">
              <article className="tile is-child">
                <figure className="image is-1by1">
                  <img src={image} />
                </figure>
                <h2 className="mt-3 is-family-code">Posted by: {owner.username} | 👍 {favorites.length}</h2>
              </article>
            </div>

          </div>
          <div className="tile is-parent m-2">
            <article className="tile is-child">
              <p className="subtitle is-family-code is-size-6">{description}</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-4 ">
          <article className="tile is-child m-1">
            <div className="content">
              <blockquote className="has-text-black is-family-code is-size-6">{subheadline}</blockquote>
              <div className="content">
              </div>
            </div>
            <div className="tile is-child">
              
            </div>
          </article>
        </div>
      </div>
      <hr />
    </div>
    
  )
}

export default ArticleCard