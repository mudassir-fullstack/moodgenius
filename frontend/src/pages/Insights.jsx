import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Insights() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, week, month
  const [stats, setStats] = useState({
    total: 0,
    happyCount: 0,
    sadCount: 0,
    neutralCount: 0,
    anxiousCount: 0,
    stressedCount: 0,
    calmCount: 0,
    angryCount: 0,
    longestStreak: 0,
    currentStreak: 0,
    mostCommonMood: 'neutral'
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    if (entries.length > 0) {
      calculateStats();
    }
  }, [entries, filter]);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/mood/entries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setEntries(data.entries || []);
    } catch (err) {
      console.error('Failed to fetch entries:', err);
    }
    setLoading(false);
  };

  const getFilteredEntries = () => {
    const now = new Date();
    if (filter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return entries.filter(e => new Date(e.createdAt) >= weekAgo);
    }
    if (filter === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      return entries.filter(e => new Date(e.createdAt) >= monthAgo);
    }
    return entries;
  };

  const calculateStats = () => {
    const filtered = getFilteredEntries();
    
    const moodCounts = {
      happy: 0,
      sad: 0,
      neutral: 0,
      joy: 0,
      sadness: 0,
      anger: 0,
      fear: 0,
      surprise: 0,
      disgust: 0
    };

    filtered.forEach(entry => {
      const mood = entry.detectedMood.toLowerCase();
      if (moodCounts.hasOwnProperty(mood)) {
        moodCounts[mood]++;
      } else {
        moodCounts[mood] = 1;
      }
    });

    // Find most common mood
    const mostCommon = Object.keys(moodCounts).reduce((a, b) => 
      moodCounts[a] > moodCounts[b] ? a : b
    );

    // Calculate streaks
    const sortedEntries = [...entries].sort((a, b) => 
      new Date(a.createdAt) - new Date(b.createdAt)
    );
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 1;
    
    for (let i = 1; i < sortedEntries.length; i++) {
      const prevDate = new Date(sortedEntries[i - 1].createdAt);
      const currDate = new Date(sortedEntries[i].createdAt);
      const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        tempStreak++;
      } else if (diffDays > 1) {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak);

    // Current streak (from today backwards)
    if (sortedEntries.length > 0) {
      const today = new Date();
      const lastEntry = new Date(sortedEntries[sortedEntries.length - 1].createdAt);
      const daysDiff = Math.floor((today - lastEntry) / (1000 * 60 * 60 * 24));
      
      if (daysDiff <= 1) {
        currentStreak = 1;
        for (let i = sortedEntries.length - 2; i >= 0; i--) {
          const prevDate = new Date(sortedEntries[i].createdAt);
          const nextDate = new Date(sortedEntries[i + 1].createdAt);
          const diff = Math.floor((nextDate - prevDate) / (1000 * 60 * 60 * 24));
          if (diff === 1) currentStreak++;
          else break;
        }
      }
    }

    setStats({
      total: filtered.length,
      ...moodCounts,
      longestStreak,
      currentStreak,
      mostCommonMood: mostCommon
    });
  };

  const getMoodDistribution = () => {
    const filtered = getFilteredEntries();
    const distribution = {};
    
    filtered.forEach(entry => {
      const mood = entry.detectedMood.toLowerCase();
      distribution[mood] = (distribution[mood] || 0) + 1;
    });

    return Object.entries(distribution)
      .map(([mood, count]) => ({
        mood,
        count,
        percentage: ((count / filtered.length) * 100).toFixed(1)
      }))
      .sort((a, b) => b.count - a.count);
  };

  const getRecentTrend = () => {
    const filtered = getFilteredEntries().slice(0, 7).reverse();
    return filtered.map(entry => ({
      date: new Date(entry.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      mood: entry.detectedMood
    }));
  };

  const moodColors = {
    happy: '#28a745',
    joy: '#28a745',
    sad: '#007bff',
    sadness: '#007bff',
    neutral: '#6c757d',
    angry: '#dc3545',
    anger: '#dc3545',
    anxious: '#ffc107',
    fear: '#ffc107',
    stressed: '#dc3545',
    calm: '#17a2b8',
    surprise: '#20c997',
    disgust: '#fd7e14'
  };

  const moodEmojis = {
    happy: '😊',
    joy: '😊',
    sad: '😢',
    sadness: '😢',
    neutral: '😐',
    angry: '😠',
    anger: '😠',
    anxious: '😰',
    fear: '😰',
    stressed: '😫',
    calm: '😌',
    surprise: '😲',
    disgust: '🤢'
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center bg-light py-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}></div>
          <p className="mt-3 text-secondary">Loading your insights...</p>
        </div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="bg-light pt-5">
        <div className="bg-dark text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Your Insights</h1>
          </div>
        </div>
        <div className="container py-5">
          <div className="text-center py-5">
            <svg width="100" height="100" fill="currentColor" className="text-secondary mb-4" viewBox="0 0 16 16">
              <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
            </svg>
            <h3 className="fw-bold mb-3">No Data Yet</h3>
            <p className="text-secondary mb-4">Start tracking your mood to see insights and analytics here.</p>
            <a href="/mood-check" className="btn btn-primary btn-lg">Start Tracking</a>
          </div>
        </div>
      </div>
    );
  }

  const distribution = getMoodDistribution();
  const trend = getRecentTrend();

  return (
    <div className="bg-light py-5">
      {/* Header */}
      <div className="bg-dark text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Your Mood Insights</h1>
          <p className="lead mb-0">Track your emotional journey and understand your patterns</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Filter Buttons */}
        <div className="d-flex gap-2 mb-4 justify-content-center">
          <button
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('all')}
          >
            All Time
          </button>
          <button
            className={`btn ${filter === 'week' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('week')}
          >
            Last 7 Days
          </button>
          <button
            className={`btn ${filter === 'month' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('month')}
          >
            Last 30 Days
          </button>
        </div>

        {/* Stats Cards Row 1 */}
        <div className="row g-4 mb-4">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <svg width="30" height="30" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  </svg>
                </div>
                <h2 className="display-6 fw-bold text-primary mb-2">{stats.total}</h2>
                <p className="text-secondary mb-0">Total Entries</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <svg width="30" height="30" fill="currentColor" className="text-success" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                  </svg>
                </div>
                <h2 className="display-6 fw-bold text-success mb-2">{stats.currentStreak}</h2>
                <p className="text-secondary mb-0">Current Streak</p>
              </div>
            </div>
          </div>

    
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <span className="fs-2">{moodEmojis[stats.mostCommonMood] || '😊'}</span>
                </div>
                <h2 className="display-6 fw-bold text-info mb-2 text-capitalize">{stats.mostCommonMood}</h2>
                <p className="text-secondary mb-0">Most Common Mood</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="row g-4 mb-4">
          {/* Mood Distribution */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Mood Distribution</h5>
              </div>
              <div className="card-body p-4">
                {distribution.map((item, i) => (
                  <div key={i} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4">{moodEmojis[item.mood] || '😊'}</span>
                        <span className="fw-semibold text-capitalize">{item.mood}</span>
                      </div>
                      <span className="badge bg-primary">{item.count} entries ({item.percentage}%)</span>
                    </div>
                    <div className="progress" style={{height: '20px'}}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: moodColors[item.mood] || '#6c757d'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Trend */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Recent Mood Trend (Last 7 Entries)</h5>
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-end" style={{height: '300px'}}>
                  {trend.map((item, i) => {
                    const height = 50 + (i * 30);
                    return (
                      <div key={i} className="text-center" style={{flex: 1}}>
                        <div 
                          className="rounded-top d-flex align-items-end justify-content-center"
                          style={{
                            height: `${height}px`,
                            backgroundColor: moodColors[item.mood.toLowerCase()] || '#6c757d',
                            transition: 'all 0.3s'
                          }}
                        >
                          <span className="fs-3 mb-2">{moodEmojis[item.mood.toLowerCase()] || '😊'}</span>
                        </div>
                        <small className="text-muted mt-2 d-block">{item.date}</small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Entries */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3">
            <h5 className="mb-0 fw-bold">Recent Entries</h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Mood</th>
                    <th>Entry Preview</th>
                    <th>Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredEntries().slice(0, 10).map((entry, i) => (
                    <tr key={i}>
                      <td className="text-nowrap">
                        {new Date(entry.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td>
                        <span 
                          className="badge"
                          style={{
                            backgroundColor: moodColors[entry.detectedMood.toLowerCase()] || '#6c757d'
                          }}
                        >
                          {moodEmojis[entry.detectedMood.toLowerCase()] || '😊'} {entry.detectedMood}
                        </span>
                      </td>
                      <td className="text-truncate" style={{maxWidth: '300px'}}>
                        {entry.inputText}
                      </td>
                      <td>
                        {entry.solutions ? (
                          <span className="badge bg-success">
                            <svg width="12" height="12" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            Provided
                          </span>
                        ) : (
                          <span className="badge bg-secondary">Not yet</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}