import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const CTA = () => {
  const navigate = useNavigate();
    const { user } = useAuth();
  
    const handleGetStarted = () => {
      if (user) {
        navigate("/mood-check");   // logged-in
      } else {
        navigate("/login");        // not logged-in
      }
    };
  return (
    <div>
         <section className='py-5 bg-light'>
        <div className='container py-5'>
          <div className='text-center'>
            <h2 className='display-5 fw-bold mb-4'>Ready to Start Your Mental Wellness Journey?</h2>
            <p className='lead text-secondary mb-4'>
              Join thousands improving their mental health with Mood Genius
            </p>
                    <button 
      onClick={handleGetStarted} 
      className='btn btn-primary btn-lg px-4'
    >
      Get Started Free
    </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
