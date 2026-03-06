import http from '@/api/http';

const routerPath = '/device-status';

// 取得檔案
export const getOverview = () => http.get(`${routerPath}/overview`);

// 燈光設備 - 取得所有燈光設備列表
export const getLightingDevicesList = () => http.get(`${routerPath}/lighting`);

// 分離式空調 - 取得所有分離式空調列表
export const getACDevicesList = () => http.get(`${routerPath}/ac`);

// 冰水送風機 - 取得所有冰水送風機列表
export const getAHUDevicesList = () => http.get(`${routerPath}/ahu`);

// 冷凍冷藏設備 - 取得所有冷凍冷藏設備列表
export const getRefrigerationDevicesList = () => http.get(`${routerPath}/refrigeration`);

// 取得指定設備的參數選項
export const getAiCode = (deviceId) => http.get(`${routerPath}/devices/${deviceId}/ai-codes`);

// 燈光設備 - 取得啟用狀態
export const getLightingStatus = (deviceId, date) => http.get(`${routerPath}/lighting/${deviceId}?queryDate=${date}`);

// 分離式空調 - 取得當日溫度趨勢
export const getAcTrend = (deviceId, date) => http.get(`${routerPath}/ac/${deviceId}?queryDate=${date}`);

// 冰水送風機 - 取得當日溫度趨勢
export const getAhuTrend = (deviceId, date) => http.get(`${routerPath}/ahu/${deviceId}?queryDate=${date}`);

// 冷凍冷藏設備 - 取得各參數的歷史數據
export const getRefrigerationData = (deviceId, date, aiCode) => http.get(`${routerPath}/refrigeration/${deviceId}?queryDate=${date}&aiCode=${aiCode}`);
