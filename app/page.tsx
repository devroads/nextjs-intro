import {Inter} from '@next/font/google'
import styles from './page.module.css'
import Intro from "../components/intro/Intro";
import PostList from "../components/post-list/PostList";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className={styles.main}>
            <Intro/>
            <PostList/>
        </main>
    )
}
