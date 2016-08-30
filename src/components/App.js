import React from 'react';

import MainNav from 'MainNav';
import Images from 'Images';
class App extends React.Component {
    render() {
        return (
            <div>
                <MainNav />
                <Images/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
