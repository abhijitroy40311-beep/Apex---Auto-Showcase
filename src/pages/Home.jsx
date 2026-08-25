import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Intro from '../components/home/Intro';
import Featured from '../components/home/Featured';
import Process from '../components/home/Process';
import Story from '../components/home/Story';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <Featured />
      <Process />
      <Story />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
