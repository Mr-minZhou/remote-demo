import React, { Component } from 'react'
console.log(222);
export default class page2 extends Component {
    constructor(props) {
        super(props);
        console.log(333);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>这是page2页面</h2>
            </div>
        )
    }
}
