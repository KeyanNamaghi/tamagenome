import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlobPage from './components/BlobPage'
import Three from './components/Three'
import './App.css'

function App() {
  return (
    <Switch>
      <Route path="/3d">
        <Three />
      </Route>
      <Route path="/">
        <BlobPage />
      </Route>
    </Switch>
  )
}

export default App
