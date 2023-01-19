import { Networks } from '../../components';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <h1>todolist</h1>
            </div>
            <Networks />
        </header>
    );
}

export default Header;
