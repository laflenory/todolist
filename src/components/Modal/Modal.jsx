import { 
    useDispatch, 
    useSelector,
} from 'react-redux';

import { updateItem, deleteItem } from '../../store/todolistSlice';
import { closeModal } from '../../store/modalSlice';

import styles from './Modal.module.scss';

const Delete = ({ dispatch, action, onClose }) => {
    return (
        <div className={styles.modal__wrapper} onClick={onClose}>
            <div className={styles.modal}>
                <header className={styles.modal__header}>
                    <h3>Удалить элемент</h3>
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
            </div>
        </div>
    );
};

const Update = ({ dispatch, action, onClose }) => {
    return (
        <div className={styles.modal__wrapper} onClick={onClose}>
            <div className={styles.modal}>
                <header className={styles.modal__header}>
                    <h3>Изменить содержимое элемента</h3>
                </header>
                <div className={styles.modal__content}>
                    <p>
                        Вы собираетесь изменить содержимое элемента. 
                        Для продолжения заполните необходимые поля и нажмите кнопку <strong>"Да"</strong>.
                        Для отмены нажмите кнопку <strong>"Нет"</strong>.
                    </p>
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

const Modal = () => {
    const { target, id } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    let action = null;

    if (target === 'update') {
        action = (title, description) => {
            dispatch(updateItem({ title, description, id }));
            dispatch(closeModal());
        };
    } else {
        action = () => {
            dispatch(deleteItem({ id }));
            dispatch(closeModal());
        };
    }

    const handlerCloseModal = (event) => {
        const { target } = event;

        if (target.className === styles.modal__wrapper) {
            dispatch(closeModal());
        }
    };

    return (
        target === 'delete' 
            ? <Delete 
                dispatch={dispatch} 
                action={action} 
                onClose={handlerCloseModal} 
            /> 
            : <Update 
                dispatch={dispatch}
                action={action}
                onClose={handlerCloseModal}
            />
    );
};

export default Modal;
