import _ from 'lodash'

const svgToDataURL = (svgStr) => {
  const encoded = encodeURIComponent(svgStr)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')

  const header = 'data:image/svg+xml,'
  const dataUrl = header + encoded

  return dataUrl
}

const svgSample = (shape, text, textColor, bgColor, width, height) => {
  text = text || ''
  switch (shape) {
    case 'round':
      return `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="250" height="250">
      <circle cx="125" cy="125" r="100" fill="${bgColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="100px" font-family="Arial" dy=".3em">${text}</text>
    </svg>`
      break;
    case 'box':
      return `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="${bgColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="10vw" font-family="Arial" dy=".3em">${text}</text>
        </svg>`
      break;
  }
}

const getTitle = (text) => {
  const textArray = text && text !== '' ? text.split(' ') : []
  if (textArray.length === 0) {
    return ''
  }
  if (textArray.length === 1) {
    text = textArray[0].substr(0, 2)
    return _.upperFirst(_.toLower(text))
  }
  if (textArray.length > 1) {
    text = textArray[0].substring(0, 1) + textArray[1].substring(0, 1)
    return text.toUpperCase()
  }
}

const createAvatar = (shape, text, textColor, bgColor, width, height) => {
  text = getTitle(text);
  const svgStr = svgSample(shape, text, textColor, bgColor, width, height)
  return svgToDataURL(svgStr)
}

export default createAvatar
