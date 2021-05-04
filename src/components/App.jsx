// react
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// components
import Layout from './Layout'
// pages
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;