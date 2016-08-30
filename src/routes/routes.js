import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import App from 'App';
import Topic from 'Topic';

export default (store) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/public" component={App}>
                    <Route path="topics/:id" component={Topic}/>
                </Route>
            </Router>
        </Provider>
    );
};
