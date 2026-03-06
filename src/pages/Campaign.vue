<template>
  <q-layout view="lHh lpr lFf" class="campaign-layout bg-white">
    <!-- Header Navigation -->
    <q-header class="bg-white text-dark q-py-sm shadow-1">
      <div class="row items-center no-wrap justify-center q-px-md" style="max-width: 1200px; margin: 0 auto; width: 100%;">
        <!-- Fake Logo -->
        <div class="row items-center cursor-pointer gt-xs">
          <div class="bg-teal q-px-sm q-py-xs text-white rounded-borders q-mr-sm text-weight-bold" style="font-size: 16px;">
            選
          </div>
          <div class="text-h6 text-weight-bolder text-teal-9" style="letter-spacing: 2px;">國家黨</div>
        </div>

        <q-space />

        <!-- Nav Links -->
        <div class="row items-center q-gutter-x-lg gt-sm q-pr-md" style="font-size: 15px; font-weight: bold;">
          <a class="nav-link text-primary active cursor-pointer" @click.prevent="scrollToSection('section-about')">經歷</a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-stats')">政績一覽</a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-policies')">政策專區</a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-highlights')">最新花絮</a>
        </div>

        <q-btn flat round dense icon="menu" class="lt-md" color="grey-8" @click="toggleLeftDrawer" />
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
    >
      <q-list class="q-pt-md">
        <q-item clickable v-ripple @click="drawerScrollTo('section-about')">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>經歷</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="drawerScrollTo('section-stats')">
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>政績一覽</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="drawerScrollTo('section-policies')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>政策專區</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="drawerScrollTo('section-highlights')">
          <q-item-section avatar>
            <q-icon name="campaign" />
          </q-item-section>
          <q-item-section>最新花絮</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page>
        <!-- Hero Section -->
        <div class="hero-section relative-position overflow-hidden row items-center justify-center pt-xl" style="padding-bottom: 60px;">
          <div class="hero-bg absolute-full"></div>

          <div class="hero-content row justify-between items-center relative-position q-pa-md" style="max-width: 1200px; width: 100%; z-index: 1; padding-top: 60px;">
            <div class="col-12 col-md-6 q-pr-lg-xl hero-text text-left">
              <div class="row items-center q-mb-md mt-md">
                <div class="text-h2 text-weight-bolder" style="color: #0b2e59; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(255,255,255,0.8);">李明華</div>
                <div class="bg-blue-6 text-white q-px-sm q-py-xs q-ml-md rounded-borders text-subtitle1 text-weight-bold shadow-1" style="margin-top: 8px;">市議員</div>
              </div>

              <div class="text-h3 text-weight-bold q-mb-sm" style="color: #174276; letter-spacing: 4px; text-shadow: 2px 2px 4px rgba(255,255,255,0.8);">
                為里鄰<span class="text-blue-8">築</span>未來
              </div>

              <div class="text-h6 text-grey-9 q-mb-xl q-mt-md text-weight-bold" style="letter-spacing: 2px; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">
                用心傾聽 · 帶來改變
              </div>

              <div class="q-mt-md" :class="$q.screen.gt.xs ? 'row q-gutter-sm' : 'column q-gutter-y-sm items-start'">
                <q-btn unelevated color="blue-9" icon="search" label="了解政見" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
                <q-btn unelevated color="green" icon="img:https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" label="加入LINE" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
                <q-btn unelevated color="deep-orange-5" icon="volunteer_activism" label="捐款支持" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
              </div>
            </div>

            <div class="col-12 col-md-6 text-center hero-image-container text-right flex items-end justify-end relative-position">
              <!-- Candidate Photo -->
              <img src="../assets/imgs/man.png"
                  :style="$q.screen.xs ? 'max-width: 400px; width: 100%; margin-bottom: -80px; position: relative; z-index: 2; margin-right: -50px;' : 'max-width: 500px; width: 100%; margin-bottom: -80px; position: relative; z-index: 2;'" />
            </div>
          </div>
        </div>

        <!-- content wrapper -->
        <div class="q-px-md q-py-xl" style="max-width: 1000px; margin: 0 auto;">

          <!-- 區段 1: 經歷 -->
          <div id="section-about" class="section-container">
            <h4 class="section-title">經歷</h4>

            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <!-- 學歷 / 經歷 -->
                <q-card flat class="bg-grey-2 my-card h-full" style="border-radius: 8px;">
                  <div class="bg-blue-1 q-pa-sm q-px-md text-subtitle1 text-weight-bold" style="color: #4a6c8c; border-radius: 8px 8px 0 0;">學歷 / 經歷</div>
                  <q-card-section>
                    <ul class="experience-list q-pl-sm no-margin">
                      <li><span class="text-blue-8">2020</span> - 國立大學 碩士</li>
                      <q-separator inset class="q-my-sm" />
                      <li><span class="text-blue-8">2015</span> - 社區發展協會理事長</li>
                      <q-separator inset class="q-my-sm" />
                      <li><span class="text-blue-8">2008</span> - 大學畢業</li>
                    </ul>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <!-- 我的理念 -->
                <q-card flat class="bg-blue-50 my-card h-full relative-position overflow-hidden" style="border-radius: 8px; background-color: #ebf5fa;">
                  <div class="bg-blue-100 q-pa-sm q-px-md text-subtitle1 text-weight-bold" style="background-color: #dceef9; color: #4a6c8c; border-radius: 8px 8px 0 0;">我的理念</div>
                  <q-card-section>
                    <ul class="ideals-list q-pl-none no-margin list-none">
                      <li class="q-mb-md text-subtitle1 text-grey-9 text-weight-medium">
                        <q-icon name="check" color="blue-8" size="sm" class="q-mr-sm" /> 用心傾聽需求
                      </li>
                      <li class="q-mb-md text-subtitle1 text-grey-9 text-weight-medium">
                        <q-icon name="check" color="blue-8" size="sm" class="q-mr-sm" /> 落實市政監督
                      </li>
                      <li class="q-mb-md text-subtitle1 text-grey-9 text-weight-medium">
                        <q-icon name="check" color="blue-8" size="sm" class="q-mr-sm" /> 改善生活環境
                      </li>
                    </ul>
                  </q-card-section>
                  <!-- Decorative wave on bottom right -->
                  <div class="absolute-bottom-right opacity-30">
                    <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,80 C50,40 100,60 150,20 C180,0 200,20 200,40 L200,80 Z" fill="#bce0fd" opacity="0.5"/>
                    </svg>
                  </div>
                </q-card>
              </div>
            </div>
          </div>

          <!-- 區段 2: 政績一覽 -->
          <div id="section-stats" class="section-container q-mt-xl">
            <h4 class="section-title">政績一覽</h4>

            <div class="row q-gutter-sm text-white q-mt-md justify-between no-wrap flex-wrap stat-row">
              <q-card flat class="bg-blue-9 text-center rounded-borders stat-card col column justify-center" style="min-width: 150px; height: 120px;">
                <div class="q-pt-sm"><span class="text-h3 text-weight-bolder">1200</span><span class="text-subtitle1">案</span></div>
                <div class="text-subtitle2 q-mt-xs q-pb-md op-80">已完成服務案</div>
              </q-card>

              <q-card flat class="bg-blue-6 text-center rounded-borders stat-card col column justify-center" style="min-width: 150px; height: 120px;">
                <div class="q-pt-sm"><span class="text-h3 text-weight-bolder">18</span><span class="text-subtitle1">條</span></div>
                <div class="text-subtitle2 q-mt-xs q-pb-md op-80">推動修法草案</div>
              </q-card>

              <q-card flat class="bg-deep-orange-5 text-center rounded-borders stat-card col column justify-center" style="min-width: 150px; height: 120px;">
                <div class="q-pt-sm"><span class="text-h3 text-weight-bolder">36</span><span class="text-subtitle1">場</span></div>
                <div class="text-subtitle2 q-mt-xs q-pb-md op-80">辦理公民論壇</div>
              </q-card>

              <q-card flat class="bg-teal-5 text-center rounded-borders stat-card col column justify-center relative-position" style="min-width: 150px; height: 120px;">
                <div class="q-pt-sm"><span class="text-h3 text-weight-bolder">120</span><span class="text-subtitle1">項</span></div>
                <div class="text-subtitle2 q-mt-xs q-pb-md op-80">推動社區改善</div>
                <!-- Mini Bar Chart decoration -->
                <div class="absolute-bottom-right row items-end q-pa-sm q-gutter-x-xs op-60">
                  <div style="width: 12px; height: 14px; background: rgba(255,255,255,0.4); border-radius: 2px;"></div>
                  <div style="width: 12px; height: 26px; background: rgba(255,255,255,0.6); border-radius: 2px;"></div>
                  <div style="width: 12px; height: 38px; background: rgba(255,255,255,0.9); border-radius: 2px;"></div>
                </div>
              </q-card>
            </div>
          </div>

          <!-- 區段 3: 政策精選 -->
          <div id="section-policies" class="section-container q-mt-xl">
            <h4 class="section-title">政策專區</h4>

            <q-card flat bordered class="rounded-borders overflow-hidden bg-white">
              <q-tabs
                v-model="tab"
                class="text-blue-9 bg-blue-50"
                active-color="white"
                active-bg-color="blue-9"
                indicator-color="transparent"
                align="justify"
                narrow-indicator
                style="background-color: #ebf5fa;"
              >
                <q-tab name="economy" icon="business_center" label="經濟發展" />
                <q-tab name="welfare" label="社會福利" />
                <q-tab name="education" label="教育文化" />
                <q-tab name="environment" icon="eco" label="環境生態" />
                <q-tab name="traffic" label="交通建設" />
              </q-tabs>

              <q-tab-panels v-model="tab" animated class="bg-white">
                <q-tab-panel name="economy" class="q-pa-lg">
                  <ul class="policy-list list-none no-margin q-pl-none q-gutter-y-lg">
                    <li class="row items-center no-wrap">
                      <q-icon name="check" color="blue-8" size="sm" class="q-mr-md" />
                      <span class="text-subtitle1 text-grey-9 text-weight-medium">推動內湖科技園區綠能化，創造更多就業機會</span>
                    </li>
                    <q-separator inset />
                    <li class="row items-center no-wrap">
                      <q-icon name="check" color="blue-8" size="sm" class="q-mr-md" />
                      <span class="text-subtitle1 text-grey-9 text-weight-medium">活化在地老商圈，設立發展中心輔導轉型</span>
                    </li>
                    <q-separator inset />
                    <li class="row items-center no-wrap">
                      <q-icon name="check" color="blue-8" size="sm" class="q-mr-md" />
                      <span class="text-subtitle1 text-grey-9 text-weight-medium">青年創業獎勵金，提供辦公空間補貼</span>
                    </li>
                  </ul>
                </q-tab-panel>

                <!-- Mock panels for others -->
                <q-tab-panel name="welfare" class="q-pa-lg">
                  <div class="text-subtitle1 text-grey-7">社會福利相關政策內容... (建置中)</div>
                </q-tab-panel>
                <q-tab-panel name="education" class="q-pa-lg">
                  <div class="text-subtitle1 text-grey-7">教育文化相關政策內容... (建置中)</div>
                </q-tab-panel>
                <q-tab-panel name="environment" class="q-pa-lg">
                  <div class="text-subtitle1 text-grey-7">環境生態相關政策內容... (建置中)</div>
                </q-tab-panel>
                <q-tab-panel name="traffic" class="q-pa-lg">
                  <div class="text-subtitle1 text-grey-7">交通建設相關政策內容... (建置中)</div>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>

          <!-- 區段 4: 最新花絮 -->
          <div id="section-highlights" class="section-container q-mt-xl q-mb-xl">
            <h4 class="section-title">最新花絮</h4>

            <div class="row q-col-gutter-lg q-mt-sm">
                <!-- Highlight 1: Before/After Comparison (Large) -->
                <div class="col-12 col-md-8">
                    <q-card flat class="rounded-borders overflow-hidden bg-white relative-position full-height shadow-2" style="min-height: 400px; border: 1px solid #e0e0e0;">
                        <!-- Tag (absolute on top left) -->
                        <div class="absolute-top-left q-ma-md" style="z-index: 10;">
                          <q-badge color="grey-9" text-color="white" :label="campaignData.highlights.comparison.tag" class="q-py-xs q-px-sm text-subtitle2" style="border-radius: 4px;" />
                        </div>

                        <div class="row no-wrap relative-position" style="height: 300px;">
                            <!-- Before Section (Left) -->
                            <div class="col-6 relative-position bg-grey-3 overflow-hidden">
                                <q-img v-if="campaignData.highlights.comparison.imageBefore" :src="campaignData.highlights.comparison.imageBefore" class="full-width full-height" style="object-fit: cover;" />
                                <div v-else class="full-width full-height flex flex-center hover-bg-grey-4 transition">
                                     <div class="text-h6 text-grey text-weight-bold">尚未上傳</div>
                                </div>
                                <!-- Label Badge -->
                                <div class="absolute-bottom text-center q-pb-md pointer-events-none" style="z-index: 5;">
                                     <q-badge color="dark" label="改善前" class="text-subtitle1 shadow-2" />
                                </div>
                                <!-- Text Labels -->
                                <div class="absolute-bottom text-center text-white text-h6 text-weight-bold full-width q-pb-xl pointer-events-none" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8); padding-bottom: 50px;">
                                     {{ campaignData.highlights.comparison.beforeLabel }}
                                </div>
                            </div>

                            <!-- After Section (Right) -->
                            <div class="col-6 relative-position bg-grey-2 overflow-hidden">
                                <q-img v-if="campaignData.highlights.comparison.imageAfter" :src="campaignData.highlights.comparison.imageAfter" class="full-width full-height" style="object-fit: cover;" />
                                <div v-else class="full-width full-height flex flex-center hover-bg-grey-3 transition">
                                     <div class="text-h6 text-grey text-weight-bold">尚未上傳</div>
                                </div>
                                <!-- Label Badge -->
                                <div class="absolute-bottom text-center q-pb-md pointer-events-none" style="z-index: 5;">
                                     <q-badge color="primary" label="改善後" class="text-subtitle1 shadow-2" />
                                </div>
                                <!-- Text Labels -->
                                <div class="absolute-bottom text-center text-white text-h6 text-weight-bold full-width q-pb-xl pointer-events-none" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8); padding-bottom: 50px;">
                                     {{ campaignData.highlights.comparison.afterLabel }}
                                </div>
                            </div>
                        </div>

                        <q-card-section class="q-pa-lg bg-white card-border-top">
                            <div class="text-h5 text-weight-bold text-grey-9 q-mb-sm">
                                {{ campaignData.highlights.comparison.title }}
                            </div>

                            <div class="text-subtitle1 text-grey-7">
                                {{ campaignData.highlights.comparison.desc }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>

                <div class="col-12 col-md-4" v-for="(item, index) in campaignData.highlights.news" :key="index">
                        <!-- Highlight: Event Style (Orange) -->
                        <q-card v-if="item.style === 'event'" flat class="rounded-borders overflow-hidden bg-orange-1 col-auto relative-position full-height flex column shadow-2" style="border: 1px solid #ffe0b2;">
                            <div class="col q-pa-lg text-center relative-position flex flex-center column" style="min-height: 160px;">
                            <!-- Tag -->
                             <div class="absolute-top-left q-ma-md">
                                 <q-badge color="orange-9" text-color="white" :label="item.tag" class="q-py-xs q-px-sm text-subtitle2" style="border-radius: 4px;" />
                             </div>

                             <q-icon name="favorite_border" color="deep-orange" size="lg" class="q-mb-sm" />

                             <div class="text-h4 text-weight-bolder text-deep-orange q-mb-xs">
                                {{ item.mainTitle }}
                             </div>

                             <div class="text-subtitle1 text-deep-orange text-weight-bold">
                                {{ item.subTitle }}
                             </div>
                        </div>

                        <div class="bg-white q-pa-lg card-border-top">
                            <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">
                                {{ item.contentTitle }}
                            </div>

                            <div class="text-body2 text-grey-7" style="white-space: pre-wrap;">{{ item.contentDesc }}</div>
                        </div>
                    </q-card>

                        <!-- Highlight: Service/News Style (Blue/Image) -->
                        <q-card v-else flat class="rounded-borders overflow-hidden bg-white col-auto relative-position full-height shadow-2" style="border: 1px solid #e3f2fd;">
                             <!-- Tag -->
                             <div class="absolute-top-left q-ma-md" style="z-index: 2">
                                 <q-badge color="blue-7" text-color="white" :label="item.tag" class="q-py-xs q-px-sm text-subtitle2" style="border-radius: 4px;" />
                             </div>

                             <div class="bg-blue-1 relative-position" style="height: 180px;">
                                <q-img v-if="item.image" :src="item.image" class="full-width full-height" style="object-fit: cover;" />
                                <div v-else class="full-width full-height relative-position flex flex-center bg-blue-1" style="min-height: 180px;">
                                     <div class="column items-center text-blue-2">
                                         <q-icon name="image" size="50px" />
                                     </div>
                                </div>
                             </div>

                             <div class="bg-grey-2 q-pa-lg card-border-top">
                                <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs">
                                    {{ item.title }}
                                </div>

                                <div class="text-caption text-grey-6">
                                    {{ item.info }}
                                </div>
                             </div>
                        </q-card>
                </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="bg-blue-10 text-white q-py-xl">
          <div class="row q-col-gutter-lg justify-center q-px-md" style="max-width: 1200px; margin: 0 auto;">
            <div class="col-12 col-md-4">
              <div class="text-h6 text-weight-bold q-mb-md">李明華市議員服務處</div>
              <div class="text-subtitle2 q-mb-sm op-80"><q-icon name="place" class="q-mr-sm"/> 台北市內湖區成功路二段320巷1號</div>
              <div class="text-subtitle2 q-mb-sm op-80"><q-icon name="phone" class="q-mr-sm"/> (02) 2345-6789</div>
              <div class="text-subtitle2 op-80"><q-icon name="email" class="q-mr-sm"/> service@example.com</div>
            </div>
            <div class="col-12 col-md-4 text-center gt-sm">
               <div class="text-h6 text-weight-bold q-mb-md">追蹤我們</div>
               <div class="q-gutter-md">
                 <q-btn round flat icon="facebook" type="a" href="#" />
                 <q-btn round flat icon="img:https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" type="a" href="#" />
                 <q-btn round flat icon="camera_alt" type="a" href="#" />
               </div>
            </div>
            <div class="col-12 col-md-4 text-right gt-sm">
               <div class="text-h6 text-weight-bold q-mb-md">服務時間</div>
                 <div class="text-subtitle2 op-80">週一至週五</div>
                 <div class="text-subtitle2 op-80">09:00 - 18:00</div>
            </div>
            <!-- Mobile view for social and hours -->
            <div class="col-12 lt-md text-center q-mt-md">
               <div class="q-gutter-md q-mb-md">
                 <q-btn round flat icon="facebook" type="a" href="#" />
                 <q-btn round flat icon="img:https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" type="a" href="#" />
                 <q-btn round flat icon="camera_alt" type="a" href="#" />
               </div>
               <div class="text-subtitle2 op-80">服務時間: 週一至週五 09:00 - 18:00</div>
            </div>
          </div>
          <div class="text-center q-mt-xl text-caption op-60">
            Copyright © 2026 李明華市議員辦公室 All Rights Reserved.
          </div>
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useQuasar} from 'quasar';
import before from '@/assets/imgs/before.png';
import after from '@/assets/imgs/after.png';
// import beforeAfter from '@/assets/imgs/before-after.png';
// import highlights1 from '@/assets/imgs/highlights-1.png';
// import highlights2 from '@/assets/imgs/highlights-2.png';
// import highlights3 from '@/assets/imgs/highlights-3.png';
// import highlights4 from '@/assets/imgs/highlights-4.png';
// import highlights5 from '@/assets/imgs/highlights-5.png';
// import highlights6 from '@/assets/imgs/highlights-6.png';
import highlightsLaw from '@/assets/imgs/highlights-law.png';
import {scroll} from 'quasar';

