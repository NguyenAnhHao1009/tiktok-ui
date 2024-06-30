import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Images({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Images);
