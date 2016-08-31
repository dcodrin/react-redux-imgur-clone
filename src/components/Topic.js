import React from 'react';
import {connect} from 'react-redux';

import {startGetImages} from 'actions';
import ImagePreview from 'ImagePreview';

class Topic extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(startGetImages(this.props.params.id));
    }

    render() {
        const renderContent = () => {
            if(this.props.images) {
                return (
                    this.props.images.map(image => {
                        return <ImagePreview {...image} key={image.id}/>;
                    })
                );
            } else {
                return 'Loading...';
            }
        };

        return (
            <div className="topic">
                {renderContent()}
            </div>
        );
    }
}

Topic.propTypes = {};
Topic.defaultProps = {};

export default connect(({images}) => {
    return {images};
})(Topic);
