import asyncComponent from 'components/AsyncComponent';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const HomePage = asyncComponent(() => import('pages/Home'));
const SamplePage = asyncComponent(() => import('pages/Sample'));
const PostsListPage = asyncComponent(() => import('pages/Posts'));

const AppRoutes: React.FC<any> = () => {
  const match = useRouteMatch();

  return (
    <div className="kd-main-content-wrapper">
      <Switch>
        <Route path={match.url + '/'} component={HomePage} />
        <Route path={match.url + 'sample'} component={SamplePage} />
        <Route path={match.url + 'products'} component={PostsListPage} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
