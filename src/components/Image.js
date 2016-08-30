import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <div className="thumbnail masonry-layout__panel">
                <img src={this.props.imageData.link} className="masonry-layout__panel-content"/>
            </div>
        );
    }
}

Image.propTypes = {};
Image.defaultProps = {};

export default Image;
