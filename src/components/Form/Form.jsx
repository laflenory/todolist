import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../store/todolistSlice';

import styles from './Form.module.scss';

const Form = () => {
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const formChange = (event) => {
        const { name } = event.target;

        switch (name) {
            case 'title':
                setTitle(event.target.value);
                break;
            case 'description':
                setDescription(event.target.value);
                break;
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        
        dispatch(addItem({ title, description }));

        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.form} onChange={formChange} onSubmit={formSubmit}>
            <input name={'title'} type={'text'} value={title} placeholder={'Заголовок'} />
            <input name={'description'} type={'text'} value={description} placeholder={'Описание'} />
            <div className={styles.form__btn}>
                <input type={'submit'} value={'Добавить'} />
            </div>
        </form>
    );
}

export default Form;
