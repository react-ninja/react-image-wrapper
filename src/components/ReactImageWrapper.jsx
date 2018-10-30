import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LetteredAvatar from '../lib/lettered-avatar'

import styles from '../styles.css'

const STATUS = {
  LOADED: 'loaded',
  SOURCE: 'src',
  FALLBACK: 'fallback',
  AVATAR: 'avatar'
}

const IMAGE_SHAPE = {
  ROUND: 'round'
}

class ReactImageWrapperComponent extends Component {
  static defaultProps = {
    src: '',
    fallbackSrc: '',
    width: '',
    height: '',
    title: '',
    id: '',
    className: '',
    shape: '',
    keepAspectRatio: false,
    avatarOptions: {
      color: '#FFFFFF',
      backgroundColor: '#CCCCCC',
      shape: 'round'
    }
  }
  constructor(props) {
    super(props)
    this.state = { imageStatus: STATUS.SOURCE }
  }

  getLetteredAvatar = () =>
    LetteredAvatar(
      this.props.avatarOptions.shape,
      this.props.title,
      this.props.avatarOptions.color,
      this.props.avatarOptions.backgroundColor,
      this.props.width,
      this.props.height
    )

  changeImageSrc = () => {
    switch (this.state.imageStatus) {
      case STATUS.SOURCE:
        this.setState({ imageStatus: STATUS.FALLBACK })
        this.img.src = this.props.fallbackSrc
        break
      case STATUS.FALLBACK:
        this.setState({ imageStatus: STATUS.AVATAR })
        this.img.src = this.getLetteredAvatar()
        break
      default:
    }
  }

  render() {
    return (
      <img
        src={this.props.src}
        onError={() => this.changeImageSrc()}
        id={this.props.id}
        className={`${this.props.className} ${
          this.props.shape === IMAGE_SHAPE.ROUND ? styles[IMAGE_SHAPE.ROUND] : ''
        }
        ${
          this.props.keepAspectRatio ? styles.keepAspectRatio : ''
        }`}
        ref={(ref) => {
          this.img = ref
        }}
        title={this.props.title}
        width={this.props.width}
        height={this.props.height}
      />
    )
  }
}

ReactImageWrapperComponent.propTypes = {
  src: PropTypes.string.isRequired
}

export default ReactImageWrapperComponent
