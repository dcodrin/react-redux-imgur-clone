import React from 'react';

import MainNav from 'MainNav';
import TopicList from 'TopicList';
class App extends React.Component {
    render() {

        const renderContent = () => {
            if(this.props.children) {
                return this.props.children;
            }
            return <TopicList />;
        };

        return (
            <div>
                <MainNav />
                {renderContent()}
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
