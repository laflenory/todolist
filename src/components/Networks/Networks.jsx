import styles from './Networks.module.scss';

import { 
    FaGithub, 
    FaLinkedinIn,
} from 'react-icons/fa';

const Networks = () => {
    return (
        <div className={styles.networks}>
            <a href='https://github.com/laflenory' target={'_blank'}>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/artyom-tarasov-375ab7248/' target={'_blank'}>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default Networks;
