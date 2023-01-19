import { useState } from 'react';

import styles from './Form.module.scss';

const Form = () => {
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
    }

    return (
        <form className={styles.form} onChange={formChange} onSubmit={formSubmit}>
            <input name={'title'} type={'text'} value={title} placeholder={'Заголовок'} />
            <input name={'description'} type={'text'} value={description} placeholder={'Описание'} />
            <div className={styles.form__btn}>
                <input type={'submit'} value={'ДОБАВИТЬ'} />
            </div>
        </form>
    );
}

export default Form;
