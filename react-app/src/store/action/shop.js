import {
  ADD_SHOPPING,
  HANDLE_NUM,
  DEL_GOODS,
} from '../type/shop';

import { message } from 'antd';

const add = data => {
  return {
    type: ADD_SHOPPING,
    data,
  }
}
const handleNum = (id,num) => {
  return {
    type: HANDLE_NUM,
    id,
    num,
  }
}
const delGoods = id => {
  return {
    type: DEL_GOODS,
    id,
  }
}
const ASYNC_DEL = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(delGoods(id));
      message.success('删除成功');
    }, 3000);
  }
}

export {
  add,
  handleNum,
  delGoods,
  ASYNC_DEL
}