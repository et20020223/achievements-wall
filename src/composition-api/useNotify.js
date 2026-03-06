import {Notify} from 'quasar';

export function useNotify() {
  const triggerCustomNotify = (type, msg) => {
    const styles = {
      'positive': {
        icon: 'mdi-check-circle',
        classes: 'custom-notify-positive',
        color: 'positive',
      },
      'warning': {
        icon: 'mdi-alert-circle',
        classes: 'custom-notify-warning',
        color: 'warning',
      },
      'negative': {
        icon: 'mdi-close-circle',
        classes: 'custom-notify-negative',
        color: 'error',
      },
    };

    const info = {
      icon: styles[type].icon,
      iconColor: styles[type].color,
      message: msg,
      position: 'top',
      classes: styles[type].classes,
    };

    // 特殊處理儲存空間到達上限值，提示訊息內容的呈現
    if (msg && msg.errorType === 'overflow') {
      info.message = msg.content;
      info.html = msg.useHtml;
      info.timeout = msg.timeout;
      info.actions = msg.actions;
    }

    // 相容不同形態的 Notify API
    if (Notify && typeof Notify.create === 'function') {
      Notify.create(info);
    } else if (typeof Notify === 'function') {
      // 有些環境中 Notify 本身是函式
      Notify(info);
    } else if (Notify && typeof Notify.notify === 'function') {
      Notify.notify(info);
    } else {
      // 無法使用 Notify，避免拋出錯誤，並在開發時顯示警告
      // 可視需要改為其他回退機制
      // eslint-disable-next-line no-console
      console.warn('Notify API not available:', Notify, 'info:', info);
    }
  };

  return {
    triggerCustomNotify,
  };
}

export default useNotify;
