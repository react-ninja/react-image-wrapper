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
###### Output:
![Generated Avatar](https://image.ibb.co/kNwByL/riw-1.png)  

**The Image can be styled with boxed or rounded images**
```  
<ReactImage
  src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
  width={100}
  height={100}
  shape="round"
  title="Rounded Image"
/>
```  
###### Output:
![Generated Avatar](https://image.ibb.co/cjBN50/riw-2.png)  

**Image stretch due to image size props can be avoided through ``keepAspectRatio`` prop**
```  
<ReactImage
  src="https://preview.ibb.co/hqhoyA/lexie-barnhorn-1114350-unsplash.jpg"
  width={100}
  height={100}
  keepAspectRatio={true}
/>
```  
###### Output:
![Generated Avatar](https://image.ibb.co/gWEaQ0/riw-3.png)  

**If source image fails to load then fallback source will load in image tag**
```  
<ReactImage
  src="https://error-image.jpg"
  fallbackSrc="https://preview.ibb.co/nrQadA/andrii-podilnyk-1115162-unsplash.jpg"
  width={100}
  height={100}
/>
```  
###### Output:
![Generated Avatar](https://image.ibb.co/dBhek0/riw-4.png)  

**If source of image tag and fallback source both fails to load then avatar will render through the title of image. The avatar image is customizable through ``avatarOptions``**
```  
<ReactImage
  src="https://error-image.jpg"
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
###### Output:
![Generated Avatar](https://image.ibb.co/gtVAsf/riw-5.png)  

### Props
| Name | Type | Description |
| --- | --- | --- |
| src | String | URL of Image which needs to render in image tag. |
| fallbackSrc | String | URL of Image which needs to render if image URL in src tag fails to render in img tag. |
| width |  Integer | The width of the image you want to set. |
| height |  Integer | The height of the image you want to set. |
| shape | String('round','box') | The shape of image. |
| keepAspectRatio | Boolean | Set keepAspect Ratio to `true` to avoid image stretch due to provided width/height of image  |
| title |  String | Title of Image which appears in image tooltip and in case of failed/unavailable fallback source it render the avatar and shows 2 letters of title in it for example, if the title is `Ahsan Bilal` the avatar will show `AB` and if the title is ``Ryan`` then it will show `Ry`.  |
| id |  String | ID attribute for image tag |
| className |  String | Class attribute for image tag |
| avatarOptions | Object | Additional props to configure avatar properties |

#### avatarOptions
| Name | Type | Description |
| --- | --- | --- |
| color | String(hex) | URL of Image which needs to render in image tag. |
| backgroundColor | String(hex) | Background color of the avatar. The component assigns particular color to each letter. If you want to override the color then set this property. |
| shape |  String('round','box') | The shape of avatar. |


## License
ReactImageWrapper is released under MIT license
