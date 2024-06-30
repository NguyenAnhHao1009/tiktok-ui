import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ items, children, onChange = defaultFunc, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prevHistory) => [...prevHistory, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleResetToFirstPage = (prev) => prev.slice(0, prev.length - 1);

    const handleResetMenu = () => {
        setHistory(handleResetToFirstPage);
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleResetMenu} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            delay={[0, 500]}
            interactive={true}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
