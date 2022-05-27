import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem.js';
import Header from './Header.js';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = current.data.map((item, index) => {
        const isParrent = !!item.children;
        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isParrent) {
                        setHistory((pre) => [...pre, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        );
    });
    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItem}</div>
                    </PopperWrapper>
                </div>
            )}
            interactive
            placement="bottom-end"
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
