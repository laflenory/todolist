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
            <div className={styles.list__items}>
                { 
                    items.length ? items.map(({ title, description }, index) => (
                        <Item title={title} description={description} id={index} key={index} />
                    )) : <>
                        <p>На данный момент текущий список задач пуст.</p>
                    </>
                }
            </div>
            {/* <Pagination /> */}
        </div>
    );
}

export default List;
