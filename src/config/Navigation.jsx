import React from 'react'
import {BrowserRouter,Switch, Route, useHistory, Redirect} from "react-router-dom"

import { Home } from '../containers/pages/home/Home';
import { Kelas } from '../containers/pages/kelas/Kelas';
import { Dashboard } from '../containers/pages/dashboard/Dashboard';
import { KelasDetail } from '../containers/pages/kelas/KelasDetail';
import { Login } from '../containers/pages/login/Login';
import { Register } from '../containers/pages/register/Register';
import { KelasCreate } from '../containers/pages/kelas/KelasCreate';
import { KelasUpdate } from '../containers/pages/kelas/KelasUpdate';
import Buku from '../containers/pages/buku/Buku';
import { SetUsers } from '../containers/pages/setUsers/SetUsers';
import { SetProducts } from '../containers/pages/setProducts/SetProducts';
import { SetCoupons } from '../containers/pages/setCoupons/SetCoupons';
import { SetCategories } from '../containers/pages/setCategories/SetCategories';


export const Navigation = () => {
    const token = localStorage.getItem("JWT")
    const history = useHistory();

    function PrivateRoute () {
      return (
        <div>
          {token ? <Dashboard/> : <Redirect to={{ pathname:"login" }}/>  }          
        </div>

      )
    }
    
    function ProtectedPage () {
      return (
        <div>ini halaman protected</div>
      )
    }

    return (
        <BrowserRouter>
          <Switch>
            <Route path="/course" exact component={()=> "hello course"}></Route>
            <Route path="/kelas" exact component={Kelas}></Route>
            <Route path="/buku" exact component={Buku}></Route>
            <Route path="/blog" exact>Blog</Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/kelas/create" exact component={KelasCreate}></Route>
            <Route path="/kelas/:id" exact component={KelasDetail}></Route>
            <Route path="/kelas/update/:id" exact component={KelasUpdate}></Route>
            {/* <Route path="/dashboard" exact component={Dashboard}></Route> */}
            <Route path="/" exact component={Home}/>
            <Route path="/setusers" exact component={SetUsers}></Route>
            <Route path="/setproducts" exact component={SetProducts}></Route>
            <Route path="/setcoupons" exact component={SetCoupons}></Route>
            <Route path="/setcategories" exact component={SetCategories}></Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard}  />

            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>

          </Switch>
      </BrowserRouter>
    )
}

