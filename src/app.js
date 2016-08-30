import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'configureStore';
import routes from 'routes';

//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();


//App components

// Init store
const store = configureStore();




ReactDOM.render(routes(store), document.querySelector('#app'));
