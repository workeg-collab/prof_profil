import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CompanyPolicies from './components/CompanyPolicies';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import WhyUs from './components/WhyUs';
import QuoteFormSection from './components/QuoteFormSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-['Cairo',sans-serif] selection:bg-amber-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CompanyPolicies />
        <ServicesSection />
        <ClientsSection />
        <WhyUs />
        <QuoteFormSection />
      </main>
      <ContactFooter />
    </div>
  );
}
