import React,  { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SendPage from './containers/SendPage'
import Complete from './containers/Complete'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={SendPage} />
                            <Route path="/complete" component={Complete} />  
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App