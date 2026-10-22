import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Gallery from './components/Gallery';
import AboutCreator from './components/AboutCreator';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-bone selection:bg-electric selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* Main Experience */}
      <main>
        {/* Cinematic Hero */}
        <Hero 
          onOpenProject={(proj) => setSelectedProject(proj)}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* Social Proof & Festival Trust Strip */}
        <TrustStrip />

        {/* Filterable Works Gallery */}
        <Gallery 
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* About the Director & Commission Packages */}
        <AboutCreator 
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* Direct Booking & Inquiry Section */}
        <InquirySection />
      </main>

      {/* Console Footer */}
      <Footer />

      {/* Cinema Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={() => {
            setSelectedProject(null);
            setIsInquiryModalOpen(true);
          }}
        />
      )}

      {/* Direct Commission Inquiry Modal */}
      {isInquiryModalOpen && (
        <InquirySection 
          isOpenModal={true}
          onCloseModal={() => setIsInquiryModalOpen(false)}
        />
      )}
    </div>
  );
}
