import api from './api';

export const authService = {

    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

   login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);

    console.log("LOGIN RESPONSE:", response.data); // 🔥 DEBUG

    // ✅ FIXED TOKEN EXTRACTION
    const token =
        response.data.token ||
        response.data.accessToken ||
        response.data.jwt;

    if (token) {
        localStorage.setItem('token', token);

        localStorage.setItem('user', JSON.stringify({
            id: response.data.id,
            username: response.data.username,
            email: response.data.email,
            role: response.data.role,
        }));
    } else {
        console.error("❌ Token not found in response");
    }

    return response.data;
},

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },
};

export default authService;

{/*
    
  authService → talks to backend & localStorage  
    
    
    
    
    
    
    
    */}

    