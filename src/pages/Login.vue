<!-- 永曜雲端科技登入頁面 -->
<template>
  <div class="login-page">
    <!-- 背景圖片 -->
    <div class="background-image">
      <!-- <q-img
        :src="BackgroundImage"
        alt="Background"
        class="bg-img"
        fit="cover"
      /> -->
    </div>

    <!-- 登入表單區域 -->
    <div class="entrance-content">
      <div class="form-container">
        <q-card class="form-wrap">
          <q-card-section class="q-pa-lg">
            <q-form ref="formRef" class="login-form">
              <!-- Logo 區域 -->
              <div class="logo-section">
                <q-img
                  :src="LogoImage"
                  alt="Logo"
                  class="logo-img"
                  fit="contain"
                />
              </div>

              <!-- 描述文字 -->
              <div class="description">
                輸入帳號和密碼進入管理系統
              </div>

              <!-- 會員帳號 -->
              <div class="form-box">
                <q-input
                  v-model="state.account"
                  outlined
                  placeholder="輸入您的會員信箱"
                  class="input-field"
                  :rules="[val => !!val || '請輸入正確的格式']"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-circle-outline" />
                  </template>
                </q-input>
              </div>

              <!-- 會員密碼 -->
              <div class="form-box">
                <q-input
                  v-model="state.password"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  placeholder="請輸入密碼"
                  class="input-field"
                  :rules="[val => !!val || '請輸入正確的格式']"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-lock-outline" />
                  </template>
                  <template v-slot:append>
                    <q-btn
                      flat
                      dense
                      :icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </q-input>
              </div>

              <!-- 驗證碼 -->
              <div class="row form-box captcha-box items-center">
                <q-input
                  v-model="state.picCode"
                  outlined
                  placeholder="驗證碼"
                  class="input-field captcha-input q-pb-none"
                  :rules="[val => !!val || '請輸入驗證碼']"
                  lazy-rules
                  :reactive-rules="false"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-shield-check-outline" />
                  </template>
                </q-input>

                <!-- 驗證碼圖片 -->
                <!-- <PicCode
                  ref="childPicCodeRef"
                  @get-code="getCode"
                  @keyup.enter="onLogin"
                /> -->
                <q-btn
                  flat
                  round
                  dense
                  @click="handleDrawPicCode"
                >
                  <q-icon
                    :name="'mdi-autorenew'"
                    :color="'neutral-grey_01'"
                    size="sm"
                  />
                </q-btn>
              </div>

              <!-- 按鈕區域 -->
              <div class="btn-wrap">
                <q-btn
                  class="login-btn"
                  unelevated
                  label="登入"
                  @click="onLogin"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Footer -->
    <footer class="login-footer">
      <div class="copyright">
        © IESS Cloud Technology Co., Ltd. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import {ref, reactive, nextTick} from 'vue';
import {useRouter} from 'vue-router';
// import PicCode from '@/components/pic-code.vue';
import apis from '@/api';
import {useNotify, handleNotifyInfo, handleApiError} from '@/composition-api';

// import BackgroundImage from '@/assets/imgs/entrance_bg.jpg';
import LogoImage from '@/assets/imgs/logo.png';

const router = useRouter();
const {triggerCustomNotify} = useNotify();

const formRef = ref(null);
const picCodeRef = ref(null);
const childPicCodeRef = ref(null);
const showPassword = ref(false);

const state = reactive({
  account: '',
  password: '',
  picCode: '',
});

// 登入
const onLogin = async () => {
  try {
    const isFormValid = await formRef.value.validate();
    if (!isFormValid) return;

    // 檢查驗證碼是否正確，並更新驗證碼
    if (state.picCode !== picCodeRef.value) {
      if (childPicCodeRef.value) {
        childPicCodeRef.value.handleDraw();
        return;
      }
      triggerCustomNotify('warning', '驗證碼錯誤');
      resetPicCode();
      return;
    }

    const payload = {
      account: state.account,
      password: state.password,
    };

    const res = await apis.auth.login(payload);
    const {type} = handleNotifyInfo(res, '登入');
    if (type === 'positive') {
      // 登入成功，預設導向能源總覽頁面（可再調整）
      router.push('/energy-overview');
    }
  } catch (error) {
    handleApiError(error, '登入');
  }
};


// const getCode = (val) => {
//   picCodeRef.value = val;
// };

const handleDrawPicCode = () => {
  if (childPicCodeRef.value) {
    childPicCodeRef.value.handleDraw();
  }
};

// 重新生成驗證碼
const resetPicCode = async () => {
  handleDrawPicCode();
  // 使用 nextTick 確保驗證碼重新生成後再清空輸入欄位
  await nextTick();
  state.picCode = '';
};
</script>

<style lang="scss" scoped>
/* 全頁面布局 */
.login-page {
  position: relative;
  min-height: 100vh;
  background-color: #555555;
  color: #000;
}

/* 背景圖片 */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-img {
  width: 100%;
  height: 100%;
}

/* 主要內容區域 */
.entrance-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 80px); /* 扣除footer的高度，預留80px給footer */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 表單容器 */
.form-container {
  max-width: 500px;
  width: 100%;
}

.form-wrap {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

/* Logo 區域 */
.logo-section {
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.logo-img {
  width: 170px;
  height: auto;
  max-width: 170px;
}

/* 描述文字 */
.description {
  text-align: center;
  margin-bottom: 32px;
  font-size: 16px;
}

/* 表單框 */
.form-box {
  margin-bottom: 12px;
}

.input-field {
  width: 100%;
}

.input-field :deep(.q-field__control) {
  height: 48px;
  padding: 0 12px;
  background-color: #ffffff;
}

.input-field :deep(.q-field__native) {
  padding: 0 8px;
}

/* 驗證碼特殊樣式 */
.captcha-box {
  display: flex;
  gap: 12px;
}

.captcha-input {
  flex: 1;
  min-width: 0;
}

/* PicCode組件樣式 */
.captcha-box :deep(.pic-verify) {
  width: 120px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}

.captcha-box :deep(.pic-verify canvas) {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

/* 按鈕區域 */
.btn-wrap {
  margin-top: 32px;
}

.login-btn {
  width: 100%;
  height: 48px;
  background-color: #3c9d5d;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  text-transform: none;
  margin-bottom: 16px;
}

.login-btn:hover {
  background-color: #349951;
}

/* Footer */
.login-footer {
  position: relative;
  z-index: 1;
  padding: 20px;
  text-align: center;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright {
  font-size: 14px;
  margin: 0;
  letter-spacing: 0.5px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .entrance-content {
    padding: 16px;
  }

  .form-container {
    max-width: 100%;
  }

  .logo-img {
    width: 100px;
    height: 60px;
  }

  .login-footer {
    padding: 16px;
    height: 60px; /* 手機版footer高度調整 */
  }

  .copyright {
    font-size: 12px;
  }
}
</style>
