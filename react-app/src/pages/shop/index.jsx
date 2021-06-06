
import { lazy, Suspense } from 'react';
import styles from './style/index.module.less';
import { Button } from 'antd';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  useSelector,
} from 'react-redux';

const List = lazy(() => import('./list'));
const Car = lazy(() => import('./car'));

export default function Shop() {
  const history = useHistory();//操作路由的方法
  const location = useLocation();//路由信息
  const shopDetail = useSelector((state) => state.shop);//redux数据

  const totalNum = (() => {
    let num = 0;
    shopDetail.car.forEach(item => {
      num += parseInt(item.num);
    })
    return num;
  })();
  console.log(shopDetail);
  function handleRoute(v) {
    if (v != location.pathname) {
      history.push(v);
    }
  }

  return (
    <div className={styles.shop}>
      <p className={styles.title}>水果超市</p>
      <div className={styles.handleWrap}>
        <Button type="primary" onClick={() => { handleRoute('/shop/list') }} >商品列表</Button>
        <Button type="primary" onClick={() => { handleRoute('/shop/car') }} >购物车{totalNum ? `(${totalNum})` : ''}</Button>
      </div>
      <Router>
        <Suspense>
          <Switch>
            <Route path='/shop/list/:s' component={List}></Route>
            <Route path='/shop/list' component={List}></Route>
            <Route path='/shop/car' component={Car}></Route>
            <Redirect exact from='/shop' to="/shop/list"></Redirect>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}