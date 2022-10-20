import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import styles from '../../assets/css/Home.module.css';
import { AppState } from 'src/store/store';
import { increment, decrement } from 'src/store/slide/counter';

const Counter: NextPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: AppState) => state.counter.value);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className={styles.main}>
        <div>
          counter: {counter}
        </div>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
      </main>
    </div>
  );
};

export default Counter;