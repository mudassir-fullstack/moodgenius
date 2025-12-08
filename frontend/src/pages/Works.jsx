const Works = () => {
  return (
    <div>
          <section className='py-5 bg-white' id='how-it-works'>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h2 className='display-5 fw-bold mb-3'>How It Works</h2>
            <p className='lead text-secondary'>Simple steps to start your mental wellness journey</p>
          </div>

          <div className='row g-4'>
            {/* Step 1 */}
            <div className='col-lg-3 col-md-6'>
              <div className='text-center'>
                <div className='bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3' style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                  1
                </div>
                <h5 className='fw-bold mb-3'>Share Your Day</h5>
                <p className='text-secondary'>
                  Tell us how you're feeling through text, voice, or video. Express yourself naturally.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='col-lg-3 col-md-6'>
              <div className='text-center'>
                <div className='bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3' style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                  2
                </div>
                <h5 className='fw-bold mb-3'>AI Analyzes</h5>
                <p className='text-secondary'>
                  Our advanced AI detects your mood and emotional state from your input.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className='col-lg-3 col-md-6'>
              <div className='text-center'>
                <div className='bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3' style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                  3
                </div>
                <h5 className='fw-bold mb-3'>Get Guidance</h5>
                <p className='text-secondary'>
                  Receive personalized stories, tips, and activities to improve your wellbeing.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className='col-lg-3 col-md-6'>
              <div className='text-center'>
                <div className='bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3' style={{width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold'}}>
                  4
                </div>
                <h5 className='fw-bold mb-3'>Track Progress</h5>
                <p className='text-secondary'>
                  Monitor your mental health journey with detailed analytics and reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Works
