"use client";

import Footerbar from '@/components/FooterMenu';
import MiddleImage from '@/components/MiddleImage';
import SecondMenu from '@/components/SecondMenu';
import TopMenu from '@/components/TopMenu';

/** The Home page. */
const Home = () => (
  <main>
      <TopMenu/>
      <SecondMenu/>
      <MiddleImage/>
      <Footerbar/>
  </main>
);

export default Home;
