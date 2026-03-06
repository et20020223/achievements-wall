import http from '@/api/http';

const routerPath = '/device-comparison';

// 取得設備類型選項
export const getDeviceTypeOptions = () => http.get(`${routerPath}/device-types`);

// 取得指定設備類型下的設備選項
export const getDeviceOptions = (code) => http.get(`${routerPath}/devices?code=${code}`);

// 取得指定設備類型下的參數選項
export const getAiCodeOptions = (code) => http.get(`${routerPath}/ai-codes?code=${code}`);

// 取得設備歷史數據
export const getComparisonData = (deviceId, aiCode, startTime, endTime) => http.get(`${routerPath}/data?deviceId=${deviceId}&aiCode=${aiCode}&startTime=${startTime}&endTime=${endTime}`);
