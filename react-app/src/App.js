import { lazy, Suspense } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

const login = lazy(() => import('@/pages/login'));
const Home = lazy(() => {
  console.log('Home组件被加载了');
  // 只会执行一次
  return import('@/pages/home');
});
// 组件懒加载

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* 使用懒加载必须用Suspense,不然会报错 */}
          <Switch>
            <Route path="/login" component={login} ></Route>
            <Route path="/home" component={Home} ></Route>

            <Redirect exact from='/' to="/list"></Redirect>
            {/* 路由重定向 */}

            <Route path="*" component={NotFound} ></Route>
            {/* 如果上面页面都没匹配到就会匹配到以下404页面 */}
          </Switch>
        </Suspense>
      </Router>
    </div >
  );
}

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default App;
