import React from 'react'

function ArticleForm({ formdata, errors, handleChange, handleSubmit, handleFocus, buttonText = 'Submit' }) {
  return (
    <div className="columns">
      <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Headline</label>
          <div className="control">
            <input
              className={`input ${errors.headline ? 'is-danger' : ''}`}
              placeholder="Headline"
              name="headline"
              onChange={handleChange}
              value={formdata.headline}
              onFocus={handleFocus}
            />
          </div>
          {errors.headline && <p className="help is-danger">{errors.headline}</p>}
        </div>
        <div className="field">
          <label className="label">Subheadline</label>
          <div className="control">
            <input
              className={`input ${errors.subheadline ? 'is-danger' : ''}`}
              placeholder="Subheadline"
              name="subheadline"
              onChange={handleChange}
              value={formdata.subheadline}
              onFocus={handleFocus}
            />
          </div>
          {errors.subheadline && <p className="help is-danger">{errors.subheadline}</p>}
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.description ? 'is-danger' : ''}`}
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formdata.description}
              onFocus={handleFocus}
            />
          </div>
          {errors.description && <p className="help is-danger">{errors.description}</p>}
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className={`input ${errors.image ? 'is-danger' : ''}`}
              placeholder="Image URL..."
              name="image"
              onChange={handleChange}
              value={formdata.image}
              onFocus={handleFocus}
            />
          </div>
          {errors.image && <p className="help is-danger">{errors.image}</p>}
        </div>
        <div className="field">
          <label className="label">Article Type</label>
          <div className="control">
            <div className="select">
              <select placeholder="Select Genre" name="types" onChange={handleChange} onFocus={handleFocus} value={formdata.types}>
                <option>Sport</option>
                <option>Entertainment</option>
                <option>Business</option>
                <option>Film</option>
                <option>Technology</option>
                <option>Money</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-light is-fullwidth">{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

export default ArticleForm
