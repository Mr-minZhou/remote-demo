
import {
  Table,
  InputNumber,
  Button,
} from 'antd';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  handleNum,
  ASYNC_DEL
} from '../../store/action/shop'

import styles from './style/car.module.less';

export default function Car() {
  const shopDetail = useSelector((state) => state.shop);//redux数据
  const dispatch = useDispatch();

  function changeNum(v1, v2) {
    dispatch(handleNum(v1.key, v2));
  }

  function del(v) {
    dispatch(ASYNC_DEL(v.key));
  }

  const columns = [
    {
      title: '商品名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      dataIndex: 'num',
      key: 'num',
      render: (v1, v2) => {
        return (
          <InputNumber min={1} defaultValue={v1} onChange={(e) => { changeNum(v2, e) }} />
        )
      }
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '小计',
      key: 'sum',
      dataIndex: 'sum',
    },
    {
      title: 'handle',
      key: 'handle',
      render: (v) => {
        return (
          <Button type="primary" danger onClick={() => { del(v) }}>
            删除
          </Button>
        )
      },
    },
  ];

  const data = (() => {
    let arr = [];
    shopDetail.car.forEach((item) => {
      const {
        name,
        num,
        price,
        id
      } = item;
      arr.push({
        name,
        num,
        price,
        sum: parseInt(price) * parseInt(num),
        key: id,

      });
    });
    return arr;
  })();

  const total = (() => {
    let n = 0
    data.forEach(item => {
      n += (parseInt(item.price) * parseInt(item.num));
    })
    return n;
  })();

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      {data.length > 0 && <p className={styles.total}>
        总计:  {total}元
      </p>}
    </div>
  )
}