const $q = useQuasar();
const tab = ref('economy');
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const campaignData = reactive({
  highlights: {
    comparison: {
      type: 'comparison',
      title: '成功爭取內湖區成功路二段路面銑鋪更新',
      desc: '解決長年路面不平、積水問題，保障用路人安全。',
      tag: '實地會勘對照圖',
      beforeLabel: '老舊龜裂路面',
      afterLabel: '全新平整鋪面',
      imageBefore: before,
      imageAfter: after,
    },
    news: [
      {
        style: 'event',
        tag: '政令宣導',
        mainTitle: '毛小孩免費疫苗',
        subTitle: '本週末內湖大湖公園見！',
        contentTitle: '114年度狂犬病疫苗注射活動',
        contentDesc: '邀請飼主帶毛小孩來施打疫苗，現場還有免費晶片登記服務。',
      },
      {
        style: 'service',
        tag: '選民服務',
        title: '免費法律諮詢服務站',
        info: '2025.02.20 | 服務處',
        image: highlightsLaw,
      },
    ],
  },
});

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const target = scroll.getScrollTarget(el);
    const offset = el.offsetTop - 80; // Adjust for header height
    const duration = 500;
    scroll.setVerticalScrollPosition(target, offset, duration);
  }
};

const drawerScrollTo = (id) => {
  scrollToSection(id);
  leftDrawerOpen.value = false;
};
</script>
<style scoped>
/* Card Improvements */
.card-border-top {
  border-top: 1px solid rgba(0,0,0,0.06);
}
.campaign-layout {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang TC', 'LiHei Pro', 'Hiragino Sans GB', 'Microsoft JhengHei', Arial, sans-serif;
}

.nav-link {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
}

.nav-link:hover, .nav-link.active {
  border-bottom-color: var(--q-primary);
  color: var(--q-primary) !important;
}

.hero-bg {
  background-color: rgba(255, 255, 255, 0.7);
  background-image: url('../assets/imgs/banner.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #174276;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
}

.section-title::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: var(--q-primary);
  margin-right: 12px;
}

.section-title::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background-color: #e0e0e0;
  margin-left: 16px;
}

.experience-list li {
  margin: 12px 0;
  margin-left: 16px;
  font-size: 15px;
  color: #444;
  list-style-type: none;
  position: relative;
}

.experience-list li::before {
  content: "•";
  color: var(--q-primary);
  font-size: 20px;
  position: absolute;
  left: -16px;
  top: -4px;
}

.stat-card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-row {
  flex-wrap: wrap;
}

@media (max-width: 599px) {
  .stat-card {
    min-width: 48% !important;
    margin-bottom: 8px;
  }
}

.op-80 { opacity: 0.8; }
.op-60 { opacity: 0.6; }
.list-none { list-style: none; }
.h-full { height: 100% !important; }

</style>
