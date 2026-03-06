import useNotify from './useNotify.js';

const serverMsg = (status, res, action = '操作') => {
  // 定義不同狀態對應的訊息與類型
  let type = 'positive';
  let msg = null;

  switch (status) {
  case 'ok':
  case 204:
    type = 'positive';
    msg = `${action}成功`;
    break;
  case 401:
    type = 'warning';
    switch (res.code) {
    case 'AG030001':
      msg = '請求被拒';
      break;
    case 'AG030002':
      msg = 'Token過期';
      break;
    case 'AG030003':
      msg = '權限被拒';
      break;
    default:
      msg = '帳號已被登出';
      break;
    }
    break;
  case 404:
    type = 'warning';
    switch (res.code) {
    case 'AC010002':
      msg = '查無帳號資料';
      break;
    default:
      msg = 'Not Found';
      // window.location.href = '/notfound';
      break;
    }
    break;
  case 422:
    type = 'warning';
    msg = `${action}失敗`;
    break;
  case 500:
    type = 'negative';
    msg = '伺服器忙線中，請稍後再試';
    break;
  default:
    type = 'negative';
    msg = '未知錯誤，請聯繫系統人員';
    break;
  }

  return {type, msg};
};

// for common notify (trigger notify in this function)
const showNotify = (res, action = '操作') => {
  const {triggerCustomNotify} = useNotify();

  if (res && res.status) {
    const {type, msg} = serverMsg(res.status, res.data.code, action);
    triggerCustomNotify(type, msg);
    return;
  }
};

// handle notify information (trigger notify in parent function)
const handleNotifyInfo = (res, action = '操作', isShowNotify = true) => {
  const {triggerCustomNotify} = useNotify();

  const successStatus = 'ok';
  const resStatus = res.status ? res.status : successStatus;
  const {type, msg} = serverMsg(resStatus, res.data, action);

  if (isShowNotify) triggerCustomNotify(type, msg);

  return {type, msg};
};


// 新增：統一處理 API catch
const handleApiError = (err, fallbackMessage = '操作失敗') => {
  const {triggerCustomNotify} = useNotify();

  // 有 HTTP 回應，交給 serverMsg 處理狀態與訊息
  const response = err?.response ?? err;
  const status = response?.status;
  const data = response?.data ?? response;

  if (status) {
    const {type, msg} = serverMsg(status, data, fallbackMessage);
    triggerCustomNotify(type, msg);
    return;
  }

  // 非 HTTP（JS 錯誤或其他），使用傳入訊息或 err.message
  const message = fallbackMessage || (err && err.message) || '發生錯誤';
  triggerCustomNotify('warning', message);
};

export {serverMsg, showNotify, handleNotifyInfo, handleApiError};

