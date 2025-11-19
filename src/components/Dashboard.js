import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaList, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import RecommendationGraph from './RecommendationGraph';
import ArtisanMap from './ArtisanMap';
import RecommendationTiles from './RecommendationTiles';
import Bai from '../assets/bai.jpg';
import Piya from '../assets/piya.jpg';
import Ayuk from '../assets/ayuk.jpg';
import bgImage from '../assets/bg.jpg';
import starsVideo from '../assets/starsVideo.mp4';
import Terracotta from '../assets/terracotta.webp';
import Silk from '../assets/silk.jpeg';
import Rosewood from '../assets/rosewood.jpg';

const Dashboard = () => {
  const navigate = useNavigate();
  const [setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [mode, setMode] = useState('');
  const [type, setType] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [recMode, setRecMode] = useState('spiderweb');
  const [craftQuery, setCraftQuery] = useState('');

  const workshops = [
    { title: 'Clay Creations Studio', category: 'Pottery', location: 'Pune', mode: 'Offline', type: 'Studio' },
    { title: 'Threads of Tradition', category: 'Textile', location: 'Mumbai', mode: 'Online', type: 'Webinar' },
    { title: 'Carving Craftsmanship', category: 'Wood Carving', location: 'Bihar', mode: 'Offline', type: 'Workshop' }
  ];

  const filteredWorkshops = workshops.filter(w =>
    w.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || w.category.toLowerCase().includes(category.toLowerCase())) &&
    (location === '' || w.location.toLowerCase().includes(location.toLowerCase())) &&
    (mode === '' || w.mode.toLowerCase().includes(mode.toLowerCase())) &&
    (type === '' || w.type.toLowerCase().includes(type.toLowerCase()))
  );

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
      <div className="min-h-screen px-6 py-10">

        {/* Header */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10"
        >
          <Link to="/" className="text-xl font-bold text-gray-900 flex items-center gap-2 hover:text-orange-600 transition">
    Hunar
  </Link>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/about" className="hover:text-orange-600">About Us</Link>
            <Link to="/artisan" className="hover:text-orange-600">Explore Artisans</Link>
            <Link to="/contact" className="hover:text-orange-600">Contact Us</Link>
          </nav>
          <div className="space-x-3">
            <Link to="/">
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log Out</button>
            </Link>
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg mt-4"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Craft Journey</h2>

          {/* Self Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaUserCircle className="text-gray-500 text-2xl" />
              Profile Overview
            </h3>
            <p><strong>Name:</strong> Meera Jain</p>
            <p><strong>Location:</strong> Pune, Maharashtra</p>
            <p><strong>Interested in Learning:</strong> Pottery, Embroidery, Bamboo Craft</p>
          </div>

          {/* Skill Tracker */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Skill Learning Tracker</h3>
            {[{ skill: 'Pottery Basics', progress: 75 }, { skill: 'Textile Weaving', progress: 50 }, { skill: 'Wood Carving', progress: 20 }].map(({ skill, progress }, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{skill}</span>
                  <span>{progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <button onClick={() => navigate('/workshops')} className="text-orange-600 hover:underline font-medium">Explore More →</button>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Recommendations</h3>
            <div className="flex space-x-4 border-b mb-4">
              <button
                className={`px-4 py-2 font-medium ${recMode === 'spiderweb' ? 'border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setRecMode('spiderweb')}
              >
                Spiderweb
              </button>
              <button
                className={`px-4 py-2 font-medium ${recMode === 'tile' ? 'border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setRecMode('tile')}
              >
                Tile Sketch
              </button>
            </div>
            <input
              type="text"
              placeholder="Search a craft (e.g. Pottery, Weaving)"
              className="w-full border px-4 py-2 rounded-md shadow-sm mb-4"
              value={craftQuery}
              onChange={(e) => setCraftQuery(e.target.value)}
            />
           {recMode === 'spiderweb' ? (
  <div className="relative overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={starsVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10">
    <RecommendationGraph startingCraft={craftQuery || 'Pottery'} />
  </div>
</div>

) : (
  <RecommendationTiles startingCraft={craftQuery || 'Pottery'} />
)}
          </div>

          {/* Wishlist */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Wishlist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ title: 'Terracotta Pottery', image: Terracotta}, { title: 'Silk Weaving', image: Silk}, { title: 'Rosewood Carving', image:Rosewood}].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-4 text-center">
                    <p className="font-medium text-gray-800">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nearby Workshops */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Nearby Workshops</h3>
            <div className="grid sm:grid-cols-4 gap-4 mb-4">
              <input type="text" placeholder="Category" className="border px-4 py-2 rounded-md" value={category} onChange={(e) => setCategory(e.target.value)} />
              <input type="text" placeholder="Location" className="border px-4 py-2 rounded-md" value={location} onChange={(e) => setLocation(e.target.value)} />
              <input type="text" placeholder="Online/Offline" className="border px-4 py-2 rounded-md" value={mode} onChange={(e) => setMode(e.target.value)} />
              <input type="text" placeholder="Type" className="border px-4 py-2 rounded-md" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="flex justify-end items-center space-x-2 mb-4">
              <button onClick={() => setViewMode('list')} className={`flex items-center px-3 py-1 rounded ${viewMode === 'list' ? 'bg-orange-100' : 'bg-gray-100'} hover:bg-gray-200`}><FaList className="mr-1" /> List View</button>
              <button onClick={() => setViewMode('map')} className={`flex items-center px-3 py-1 rounded ${viewMode === 'map' ? 'bg-orange-100' : 'bg-gray-100'} hover:bg-gray-200`}><FaMapMarkerAlt className="mr-1" /> Map View</button>
            </div>
            {viewMode === 'list' ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {filteredWorkshops.map((w, i) => (
                  <li key={i}>{w.title}</li>
                ))}
              </ul>
            ) : (
              <ArtisanMap />
            )}
          </div>

          {/* Saved Artisans */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Saved Artisan Storyboard</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ name: 'Bai Patel', image: Bai }, { name: 'Piya Sharma', image: Piya }, { name: 'Ayuk Singh', image: Ayuk }].map((artisan, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img src={artisan.image} alt={artisan.name} className="w-full h-40 object-cover" />
                  <div className="p-4 text-center">
                    <p className="font-medium text-gray-800">Meet {artisan.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

