import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import ArticleIndex from './components/articles/ArticleIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import ArticleShow from './components/articles/ArticleShow'
import ArticleTrending from './components/articles/ArticleTrending'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles/trending" component={ArticleTrending} />
        <Route path="/articles/:id/" component={ArticleShow} />
        <Route path="/articles/" component={ArticleIndex} />
        <Route path="/auth/register/" component={Register} />
        <Route path="/auth/login/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
