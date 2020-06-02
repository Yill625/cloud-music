import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top } from './style';

function Home(props) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe780;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe780;</span>
      </Top>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
