import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {
    MessageIcon,
    KiteIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    UserIcon,
    GetCoinIcon,
    SettingIcon,
    LogoutIcon,
} from '~/components/Icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import Image from '~/components/Images';
import Search from '../Search/';
import routesConfig from '~/config/route';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'lang',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'lang',
                    code: 'fr',
                    title: 'France',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard Shortcut',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View Profile',
        to: '/profile',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Get Coin',
        to: '/getcoin',
        separate: true,
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const handeChangeMenu = (menuItem) => {
        switch (menuItem.type) {
            case 'lang':
                console.log('Chuyển đổi sang', menuItem.title, ' với code là: ', menuItem.code);
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.root} className={cx('logo-link')}>
                        <Image src={images.logo} alt="Logo tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <div className={cx('action-btn-message')}>
                                    <button className={cx('action-btn')}>
                                        <KiteIcon />
                                        <span className={cx('number')}>3</span>
                                    </button>
                                </div>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <div className={cx('action-btn-message')}>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                        <span className={cx('number')}>8</span>
                                    </button>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handeChangeMenu} hideOnClick={false}>
                        {currentUser ? (
                            <Image
                                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                className={cx('user-avatar')}
                                alt="Avatar"
                                // fallBack="https://th.bing.com/th?id=ORMS.98db51bf4b0e809e2712d849a5b43226&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
