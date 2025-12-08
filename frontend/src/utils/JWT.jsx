export const VerifyToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(window.atob(base64));
    
    if (payload.exp * 1000 < Date.now()) throw new Error('Token expired');
    return payload;

  } catch (err) {
    return null;  // <-- prevents crash
  }
};
