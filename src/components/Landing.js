import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import artisan1 from '../assets/artisan1.jpeg';
import artisan2 from '../assets/artisan2.webp';
import artisan3 from '../assets/artisan3.avif';
import heroVideo from '../assets/heroVideo.mp4';
import bgImage from '../assets/bg.jpg';
import WhatWeOffer from './WhatWeOffer';

const Landing = () => {
  return (
    <div
  className="min-h-screen font-sans text-gray-800 relative overflow-hidden"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      {/* Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10"
      >
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          Hunar
        </h1>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/about" className="hover:text-orange-600">About Us</Link>
          <Link to="/artisan" className="hover:text-orange-600">Explore Artisans</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact Us</Link>
        </nav>
        <div className="space-x-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Sign Up</button>
          <Link to="/login">
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log In</button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="flex justify-center items-center px-6 py-20 relative z-10">
  <div className="max-w-4xl w-full relative text-center overflow-hidden rounded-2xl shadow-lg h-[400px]">
    
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
    />

    {/* Overlay Content*/}
    <div className="relative z-10 bg-white/20 p-10 h-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        Discover the Soul of Indian Craftsmanship
      </h2>
      <p className="text-gray-700 mb-6">
        Connect with artisans, learn ancient techniques, and explore the rich heritage of India.
      </p>

      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium z-10"
        >
          <Link to="/workshops" className="relative z-10">Explore Craft</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium"
        >
          <Link to="/login" className="relative z-10">Join as an Artist</Link>
        </motion.button>
      </div>
    </div>
  </div>
</section>

      {/* Our Mission */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255,165,0,0.4)' }}
    transition={{ type: 'spring', stiffness: 200 }}
    className="bg-white/80 backdrop-blur-md border border-orange-300 shadow-md p-8 rounded-2xl"
  >
    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      Hunar revives Indian craftsmanship by connecting artisans with learners through engaging and immersive workshops that keep culture alive.
    </p>
  </motion.div>
</section>

      {/* What We Offer */}
      <WhatWeOffer>
      </WhatWeOffer>

      {/* Artisan Spotlights */}
      <section className="px-6 py-10 max-w-6xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Artisan Spotlights</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[
            {
              name: 'Rohan Verma',
              title: 'Handcrafted Textiles',
              image: artisan1,
            },
            {
              name: 'Piya Sharma',
              title: 'Intricate Saree Embroidery',
              image: artisan2,
            },
            {
              name: 'Arun Singh',
              title: 'Clay masterpieces by molding through culture.',
              image: artisan3,
            }
          ].map((artisan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img src={artisan.image} alt={artisan.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800">{artisan.name}</h4>
                <p className="text-sm text-gray-600">{artisan.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hunar x SDG Impact Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto text-center bg-white rounded-2xl mt-12 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Hunar & Sustainable Development</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Hunar is where <span className="font-semibold italic text-orange-600">कला</span> meets purpose, because <span className="font-semibold">"लोक कला ही लोक शक्ति है."</span><br/>
          Our mission aligns with the United Nations Sustainable Development Goals (SDGs) to empower artisans, reduce inequality, and promote inclusive education.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              icon: "SDG 4",
              title: "Quality Education",
              desc: "Workshops promote inclusive and lifelong learning opportunities.",
            },
            {
              icon: "SDG 8",
              title: "Decent Work & Economic Growth",
              desc: "By supporting artisans, we boost rural employment and entrepreneurship.",
            },
            {
              icon: "SDG 10",
              title: "Reduced Inequalities",
              desc: "We bridge the gap between local talent and global opportunities.",
            }
          ].map((goal, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 shadow-md"
            >
              <div className="text-4xl mb-3">{goal.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{goal.title}</h4>
              <p className="text-sm text-gray-700">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="px-6 py-10 max-w-xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">Subscribe for workshops, artisan stories, and updates.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
  onClick={() => alert("Thank you for subscribing! 📬")}
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium"
>
  Subscribe
</button>
        </div>
      </section>
    </div>
  );
};

export default Landing;





