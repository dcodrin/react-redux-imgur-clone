import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {startGetTopics} from 'actions';

class TopicList extends React.Component {

    componentWillMount() {

        if (this.props.topics.length === 0) {
            const {dispatch} = this.props;
            dispatch(startGetTopics());
        }
    }

    render() {
        const renderContent = () => {
            if (this.props.topics.length > 0) {
                return (
                    this.props.topics.map(topic => {
                        return (
                            <div className="callout" key={topic.id}>
                                <Link to={`/topics/${topic.id}`}>
                                    <h4>{topic.name}</h4>
                                    <p>{topic.description}</p>
                                </Link>
                            </div>
                        );
                    })

                );
            } else {
                return 'Loading';
            }
        };

        return (
            <div className="list-group">
                {renderContent()}
            </div>
        );
    }
}

TopicList.propTypes = {};
TopicList.defaultProps = {};

// map topics from app state to component as this.props.topics
export default connect(({topics}) => {
    return {topics};
})(TopicList);
