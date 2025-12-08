import React from 'react'

const Features = () => {
  return (
    <div>
          <section className='py-5 bg-light' id='features'>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h2 className='display-5 fw-bold mb-3'>Features Designed for You</h2>
            <p className='lead text-secondary'>Everything you need to track and improve your mental wellbeing</p>
          </div>

          <div className='row g-4'>
            {/* Feature 1 - Mood Tracking */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-primary' viewBox='0 0 16 16'>
                        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>
                        <path d='M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>Mood Tracking</h4>
                  <p className='text-secondary mb-0'>
                    Easily log your daily moods through text, voice, or emoji selection. Track patterns over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - AI Insights */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-success bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-success' viewBox='0 0 16 16'>
                        <path d='M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z'/>
                        <path d='M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>AI Insights</h4>
                  <p className='text-secondary mb-0'>
                    Get personalized recommendations and insights based on your mood patterns and mental health journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Progress Reports */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-info bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-info' viewBox='0 0 16 16'>
                        <path d='M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>Progress Reports</h4>
                  <p className='text-secondary mb-0'>
                    Visualize your mental health progress with beautiful charts and detailed weekly reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Voice & Video Input */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-warning' viewBox='0 0 16 16'>
                        <path d='M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z'/>
                        <path d='M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>Voice & Video Input</h4>
                  <p className='text-secondary mb-0'>
                    Express yourself naturally with voice messages or video recordings. We convert them to text for analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 - Secure & Private */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-danger bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-danger' viewBox='0 0 16 16'>
                        <path d='M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z'/>
                        <path d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>Secure & Private</h4>
                  <p className='text-secondary mb-0'>
                    Your data is encrypted and protected with PostgreSQL RLS. We never share your personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 - 24/7 AI Support */}
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition'>
                <div className='card-body p-4 text-center'>
                  <div className='mb-4'>
                    <div className='bg-secondary bg-opacity-10 rounded-circle d-inline-flex p-3'>
                      <svg width='40' height='40' fill='currentColor' className='text-secondary' viewBox='0 0 16 16'>
                        <path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z'/>
                        <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z'/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='fw-bold mb-3'>24/7 AI Support</h4>
                  <p className='text-secondary mb-0'>
                    Get instant support anytime, anywhere. Our AI coach is always available to help you feel better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Features
