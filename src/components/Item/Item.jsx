import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/todolistSlice';

import styles from './Item.module.scss';

import { FaTrash } from 'react-icons/fa';

const Item = ({ title, description, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.item}>
            <div className={styles.item__content}>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
            <div className={styles.item__actions}>
                <FaTrash onClick={() => dispatch(deleteItem({ id }))} />
            </div>
        </div>
    );
}

export default Item;
