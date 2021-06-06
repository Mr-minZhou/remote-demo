
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import{
  add,
} from '../../store/action/shop'
import {
  useParams,
} from "react-router-dom";
import { getQuery } from '../../utils/getQuery';

import styles from './style/list.module.less';


export default function List() {
  const shopDetail = useSelector((state) => state.shop);//redux数据
  const dispatch = useDispatch()
  const params = useParams();//路由参数
  const queries = getQuery();//查询参数
  console.log(shopDetail);
  console.log(params);
  console.log(queries);

  function addCar(v){
    dispatch(add(v));
  };

  return (
    <div className={styles.list}>
      {
        shopDetail.list.map(item => {
          return (
            <div className={styles.item} key={item.id}>
              <img src={item.url} alt="" />
              <p>{item.name}</p>
              <p>{item.price}元/500g</p>
              <button onClick={() => { addCar(item) }}>加入购物车</button>
            </div>
          )
        })
      }

    </div>
  )
}