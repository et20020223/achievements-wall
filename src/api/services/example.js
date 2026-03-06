import {http} from '../index';

const promotionRouter = '/custom-promotion-link';

// 取得自訂推廣連結
export const getCustomPromotionLink = () =>
  http.get(promotionRouter);

// 新增自訂推廣連結
export const addCustomPromotionLink = (data) =>
  http.post(promotionRouter, data);
// 預設匯出（仍保留以供不同匯入風格使用）
export default {
  getCustomPromotionLink,
  addCustomPromotionLink,
};

