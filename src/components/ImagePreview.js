import React from 'react';
import {Link} from 'react-router';

class ImagePreview extends React.Component {
    constructor() {
        super();
        this.state = {
            hovering: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({
            hovering: true
        });
    }

    handleMouseLeave() {
        this.setState({
            hovering: false
        });
    }

    render() {
        const renderImage = () => {
            const link = `http://i.imgur.com/${this.props.id}m.jpg`;
            return <img src={link} />;
        };

        const renderVideo = () => {
            return (
                <video preload="auto" autoPlay="autoplay" loop="loop">
                    <source src={this.props.mp4} type="video/mp4"/>
                </video>
            );

        };

        const renderPlayIcon = () => {
            return (
                <span className="image-preview__play">PLAY</span>
            );
        };

        const renderInset = () => {
            return(
                <div className="inset">
                    Views: {this.props.views}
                    <br/>
                    Upvotes: {this.props.ups}
                </div>
            );
        };

        return (
            <Link
                className="image-preview"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                to={`/images/${this.props.id}`}
            >
                {this.props.animated && this.state.hovering ? renderVideo() :renderImage()}
                {this.props.animated && !this.state.hovering ? renderPlayIcon() : null}
                {this.state.hovering ? renderInset() : null}
            </Link>
        );
    }
}

ImagePreview.propTypes = {};
ImagePreview.defaultProps = {};

export default ImagePreview;
