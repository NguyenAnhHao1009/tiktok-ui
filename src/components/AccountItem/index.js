import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="Avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    {data.full_name}
                    {data.tick && (
                        <span>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>
                        </span>
                    )}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
