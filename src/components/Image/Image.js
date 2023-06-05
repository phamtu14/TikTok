import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

function Image({ className, src, alt, fallBack: customFallback = images.noImage, ...props }, ref) {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            alt={alt}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};

export default forwardRef(Image);
