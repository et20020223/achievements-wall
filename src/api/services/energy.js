import http from '@/api/http';

const routerPath = '/energy';

// 取得各設備圖卡內容
export const getOverview = () => http.get(`${routerPath}/overview`);

// 取得設備選項
export const getDeviceOptions = (type) => http.get(`${routerPath}/devices?type=${type}`);

// 取得指定設備的參數選項
export const getAiCode = (deviceId) => http.get(`${routerPath}/devices/${deviceId}/ai-codes`);

// 取得瞬間用電kW
export const getElectricKW = (deviceId, date) => http.get(`${routerPath}/electric/kW?deviceId=${deviceId}&queryDate=${date}`);

// 取得每日用電kWh
export const getElectricDaily = (deviceId, date) => http.get(`${routerPath}/electric/eleDay?deviceId=${deviceId}&queryDate=${date}`);

// 取得每月用電kWh
export const getElectricMonthly = (deviceId, date) => http.get(`${routerPath}/electric/eleMonth?deviceId=${deviceId}&queryDate=${date}`);

// 取得每日需量DM
export const getMaxDMdaily = (deviceId, date) => http.get(`${routerPath}/electric/maxDM/daily?deviceId=${deviceId}&queryDate=${date}`);

// 取得每月需量DM
export const getMaxDMmonthly = (deviceId, date) => http.get(`${routerPath}/electric/maxDM/monthly?deviceId=${deviceId}&queryDate=${date}`);

//  取得電力詳細資訊
export const getElectricDetail = (deviceId, aiCode, date) => http.get(`${routerPath}/electric/detail?deviceId=${deviceId}&aiCode=${aiCode}&queryDate=${date}`);

// 取得尖離峰消耗比
export const getPeakRatio = (deviceId, date) => http.get(`${routerPath}/electric/peak?deviceId=${deviceId}&queryDate=${date}`);

// 空氣品質 - 取得各參數的歷史數據
export const getAirData = (deviceId, aiCode, date) => http.get(`${routerPath}/air?deviceId=${deviceId}&aiCode=${aiCode}&queryDate=${date}`);

// 流量計 - 取得各參數的歷史數據
export const getFlowData = (deviceId, aiCode, date) => http.get(`${routerPath}/flow?deviceId=${deviceId}&aiCode=${aiCode}&queryDate=${date}`);
