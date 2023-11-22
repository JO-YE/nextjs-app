import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! Welcome to my website. This is <b>Racheal</b>, a Software Engineer(Frontend specialist). Am glad to have you here!</p>
        <p>
          You can contact me on {' '}
          <a href="https://www.linkedin.com/in/joye-a-racheal/">LinkedIn</a>.
        </p>
      </section>
    </Layout>
  );
}