import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItem } from '../../store/todolistSlice';
import { closeModal } from '../../store/modalSlice';

import styles from './Modal.module.scss';

const Delete = ({ dispatch, action }) => {
    return (
        <>
            <header className={styles.modal__header}>
                <h3>Подтвердите удаление элемента</h3>
            </header>
            <div className={styles.modal__content}>
                <p>
                    Вы собираетесь удалить элемент. 
                    Восстановить элемент будет нельзя. 
                    Для продолжения нажмите кнопку <strong>"Да"</strong>.
                    Для отмены нажмите кнопку <strong>"Нет"</strong>.
                    
                </p>
            </div>
            <div className={styles.modal__actions}>
                <div className={styles.modal__actions__buttons}>
                    <button onClick={() => dispatch(closeModal())}>Нет</button>
                    <button className={styles.agree} onClick={() => action()}>Да</button>
                </div>
            </div>
        </>
    );
};

const Modal = () => {
    const { target, id } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const [action, setAction] = useState(null);

    const handlerCloseModal = (event) => {
        const { target } = event;

        if (target.className === styles.modal__wrapper) {
            dispatch(closeModal());
        }
    }

    useEffect(() => {
        switch (target) {
            case 'update':
                break;
            case 'delete':
                setAction(() => () => { 
                    dispatch(deleteItem({ id }));
                    dispatch(closeModal());
                });
                break;
        }
    }, []);

    return (
        <div className={styles.modal__wrapper} onClick={handlerCloseModal}>
            <div className={styles.modal}>
                {
                    target === 'delete' ? <Delete 
                        dispatch={dispatch}
                        action={action}
                    /> : null
                }
            </div>
        </div>
    );
};

export default Modal;
