import { Item, Pagination } from '../../components';

import styles from './List.module.scss';

const List = () => {
    const items = [
        { title: 'Привет, Мир!', description: 'Всем привет, меня зовут Артём!' },
        { title: 'Привет, Мир!', description: 'Всем привет, меня зовут Артём!' },
        { title: 'Привет, Мир!', description: 'Всем привет, меня зовут Артём!' },
        { title: 'Привет, Мир!', description: 'Всем привет, меня зовут Артём!' },
    ];

    return (
        <div className={styles.list}>
            <header className={styles.list__header}>
                <h2>Текущий список задач</h2>
            </header>
            <div className={styles.list__items}>
                { items.map(({ title, description }) => <Item title={title} description={description} />) }
            </div>
            <Pagination />
        </div>
    );
}

export default List;
