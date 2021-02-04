import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login() {
  const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      history.push('/articles/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns mt-6">
          <form className="box column is-4 is-offset-4" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label is-family-code">Email</label>
              <div className="control">
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-family-code">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                  onFocus={handleFocus}
                />
              </div>
              {error && <p className="help is-danger">Sorry, your email or password are incorrect</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth has-background-light is-family-code">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
