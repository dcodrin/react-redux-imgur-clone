import React from 'react';
import {connect} from 'react-redux';
import {startGetImages} from 'actions';

import Image from 'Image';

class Images extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(startGetImages());
    }
    render() {
        const {images} = this.props;
        const imagesToRender = images ? images.map(image => {
           return <Image key={image.id} imageData={image} />;
        }) : 'Loading...';
        return (
            <div className="masonry-layout">
                {imagesToRender}
            </div>
        );
    }
}

Images.propTypes = {};
Images.defaultProps = {};

//connect is passed all the application state
//to map elements from the state to our container we have to return an object
//we ca return all the state object or parts of it
//in this case we are destructuring the state object an extracting images from it, we then return a new object with the images key/value
export default connect(({images}) => {return {images};})(Images);
