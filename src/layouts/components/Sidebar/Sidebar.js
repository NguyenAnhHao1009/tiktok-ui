import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    DiscoverIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    DiscoverActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.root}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Discover"
                    to={config.routes.discover}
                    icon={<DiscoverIcon />}
                    activeIcon={<DiscoverActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
