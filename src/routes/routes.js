import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import App from 'App';

export default (store) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/public">
                    <IndexRoute component={App} />
                </Route>
            </Router>
        </Provider>
    );
};
