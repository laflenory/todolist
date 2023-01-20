import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../store/todolistSlice';

import styles from './Form.module.scss';

const Form = () => {
    const dispatch = useDispatch();

    const [item, setItem] = useState({
        title: '',
        description: '',
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false, 
    });

    const formChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'title':
                if (value) {
                    const { title } = errors;

                    if (title) setErrors((prevState) => ({ ...prevState, title: !title }));

                    setItem((prevState) => ({
                        ...prevState,
                        title: value,
                    }));
                }

                break;
            case 'description':
                if (value) {
                    const { description } = errors;

                    if (description) setErrors((prevState) => ({ ...prevState, description: !description }));

                    setItem((prevState) => ({
                        ...prevState,
                        description: value,
                    }));
                }

                break;
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        
        const { title, description } = item;

        if (title && description) {
            dispatch(addItem({ title, description }));
            setItem({ title: '', description: '' });
        } else {
            if (!title) setErrors((prevState) => ({ ...prevState, title: true }));
            if (!description) setErrors((prevState) => ({ ...prevState, description: true }));
        }
    }

    return (
        <form className={styles.form} onChange={formChange} onSubmit={formSubmit}>
            <input className={errors.title ? styles.error : ''} name={'title'} type={'text'} value={item.title} placeholder={'Заголовок'} />
            <input className={errors.description ? styles.error : ''} name={'description'} type={'text'} value={item.description} placeholder={'Описание'} />
            <div className={styles.form__btn}>
                <input type={'submit'} value={'Добавить'} />
            </div>
        </form>
    );
}

export default Form;
