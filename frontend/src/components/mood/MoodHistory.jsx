function MoodHistory({ history }) {
  // Only render if history has entries
  if (!history || history.length === 0) return null;

  const moodEmojis = {
    joy: '😊',
    sadness: '😢',
    disgust: '😰',
    stressed: '😫',
    neutral: '😐',
    anger: '😠',
    calm: '😌'
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0 fw-bold">Your Recent Mood History</h5>
      </div>
      <div className="card-body p-0">
        <div className="list-group list-group-flush">
          {history.slice(0, 6).map((item, i) => {
            if (!item.detectedMood) return null; // skip entries without mood

            const mood = item.detectedMood.toLowerCase();
            const emoji = moodEmojis[mood] || '🙂';

            return (
              <div key={i} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="fs-2">{emoji}</div>
                    <div>
                      <h6 className="mb-1 fw-bold">{item.detectedMood.toUpperCase()}</h6>
                      <small className="text-muted">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })
                          : 'Just now'}
                      </small>
                    </div>
                  </div>
                </div>
                {item.inputText && (
                  <p
                    className="mb-0 mt-2 text-muted small"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {item.inputText}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MoodHistory;
