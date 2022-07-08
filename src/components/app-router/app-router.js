import React from "react";
import {getAuth} from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Switch, Redirect } from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts"
import {privatRoutes, publicRoutes} from "../../routes"
import { Route } from "react-router-dom";
import Spiner from "../spiner/spiner";
import './app-router.css'

const AppRouter = () => {

  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  

  const privet = privatRoutes.map(({path, Component}) => {
    return (
      <Route key={path} path={path} component={Component} exact={true} />
    )
  })

  const publik = publicRoutes.map(({path, Component}) => {
    return (
      <Route key={path} path={path} component={Component} exact={true} />
    )
  })


  return (
    <div className="app__router">
      {
        loading ? <Spiner /> : user ?
        (
            <Switch>
              {privet}
              <Redirect to={HOME_ROUTE} />
            </Switch>

        )
        :
        (
          <Switch>
              {publik}
              <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
      }
    </div>
  )
 

}

export default AppRouter;