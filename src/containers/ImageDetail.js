import React from 'react';
import {connect} from 'react-redux';

import {startGetImage, startGetComments} from 'actions';

import api from 'imgur-clone';

class ImageDetail extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(startGetComments(this.props.params.id));

        const imageData = this.props.images.length > 0 ? api.findImage(this.props.images, this.props.params.id) : null;

        if(imageData) {
            this.setState({
                imageData
            });
        } else {
            dispatch(startGetImage(this.props.params.id));
        }
    }

    render() {
        const imageData  = (this.state && this.state.imageData) || this.props.image;
        const renderImage = () => {
            return <img src={imageData.link} />;
        };

        const renderVideo = () => {
            return (
                <video preload="auto" autoPlay="autoplay" loop="loop">
                    <source src={imageData.mp4} type="video/mp4"/>
                </video>
            );
        };

        const renderComments = (comments) => {
            if(comments.length > 0) {
                return comments.map(comment => {
                    return (
                        <div key={comment.id} className={comment.children.length > 0 ? "success callout small" : "callout small"}>
                            <p>{comment.comment}</p>
                            <p>Author: {comment.author}</p>
                            {comment.children.length > 0 ?
                                renderComments(comment.children) :
                                null
                            }
                        </div>
                    );
                });
            } else {
                return (
                    <div className="callout small">
                        Loading comments...
                    </div>
                );
            }
        };

        return (
            <div>
                <div className="image-detail callout large">
                    <h5>{imageData.title}</h5>
                    <p>{imageData.description}</p>
                    {imageData.animated ? renderVideo() : renderImage()}
                </div>
                <div className="callout large">
                    {renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}

ImageDetail.propTypes = {};
ImageDetail.defaultProps = {};

export default connect(({image, images, comments}) => {
    return {
        image,
        images,
        comments
    };
})(ImageDetail);
