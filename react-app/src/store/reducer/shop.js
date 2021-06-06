
import { combineReducers } from 'redux';
import { goodsList } from '../initial/index';
import { deepCopy } from '../../utils/deepCopy';
import {
  ADD_GOODS,
  ADD_SHOPPING,
  HANDLE_NUM,
  DEL_GOODS,
} from '../type/shop';

function list(state = goodsList, action) {
  const { type } = action;
  switch (type) {
    case ADD_GOODS: {
      let list = deepCopy([], state);
      list.push(action.data);

      return list;
    }

    default: {
      return state;
    }
  }
}

function car(state = [], action) {
  const { type } = action;
  switch (type) {
    case ADD_SHOPPING: {
      let index = state.findIndex((item) => item.id == action.data.id);
      let list = deepCopy([], state);
      if (index == -1) {
        action.data.num = 1;
        list.push(action.data);
      } else {
        list[index].num++;
      }
      return list;
    }

    case HANDLE_NUM:{
      let index = state.findIndex((item) => item.id == action.id);
      let list = deepCopy([], state);
      list[index].num = action.num;
      return list;
    }

    case DEL_GOODS:{
      let index = state.findIndex((item) => item.id == action.id);
      let list = deepCopy([], state);
      list.splice(index, 1);
      return list;
    }

    default: {
      return state;
    }
  }
}

export default combineReducers(
  {
    list,
    car
  }
)