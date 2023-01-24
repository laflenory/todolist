import { useSelector } from 'react-redux';

import { 
    Header, 
    Form, 
    List,
    Modal,
} from './components';

const Application = () => {
    const modalOpen = useSelector((state) => state.modal.open);

    return (
        <>
            <div className={'container'}>
                <Header />
                <Form />
                <List />
            </div>
            { modalOpen ? <Modal /> : null }
        </>
    );
}

export default Application;
