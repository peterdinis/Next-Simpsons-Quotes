import Layout from '../layout/Layout'
import styles from '../styles/Home.module.css';
import {CharacterButton, CharacterButtonLink, HeadOne, SubHead} from '../design/Home.styled';

export default function Home() {
  return (
    <div>
        <Layout>
            <div className={styles.head}>
              <HeadOne>The Simpsons Site</HeadOne>
              <SubHead>Find your favorite character in DB</SubHead>
              <CharacterButton>
                <CharacterButtonLink href='/characters'>All Characters</CharacterButtonLink>
              </CharacterButton>
            </div>
        </Layout>
    </div>
  )
}
