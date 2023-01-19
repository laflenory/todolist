import styles from './Item.module.scss';

import { FaTrash } from 'react-icons/fa';

const Item = ({ title, description }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__content}>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
            <div className={styles.item__actions}>
                <FaTrash />
            </div>
        </div>
    );
}

export default Item;
