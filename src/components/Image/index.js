import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, ...props}, ref) => {
  const [fallback, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(images.noImage);
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img className={cx(className, 'wrapper')} ref={ref} src={fallback || src} alt={alt}{...props} onError={handleError} />
  )
})

export default Image;
