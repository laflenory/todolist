import { useState } from 'react';

import styles from './Pagination.module.scss';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
    const [active, setActive] = useState(0);

    const handlerSetActive = (index) => {
        if (pages.includes(index + 1)) {
            setActive(index);
        }
    }

    const pages = [1, 2, 3, 4, 5];

    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination__list}>
                <li onClick={() => handlerSetActive(active - 1)}>
                    <FaAngleLeft />
                </li>
                { 
                    pages.map((page, index) => (
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
                <li onClick={() => handlerSetActive(active + 1)}>
                    <FaAngleRight />
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
