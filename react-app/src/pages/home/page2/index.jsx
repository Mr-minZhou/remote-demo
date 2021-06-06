import React, { useState,useEffect  } from 'react';
import PropTypes from 'prop-types';

export default function page2(props) {

  const [tiem, setTime] = useState(props.fatherMsg);
  useEffect(()=>{
    document.title = `你点了${tiem}下`;
    return function clear(){
      console.log('取消了副作用');
      // 这个返回的函数里面,可以用于一些订阅或者定时器之类的清除
    }
  },[tiem])
  // 第二个参数是个数组,当数组里面包含的变量改变时,才会触发这个useEffect,性能优化点

  return (
    <div style={{ marginTop: '30px', padding: '20px' }}>
      <p style={{ margin: '20px' }}>点了{tiem}下</p>
      <button onClick={() => setTime(tiem + 1)}>点我</button>
    </div>
  )
}

page2.propTypes = {
  fatherMsg: PropTypes.number,
};
page2.defaultProps = {
  fatherMsg: 1,
};

