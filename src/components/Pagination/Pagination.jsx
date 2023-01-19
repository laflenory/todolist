import { useState } from 'react';

import styles from './Pagination.module.scss';

const Pagination = () => {
    const [active, setActive] = useState(0);

    const handlerSetActive = (index) => {
        setActive(index);
    }

    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination__list}>
                { 
                    [1, 2, 3, 4, 5].map((page, index) => (
                        <li 
                            className={
                                active === index 
                                    ? styles.active 
                                    : null
                            } 
                            onClick={
                                () => handlerSetActive(index)
                            }
                        >
                                { page }
                        </li>
                    )) 
                }
            </ul>
        </div>
    );
}

export default Pagination;
