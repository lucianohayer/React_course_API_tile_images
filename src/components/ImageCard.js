import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();

  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const imageHeight = this.imageRef.current.clientHeight;

    const spans = Math.ceil(imageHeight / 10);

    console.log('image height', imageHeight);
    console.log('spans', spans);

    this.setState({ spans });

  }

  render() {
    const {urls, alt_description} = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
          alt={alt_description} 
          src={urls.regular}
          ref={this.imageRef}
        />
      </div>
    )
  }
}

export default ImageCard;