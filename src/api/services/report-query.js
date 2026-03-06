import http from '@/api/http';

const routerPath = '/report-query';

// 設備報表 - 取得設備類型選項
export const getDeviceTypes = () => http.get(`${routerPath}/device-report/device-types`);

// 設備報表 - 取得指定設備類型下的設備選項
export const getDevicesByType = (code) => http.get(`${routerPath}/device-report/devices?code=${code}`);

// 設備報表 - 取得指定設備類型下的參數選項
export const getParametersByDeviceType = (code) => http.get(`${routerPath}/device-report/ai-codes?code=${code}`);

// 設備報表 - 取得報表資訊
export const getDeviceReport = (deviceId, aiCode, timeStart, timeEnd) => http.get(
  `${routerPath}/device-report/data?deviceId=${deviceId}&aiCode=${aiCode}&timeStart=${timeStart}&timeEnd=${timeEnd}`);

// 設備報表 - 下載報表資訊(CSV)
export const downloadDeviceReport = (deviceId, aiCode, timeStart, timeEnd) => http.get(
  `${routerPath}/device-report/export?deviceId=${deviceId}&aiCode=${aiCode}&timeStart=${timeStart}&timeEnd=${timeEnd}`, {
    responseType: 'blob',
  });

//  取得電表類型的設備選項
export const getElectricDevices = () => http.get(`${routerPath}/electric-devices`);

// 每日報表 - 取得報表資訊
export const getDailyReport = (deviceId, timeStart, timeEnd) => http.get(
  `${routerPath}/daily-report/data?deviceId=${deviceId}&timeStart=${timeStart}&timeEnd=${timeEnd}`);

// 每日報表 - 下載報表資訊(CSV)
export const downloadDailyReport = (deviceId, timeStart, timeEnd) => http.get(
  `${routerPath}/daily-report/export?deviceId=${deviceId}&timeStart=${timeStart}&timeEnd=${timeEnd}`, {
    responseType: 'blob',
  });

// 每月報表 - 取得報表資訊
export const getMonthlyReport = (deviceId, timeStart, timeEnd) => http.get(
  `${routerPath}/monthly-report/data?deviceId=${deviceId}&timeStart=${timeStart}&timeEnd=${timeEnd}`);

// 每月報表 - 下載報表資訊(CSV)
export const downloadMonthlyReport = (deviceId, timeStart, timeEnd) => http.get(
  `${routerPath}/monthly-report/export?deviceId=${deviceId}&timeStart=${timeStart}&timeEnd=${timeEnd}`, {
    responseType: 'blob',
  });

// 能源大用戶報表 - 取得報表資訊
export const getEnergyUserReport = (startDate) => http.get(
  `${routerPath}/energy-user/data?startDate=${startDate}`);

// 能源大用戶報表 - 下載報表資訊(CSV)
export const downloadEnergyUserReport = (startDate) => http.get(
  `${routerPath}/energy-user/export?startDate=${startDate}`, {
    responseType: 'blob',
  });

// 四小時報表 - 取得報表資訊
export const getFourHourlyReport = (timeStart) => http.get(
  `${routerPath}/four-hourly-report/data?timeStart=${timeStart}`);

// 四小時報表 - 下載報表資訊(CSV)
export const downloadFourHourlyReport = (timeStart) => http.get(
  `${routerPath}/four-hourly-report/export?timeStart=${timeStart}`, {
    responseType: 'blob',
  });
