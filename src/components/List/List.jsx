import { useSelector } from 'react-redux';

import { Item, Pagination } from '../../components';

import styles from './List.module.scss';

const List = () => {
    const items = useSelector((state) => state.todolist.items);

    return (
        <div className={styles.list}>
            <header className={styles.list__header}>
                <h2>Текущий список задач</h2>
            </header>
            <ul className={styles.list__items}>
                { 
                    items.length ? items.map(({ title, description, done, id }, index) => (
                        <li key={index}>
                            <Item 
                                title={title} 
                                description={description} 
                                done={done} 
                                id={id} 
                            />
                        </li>
                    )) : <>
                        <p>На данный момент текущий список задач пуст.</p>
                    </>
                }
            </ul>
            {/* <Pagination /> */}
        </div>
    );
}

export default List;
