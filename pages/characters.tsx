import FetchAllCharacters from '../components/FetchAllCharacters';
import Layout from '../layout/Layout';
import styles from '../styles/Home.module.css';

export default function Characters() {
    return (
        <div>
            <Layout>
                <h1 className={styles.charactersheader}>The Simpsons Famous Quotes</h1>
                <FetchAllCharacters />
            </Layout>
        </div>
    )
}