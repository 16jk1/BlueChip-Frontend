import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explorer";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import ExplorerPost from "../Routes/ExplorerPost";
import Mbti from "../Routes/mbti";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Mbti} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Route path="/mbti" component={Explore} />
    <Route path="/explorepost" component={ExplorerPost} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
export default AppRouter;