import Head from "next/head";
import Navbar from '../components/Navbar';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>The simpsons DB</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
