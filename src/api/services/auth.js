import http from '@/api/http';

const authRouter = '/auth';

// 登入
export const login = (data) => http.post(`${authRouter}/login`, data);

// 登出
export const logout = () => http.post(`${authRouter}/logout`);

// 檢查登入狀態
export const checkAuth = () => http.get(`${authRouter}/status`);
