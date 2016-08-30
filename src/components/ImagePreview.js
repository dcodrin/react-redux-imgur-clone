import React from 'react';

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
        })
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

        return (
            <div
                className="image-preview"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.animated && this.state.hovering ? renderVideo() :renderImage()}
                {this.props.animated && !this.state.hovering ? renderPlayIcon() : null}
            </div>
        );
    }
}

ImagePreview.propTypes = {};
ImagePreview.defaultProps = {};

export default ImagePreview;
