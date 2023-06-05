//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    fetch('https://open.tiktokapis.com/v2/user/info/')
        .then((res) => res.json())
        .then((data) => console.log(data));

    const renderPrev = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} render={renderPrev} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg"
                        alt="abc"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>PhamAnhTu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>PhamAnhTu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
