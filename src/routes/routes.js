import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import App from 'App';
import Topic from 'Topic';
import ImageDetail from 'ImageDetail';

export default (store) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="topics/:id" component={Topic}/>
                    <Route path="images/:id" component={ImageDetail}/>
                </Route>
            </Router>
        </Provider>
    );
};
