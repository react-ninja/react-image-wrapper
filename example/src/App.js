import React, { Component } from 'react';

import ReactImage from 'react-image-wrapper';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Basic Implementation</h3>
        <ReactImage
          src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
          width={100}
          height={100}
        />

        <h3>The Image can be styled with boxed or rounded images</h3>
        <ReactImage
          src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
          width={100}
          height={100}
          shape="round"
          title="Rounded Image"
        />

        <h3>To avoid image stretch due to image size, you can use the ``keepAspectRatio`` prop</h3>
        <ReactImage
          src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
          width={100}
          height={100}
          keepAspectRatio={true}
        />

        <h3>if source image fails to load then fallback source will load in image tag</h3>
        <ReactImage
          src="https://dummyimage.jpg"
          fallbackSrc="https://preview.ibb.co/nrQadA/andrii-podilnyk-1115162-unsplash.jpg"
          width={100}
          height={100}
        />

        <h3>If source of image tag and fallback source both fails to load then avatar will render through the title of image.
        The avatar image is customizable through ``avatarOptions``</h3>
        <ReactImage
          src="https://dummyimage.jpg"
          fallbackSrc="https://dummyimage.jpg"
          width={100}
          height={100}
          title="Ahsan Bilal"
          id="react-image-id"
          className="react-image-class"
          avatarOptions={
            {
              color: '#FFFFFF',
              backgroundColor: '#4186e0',
              shape:"round"
            }
          }
        />
      </div>
    );
  }
}
