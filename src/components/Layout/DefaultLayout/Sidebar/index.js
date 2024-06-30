import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

function Sidebar() {
    const cx = classNames.bind(styles);

    return <aside className={cx('wrapper')}><p>Nav Sidebar</p></aside>;
}

export default Sidebar;
