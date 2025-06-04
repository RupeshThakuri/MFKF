import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactComp: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 sm:py-20 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <ContactHeader />
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactComp;