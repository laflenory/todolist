import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    changeTitle, 
    changeDescrption, 
    clearForm,
} from '../../store/formSlice';

import { addItem } from '../../store/todolistSlice';

import styles from './Form.module.scss';

const Form = ({ isModal = false }) => {
    const dispatch = useDispatch();

    let { 
        title, 
        modalTitle, 
        description,
        modalDescription,
        done,
    } = useSelector((state) => state.form);

    const [errors, setErrors] = useState({
        title: false,
        description: false, 
    });

    const formChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'title':
                const { title } = errors;

                if (title) {
                    setErrors((prevState) => ({ ...prevState, title: !title }));
                }

                dispatch(changeTitle({ title: value, isModal }));

                break;
            case 'description':
                const { description } = errors;

                if (description) {
                    setErrors((prevState) => ({ ...prevState, description: !description }));
                }

                dispatch((changeDescrption({ description: value, isModal })));
                
                break;
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();

        if (title && description) {
            dispatch(addItem({ title, description, done }));
            dispatch(clearForm({ isModal }));
        } else {
            if (!title) setErrors((prevState) => ({ ...prevState, title: true }));
            if (!description) setErrors((prevState) => ({ ...prevState, description: true }));
        }
    };

    return (
        <form className={styles.form} onChange={formChange} onSubmit={formSubmit}>
            <input className={errors.title ? styles.error : ''} name={'title'} type={'text'} value={isModal ? modalTitle : title} placeholder={'Заголовок'} />
            <input className={errors.description ? styles.error : ''} name={'description'} type={'text'} value={isModal ? modalDescription : description} placeholder={'Описание'} />
            {
                !isModal ? <div className={styles.form__btn}>
                    <input type={'submit'} value={'Добавить'} />
                </div> : null
            }
        </form>
    );
};

export default Form;
