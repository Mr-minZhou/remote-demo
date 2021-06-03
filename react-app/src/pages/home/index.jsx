import React, { Component, lazy, Suspense } from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const page1 = lazy(() => import('@/pages/home/page1'));
const page2 = lazy(() => import('@/pages/home/page2'));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>这是home页面</h1>
                {/* 以下为嵌套路由 */}
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/home/page1" component={page1} ></Route>
                            <Route path="/home/page2" component={page2} ></Route>
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        )
    }
}

export default Home;