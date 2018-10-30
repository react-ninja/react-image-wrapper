# React Image Wrapper

> React Image is an <img> tag replacement for React.js with fallback image support. If fallback image also fails to load then an avatar renders in img tag.


## Features  

* Support the simple image to load in <img> tag
* Support the fallback image to load if image in ``src`` prop fails to load.
* Support the creation of avatar through ``title`` & ``avatarOptions``

## Install

```bash
npm install --save react-image-wrapper
```

## Usage  

**Import package into your app**

```
import ReactImage from 'react-image-wrapper';
```

**Basic**
```  
<ReactImage
  src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
  width={100}
  height={100}
/>
```  
![Generated Avatar](https://image.ibb.co/kNwByL/riw-1.png)  

**The Image can be styled with boxed or rounded images**
```  
<ReactImage
  src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
  width={100}
  height={100}
  shape="circle"
  title="Circular Image"
/>
```  
![Generated Avatar](https://image.ibb.co/cjBN50/riw-2.png)  

**Image stretch due to image size props can be avoided through ``keepAspectRatio`` prop**
```  
<ReactImage
  src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
  width={100}
  height={100}
  keepAspectRatio={true}
  title="Circular Image"
/>
```  
![Generated Avatar](https://image.ibb.co/gWEaQ0/riw-3.png)  

**If source image fails to load then fallback source will load in image tag**
```  
<ReactImage
  src="https://dummyimage.jpg"
  fallbackSrc="https://preview.ibb.co/nrQadA/andrii-podilnyk-1115162-unsplash.jpg"
  width={100}
  height={100}
/>
```  
![Generated Avatar](https://image.ibb.co/dBhek0/riw-4.png)  

**If source of image tag and fallback source both fails to load then avatar will render through the title of image. The avatar image is customizable through ``avatarOptions``**
```  
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
```  
![Generated Avatar](https://image.ibb.co/gtVAsf/riw-5.png)  


## License
ReactImageWrapper is released under MIT license
