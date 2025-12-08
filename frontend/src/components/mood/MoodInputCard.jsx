
function MoodInputCard({ text, setText, loading, onAnalyze }) {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body p-5">
        <div className="text-center mb-4">
          <div className="mb-3">
            <svg width="60" height="60" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
            </svg>
          </div>
          <h3 className="fw-bold mb-2">How are you feeling today?</h3>
          <p className="text-secondary">Share your thoughts with us. Our AI will understand and help you.</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Write about your day</label>
          <textarea
            className="form-control form-control-lg"
            rows="6"
            placeholder="Tell me what's on your mind... (minimum 10 characters)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
            style={{ resize: 'none' }}
          />
          <small className="text-muted d-block mt-2">
            {text.length} characters {text.length < 10 && `(${10 - text.length} more needed)`}
          </small>
        </div>

        <div className="d-grid">
          <button
            onClick={onAnalyze}
            disabled={loading || text.trim().length < 10}
            className="btn btn-primary btn-lg"
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Analyzing Your Mood...
              </>
            ) : (
              <>
                <svg width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                </svg>
                Analyze My Mood
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoodInputCard;