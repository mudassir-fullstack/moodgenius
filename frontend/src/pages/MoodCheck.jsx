import React, { useState, useEffect } from 'react';
import MoodInputCard from '../components/mood/MoodInputCard.jsx';
import MoodResultCard from '../components/mood/MoodResultCard.jsx';
import SolutionsCard from '../components/mood/SolutionsCard.jsx';
import MoodHistory from '../components/mood/MoodHistory.jsx';
import api from '../services/Api.jsx';

export default function MoodCheck() {
  
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingSolution, setLoadingSolution] = useState(false);
  const [result, setResult] = useState(null);
  const [solutions, setSolutions] = useState(null);
  const [history, setHistory] = useState([]);

  // ✅ Load history on mount
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get('/api/mood/entries');
        setHistory(res.data.entries);
      } catch (err) {
        console.error("Failed to load history:", err);
      }
    };
    fetchHistory();
  }, []);

  const handleAnalyze = async () => {
  if (!text.trim()) return;

  setLoading(true);
  setSolutions(null);

  try {
    const res = await api.post('/api/mood/analyze', { text });
    const newEntry = res.data;

    setResult(newEntry);
    setText('');

    // Optimistic update: instantly show new entry
    setHistory(prev => [newEntry, ...prev]);

    // Then sync with server in background (optional but recommended)
    api.get('/api/mood/entries')
      .then(historyRes => {
        setHistory(historyRes.data.entries);
      })
      .catch(err => {
        console.error("Failed to refresh history:", err);
        // Optionally show toast: "History may be outdated"
      });

  } catch (err) {
    console.error('Analyze error:', err);
    alert('Failed to analyze mood. Please try again.');
  } finally {
    setLoading(false);
  }
};
  const handleGetSolution = async () => {
    if (!result?.entryId) {
      alert("No entry ID found!");
      return;
    }

    setLoadingSolution(true);

    try {
      const res = await api.post('/api/mood/solutions', { entryId: result.entryId });
      setSolutions(res.data);
      console.log("Solutions received:", res.data);
    } catch (err) {
      console.error("Solution error:", err);
      alert('Failed to get solutions. Please try again.');
    } finally {
      setLoadingSolution(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">Mood Genius</a>
          <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <MoodInputCard text={text} setText={setText} loading={loading} onAnalyze={handleAnalyze} />
            <MoodResultCard result={result} loadingSolution={loadingSolution} onGetSolutions={handleGetSolution} />
            <SolutionsCard solutions={solutions} />
          </div>
          <div className="col-lg-4">
            <MoodHistory history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}
