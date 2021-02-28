import React from 'react'
import {BrowserRouter,Switch, Route} from "react-router-dom"
import {Footer, Header} from "./components/"
import { Home } from './containers/pages/home/Home';
import { Kelas } from './containers/pages/kelas/Kelas';
import { KelasDetail } from './containers//pages/kelas/KelasDetail';
import { Login } from './containers/pages/login/Login';
import { Register } from './containers/pages/register/Register';
import { KelasCreate } from './containers/pages/kelas/KelasCreate';


export const App = () => {
  return (
    <BrowserRouter>
        <Header/>

        <Switch>
          <Route path="/course" exact component={()=> "hello course"}></Route>
          <Route path="/kelas" exact component={Kelas}></Route>
          <Route path="/buku" exact>Buku</Route>
          <Route path="/blog" exact>Blog</Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/kelas/create" exact component={KelasCreate}></Route>
          <Route path="/kelas/:id" exact component={KelasDetail}></Route>
          <Route path="/" exact component={Home}/>
        </Switch>

        <Footer/>
    </BrowserRouter>
  )
}
