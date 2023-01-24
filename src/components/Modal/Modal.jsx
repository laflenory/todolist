import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItem } from '../../store/todolistSlice';
import { closeModal } from '../../store/modalSlice';

import styles from './Modal.module.scss';

const Modal = () => {
    const { target, id } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const [action, setAction] = useState(null);

    const handlerCloseModal = (event) => {
        const { target } = event;

        if (target.className === styles.modal__wrapper) {
            dispatch(closeModal());
        }
    };

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

    const modalContent = {
        delete: {
            title: 'Удалить элемент',
            content: <p>
                Вы собираетесь удалить элемент. 
                Восстановить элемент будет нельзя. 
                Для продолжения нажмите кнопку <strong>"Да"</strong>.
                Для отмены нажмите кнопку <strong>"Нет"</strong>.
            </p>,
        },
        update: {
            title: 'Изменить содержимое элемента',
            content: <p>
                Вы собираетесь изменить содержимое элемента. 
                Для продолжения заполните необходимые поля и нажмите кнопку <strong>"Да"</strong>.
                Для отмены нажмите кнопку <strong>"Нет"</strong>.
            </p>,
        }
    };

    return (
        <div className={styles.modal__wrapper} onClick={handlerCloseModal}>
            <div className={styles.modal}>

                <header className={styles.modal__header}>
                    <h3>{ modalContent[target].title }</h3>
                </header>
                <div className={styles.modal__content}>
                    { modalContent[target].content }
                </div>
                <div className={styles.modal__actions}>
                    <div className={styles.modal__actions__buttons}>
                        <button onClick={() => dispatch(closeModal())}>Нет</button>
                        <button className={styles.agree} onClick={() => action()}>Да</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
