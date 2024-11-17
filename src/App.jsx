/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { ArrowRight, Phone, MapPin, Mail, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import css from './App.css'

const App = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: ''
  });

  const projects = [
    {
      id: '01',
      title: 'Square Project',
      image: '/api/placeholder/600/400'
    },
    {
      id: '02',
      title: 'Square Project',
      image: '/api/placeholder/600/400'
    },
    {
      id: '03',
      title: 'Square Project',
      image: '/api/placeholder/600/400'
    },
    {
      id: '04',
      title: 'Square Project',
      image: '/api/placeholder/600/400'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Modern building" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 w-full p-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">AGRESSOV</h1>
            <div className="flex gap-6">
              <button className="hover:text-gold transition-colors">Menu</button>
            </div>
          </nav>
        </div>
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
          <h2 className="text-6xl font-bold mb-4">WITH YOU.<br/>ALWAYS</h2>
          <button className="bg-gold px-6 py-3 rounded-full hover:bg-opacity-80 transition-all">
            Book now
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-16">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gold mb-8">ABOUT US</h2>
            <p className="text-lg mb-8">
              A Union of Agressov Group & Abbott Hotels. Both have been pioneers from almost 3 decades 
              in Real Estate & Hospitality respectively. They have left a benchmark in their own fields & 
              now have joined hands to make an alliance.
            </p>
            <p className="text-lg mb-8">
              United Emperors is a perfect consolidation of Real Estate & Hospitality Industry.
            </p>
            <button className="flex items-center gap-2 text-gold hover:gap-4 transition-all">
              Learn more <ArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gold">1000</h3>
              <p>Room alloted</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gold">12</h3>
              <p>Buildings</p>
            </div>
            <div className="text-center">
              <p className="text-xl">And your happiness.<br/>Priceless...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-16">
        <h2 className="text-4xl font-bold text-gold mb-12">PROJECTS</h2>
        <div className="grid grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveProject(index)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div>
                  <div className="text-gold mb-2">{project.id}</div>
                  <h3 className="text-2xl">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-16">
        <h2 className="text-4xl font-bold text-gold mb-12">CONTACTS</h2>
        <div className="grid grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-800 p-4 rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 p-4 rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="w-full bg-gray-800 p-4 rounded"
              value={formData.telephone}
              onChange={(e) => setFormData({...formData, telephone: e.target.value})}
            />
            <textarea
              placeholder="Message"
              className="w-full bg-gray-800 p-4 rounded h-32"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button 
              type="submit"
              className="w-full bg-gold py-4 rounded hover:bg-opacity-80 transition-colors"
            >
              SEND
            </button>
          </form>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-gold" />
              <span>000- XXX14120 / 000 - XXXX4144</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-gold" />
              <span>8th floor, The Affaires, XYZ Beach road, Dreamland, Fantasy Land, Unknown - 000 000.</span>
            </div>
            <div className="flex gap-6 text-gold">
              <Facebook className="hover:scale-110 transition-transform cursor-pointer" />
              <Twitter className="hover:scale-110 transition-transform cursor-pointer" />
              <Send className="hover:scale-110 transition-transform cursor-pointer" />
              <Instagram className="hover:scale-110 transition-transform cursor-pointer" />
              <Mail className="hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-16 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Agressov Group</h2>
            <p className="text-sm text-gray-400">All Rights Reserved 2019</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;