import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar page</h2>
        </aside>
    );
}
