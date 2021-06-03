import React, { Component } from 'react'

export default class page1 extends Component {
    render() {
        return (
            <div>
                <h2>这是page1页面</h2>
                <img src="../../../images/logo192.png" alt="加载失败1" />
                <img src="./images/logo512.png" alt="加载失败2" />
                <img src={require('../../../images/logo192.png').default} alt="加载失败3" />

                {/* 图片直接加载,在这里会加载失败 */}
                {/* 两种方式进行加载,可以成功 */}
                {/* 1.在public里面放图片,使用图片相对于index.html的位置,这种打包后也是相对位置 */}
                {/* 2.使用require加载图片地址,这种打包后,图片会生成base64 */}
            </div>
        )
    }
}
