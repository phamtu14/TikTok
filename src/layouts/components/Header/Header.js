import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { MessageIcon, UploadIcon, InboxIcon } from '../../../components/Icons';

import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import Button from '../../../components/Button';

import Menu from '../../../components/Popper/Menu';
import Image from '../../../components/Image';
import Search from '../Search/Search';
import config from '../../../config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'languages',
                    code: 'en',
                    title: 'English',
                },
                { type: 'languages', code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    //handle menu change
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //hande change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </div>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <span>{<UploadIcon />}</span>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <span>{<MessageIcon />}</span>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <span>{<InboxIcon />}</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/231f0ae6656d38c9bb1d0feb617d7394~c5_100x100.jpeg?x-expires=1683529200&x-signature=mLcI6axaxpjpuAepD9%2BW0b6dT0k%3D"
                                alt="Pham Tu"
                            />
                        ) : (
                            <div>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
