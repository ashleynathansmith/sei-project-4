import React from 'react'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { setToken } from '../../lib/auth'


function Register() {
  const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    profile_image: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await registerUser(formdata)
      setToken(data.token)
      history.push('/auth/login')
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
        <div className="columns">
          <form className="column is-4 is-offset-4 box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${error.username ? 'is-danger' : ''}`}
                  placeholder="Username..."
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                  onFocus={handleFocus}
                />
              </div>
              {error.username && <p className="help is-danger">{error.username}</p>}
            </div>

            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className={`input ${error.first_name ? 'is-danger' : ''}`}
                  placeholder="First Name..."
                  onChange={handleChange}
                  name="first_name"
                  value={formdata.first_name}
                  onFocus={handleFocus}
                />
              </div>
              {error.first_name && <p className="help is-danger">{error.first_name}</p>}
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className={`input ${error.last_name ? 'is-danger' : ''}`}
                  placeholder="Last Name..."
                  onChange={handleChange}
                  name="last_name"
                  value={formdata.last_name}
                  onFocus={handleFocus}
                />
              </div>
              {error.last_name && <p className="help is-danger">{error.last_name}</p>}
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${error.email ? 'is-danger' : ''}`}
                  placeholder="Email..."
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                  onFocus={handleFocus}
                />
              </div>
              {error.email && <p className="help is-danger">{error.email}</p>}
            </div>

            <div className="field">
              <label className="label">Profile Image</label>
              <div className="control">
                <input
                  className={`input ${error.profile_image ? 'is-danger' : ''}`}
                  placeholder="Please add URL..."
                  onChange={handleChange}
                  name="profile_image"
                  value={formdata.profile_image}
                  onFocus={handleFocus}
                />
              </div>
              {error.profile_image && <p className="help is-danger">{error.profile_image}</p>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${error.password ? 'is-danger' : ''}`}
                  placeholder="Password..."
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </div>
              {error.password && <p className="help is-danger">{error.password}</p>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${error.password_confirmation ? 'is-danger' : ''}`}
                  placeholder="Password Confirmation..."
                  onChange={handleChange}
                  name="password_confirmation"
                  value={formdata.password_confirmation}
                />
              </div>
              {error.password_confirmation && <p className="help is-danger">{error.password_confirmation}</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth has-background-light">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
