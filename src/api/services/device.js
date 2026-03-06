import http from '@/api/http';

const routerPath = '/devices';

// 取得指定設備的名稱
export const getDeviceName = (deviceId) => http.get(`${routerPath}/${deviceId}/name`);
