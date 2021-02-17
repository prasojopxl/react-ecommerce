import React from 'react'
import {BrowserRouter,Switch, Route} from "react-router-dom"
import {Footer, Header} from "./components/"
import { Home } from './pages/home/Home'


export const App = () => {
  return (
    <BrowserRouter>
        <Header/>

        <Switch>
          <Route path="/course" exact component={()=> "hello course"}></Route>
          <Route path="/kelas" exact>Kelas</Route>
          <Route path="/buku" exact>Buku</Route>
          <Route path="/blog" exact>Blog</Route>
          <Route path="/login" exact>Login</Route>
          <Route path="/" exact component={Home}/>
        </Switch>

        <Footer/>
    </BrowserRouter>
  )
}
