function MoodResultCard({ result, loadingSolution, onGetSolutions }) {
  if (!result) return null;

    const moodEmojis = {
    joy: '😊',
    sadness: '😢',
    disgust: '😰',
    stressed: '😫',
    neutral: '😐',
    anger: '😠',
    calm: '😌'
  };

  const mood = result.mood?.toLowerCase() || 'neutral';
  const colorClass = 'dark';
  const emoji = moodEmojis[mood] || '🙂';

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className={`card-header bg-${colorClass} text-white py-4`}>
        <div className="text-center">
          <div className="display-3 mb-2">{emoji}</div>
          <h3 className="mb-0">
            You're feeling <strong>{result.mood?.toUpperCase() || "NEUTRAL"}</strong>
          </h3>
        </div>
      </div>
      <div className="card-body p-5 text-center">
        <p className="lead mb-4 text-secondary">
          Our AI has analyzed your mood. Click below to get personalized suggestions and activities to help you feel better.
        </p>
        <button
          onClick={onGetSolutions}
          disabled={loadingSolution}
          className="btn btn-primary btn-lg px-5"
        >
          {loadingSolution ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Generating Solutions...
            </>
          ) : (
            <>
              <svg width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
              </svg>
              Get Personalized Solutions
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default MoodResultCard;