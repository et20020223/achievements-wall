import http from '@/api/http';

const routerPath = '/floor-plans';

// 取得檔案
export const getFloorPlans = () => http.get(`${routerPath}`);
