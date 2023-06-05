import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    disabled = false,
    text = false,
    outline = false,
    primary = false,
    small = false,
    large = false,
    leftIcon = false,
    rightIcon = false,
    rounded = false,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        delete props.onClick;
    }

    return (
        <div>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}> {children} </span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </div>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
