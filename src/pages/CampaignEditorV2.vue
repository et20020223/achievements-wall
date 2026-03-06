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
          <a class="nav-link text-primary active cursor-pointer" @click.prevent="scrollToSection('section-about')">關於</a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-about')">經歷<q-icon name="keyboard_arrow_down" size="xs"/></a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-policies')">政見願景</a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-policies')">政策專區<q-icon name="keyboard_arrow_down" size="xs"/></a>
          <a class="nav-link text-grey-8 cursor-pointer" @click.prevent="scrollToSection('section-highlights')">最新花絮<q-icon name="keyboard_arrow_down" size="xs"/></a>
        </div>

        <q-btn flat round dense icon="menu" class="lt-md" color="grey-8" />
      </div>
    </q-header>

    <q-page-container>
      <q-page>
        <!-- Hero Section -->
        <div class="hero-section relative-position overflow-hidden row items-center justify-center pt-xl" style="padding-bottom: 60px;">
          <div class="hero-bg absolute-full"></div>

          <div class="hero-content row justify-between items-center relative-position q-pa-md" style="max-width: 1200px; width: 100%; z-index: 1; padding-top: 60px;">
            <div class="col-12 col-md-6 q-pr-lg-xl hero-text text-left relative-position">

              <!-- Editor Mode (In-place & Transparent) -->
              <transition name="fade">
                  <div v-if="editingIntro" class="relative-position">
                     <!-- Click outside backdrop -->
                     <div class="fixed-full" style="z-index: 99; cursor: default" @click="editingIntro = false"></div>

                     <q-editor
                       v-model="campaignData.candidate.introHtml"
                       :definitions="{
                         save: {
                           tip: 'Save changes',
                           icon: 'save',
                           label: 'Save',
                           handler: () => { editingIntro = false }
                         }
                       }"
                       :toolbar="[
                         ['bold', 'italic', 'strike', 'underline'],
                         ['token', 'hr', 'link', 'custom_btn'],
                         ['print', 'fullscreen'],
                         [
                           {
                             label: $q.lang.editor.formatting,
                             icon: $q.iconSet.editor.formatting,
                             list: 'no-icons',
                             options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                           },
                           {
                             label: $q.lang.editor.fontSize,
                             icon: $q.iconSet.editor.fontSize,
                             fixedLabel: true,
                             fixedIcon: true,
                             list: 'no-icons',
                             options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                           },
                           'removeFormat'
                         ],
                         ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                         ['undo', 'redo'],
                         ['save']
                       ]"
                       flat
                       content-class="bg-transparent"
                       class="bg-transparent no-border"
                       style="z-index: 100; position: relative;"
                     />
                  </div>
              </transition>

              <!-- Display Mode -->
              <div
                 v-if="!editingIntro"
                 class="intro-content q-py-sm cursor-pointer rounded-borders relative-position hover-outline"
                 @click="editingIntro = true"
                 v-html="campaignData.candidate.introHtml"
                 style="min-height: 150px;"
              >
              </div>
              <q-tooltip class="bg-primary" v-if="!editingIntro">點擊編輯文字內容</q-tooltip>

              <div class="row q-gutter-sm q-mt-md">
                <q-btn unelevated color="blue-9" label="了解政見" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
                <q-btn unelevated color="green" icon="img:https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" label="加入LINE" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
                <q-btn unelevated color="deep-orange-5" label="捐款支持" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" />
              </div>
            </div>

            <div class="col-12 col-md-6 text-center hero-image-container gt-sm text-right flex items-end justify-end relative-position">
              <!-- Candidate Photo -->
              <div class="cursor-pointer relative-position" @click="triggerImageUpload('candidate')">
                <img :src="campaignData.candidate.image"
                    style="max-width: 500px; width: 100%; margin-bottom: -80px; position: relative; z-index: 2;" />
                <q-tooltip class="bg-primary" anchor="center middle" self="center middle">點擊編輯圖片</q-tooltip>
                <!-- <div class="absolute-center bg-white q-pa-sm rounded-borders shadow-2 text-primary text-weight-bold" style="z-index: 3; opacity: 0; transition: opacity 0.3s;" :style="{ opacity: '0.8' }">
                   <q-icon name="edit" /> 編輯圖片
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <!-- content wrapper -->
        <div class="q-px-md q-py-xl" style="max-width: 1000px; margin: 0 auto;">

          <!-- 區段 1: 關於我 -->
          <div id="section-about" class="section-container">
            <h4 class="section-title">關於我</h4>

            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <!-- 學歷 / 經歷 -->
                <q-card flat class="bg-grey-2 my-card h-full" style="border-radius: 8px;">
                  <div class="bg-blue-1 q-pa-sm q-px-md text-subtitle1 text-weight-bold row justify-between items-center" style="color: #4a6c8c; border-radius: 8px 8px 0 0;">
                    <div
                      v-if="!campaignData.about.editingEducationTitle"
                      class="cursor-pointer hover-edit-outline"
                      @click="campaignData.about.editingEducationTitle = true"
                    >
                      {{ campaignData.about.educationTitle }}
                    </div>
                    <q-input
                      v-else
                      v-model="campaignData.about.educationTitle"
                      dense
                      borderless
                      autofocus
                      class="text-subtitle1 text-weight-bold"
                      style="color: #4a6c8c;"
                      @blur="campaignData.about.editingEducationTitle = false"
                      @keyup.enter="campaignData.about.editingEducationTitle = false"
                    />

                    <q-btn round flat dense icon="add" size="sm" color="blue-8" @click="addEducation">
                      <q-tooltip>新增學經歷</q-tooltip>
                    </q-btn>
                  </div>
                  <q-card-section>
                    <ul class="experience-list q-pl-sm no-margin">
                      <template v-for="(item, index) in campaignData.about.education" :key="index">
                        <li class="row items-center justify-between q-py-xs">
                          <div class="col-grow row items-center">
                            <span
                              v-if="!item.editingYear"
                              class="text-blue-8 cursor-pointer q-mr-sm hover-edit-outline"
                              style="min-width: 40px;"
                              @click="item.editingYear = true"
                            >
                              {{ item.year }}
                            </span>
                            <q-input
                              v-else
                              v-model="item.year"
                              dense
                              borderless
                              autofocus
                              class="q-mr-sm text-blue-8"
                              style="min-width: 40px; width: 60px;"
                              mask="####"
                              @blur="item.editingYear = false"
                              @keyup.enter="item.editingYear = false"
                            />

                            <span class="q-mr-sm">-</span>

                            <span
                              v-if="!item.editingContent"
                              class="cursor-pointer col-grow hover-edit-outline"
                              @click="item.editingContent = true"
                            >
                              {{ item.content }}
                            </span>
                            <q-input
                              v-else
                              v-model="item.content"
                              dense
                              borderless
                              autofocus
                              class="col-grow"
                              @blur="item.editingContent = false"
                              @keyup.enter="item.editingContent = false"
                            />
                          </div>
                          <q-btn flat round dense icon="delete" size="xs" color="grey-6" @click="removeEducation(index)" class="q-ml-sm" />
                        </li>
                        <q-separator inset class="q-my-sm" v-if="index < campaignData.about.education.length - 1" />
                      </template>
                    </ul>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <!-- 我的理念 -->
                <q-card flat class="bg-blue-50 my-card h-full relative-position overflow-hidden" style="border-radius: 8px; background-color: #ebf5fa;">
                  <div class="bg-blue-100 q-pa-sm q-px-md text-subtitle1 text-weight-bold row justify-between items-center" style="background-color: #dceef9; color: #4a6c8c; border-radius: 8px 8px 0 0;">
                    <div
                      v-if="!campaignData.about.editingPhilosophyTitle"
                      class="cursor-pointer hover-edit-outline"
                      @click="campaignData.about.editingPhilosophyTitle = true"
                    >
                      {{ campaignData.about.philosophyTitle }}
                    </div>
                    <q-input
                      v-else
                      v-model="campaignData.about.philosophyTitle"
                      dense
                      borderless
                      autofocus
                      class="text-subtitle1 text-weight-bold"
                      style="color: #4a6c8c;"
                      @blur="campaignData.about.editingPhilosophyTitle = false"
                      @keyup.enter="campaignData.about.editingPhilosophyTitle = false"
                    />

                    <q-btn round flat dense icon="add" size="sm" color="blue-8" @click="addPhilosophy">
                      <q-tooltip>新增理念</q-tooltip>
                    </q-btn>
                  </div>
                  <q-card-section>
                    <ul class="ideals-list q-pl-none no-margin list-none">
                      <li v-for="(item, index) in campaignData.about.philosophy" :key="index" class="q-mb-md text-subtitle1 text-grey-9 text-weight-medium row items-center">
                        <q-icon name="check" color="blue-8" size="sm" class="q-mr-sm" />
                        <span
                          v-if="!item.editing"
                          class="cursor-pointer col-grow hover-edit-outline"
                          @click="item.editing = true"
                        >
                          {{ item.text }}
                        </span>
                        <q-input
                          v-else
                          v-model="item.text"
                          dense
                          borderless
                          autofocus
                          class="col-grow"
                          @blur="item.editing = false"
                          @keyup.enter="item.editing = false"
                        />
                        <q-btn flat round dense icon="delete" size="xs" color="grey-6" @click="removePhilosophy(index)" />
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

            <div class="row q-gutter-sm text-white q-mt-md justify-start no-wrap flex-wrap stat-row scroll-x">
              <template v-for="(stat, index) in campaignData.stats" :key="index">
                <q-card flat :class="`bg-${stat.color} text-center rounded-borders stat-card col column justify-center relative-position`" style="min-width: 150px; height: 120px; flex: 1 1 150px; max-width: 200px;">
                  <div class="q-pt-sm row justify-center items-baseline q-gutter-x-xs">
                    <!-- Value -->
                    <span
                      v-if="!stat.editingValue"
                      class="text-h3 text-weight-bolder cursor-pointer hover-edit-outline"
                      @click="stat.editingValue = true"
                    >
                      {{ stat.value }}
                    </span>
                    <q-input
                        v-else
                        v-model="stat.value"
                        dense
                        borderless
                        autofocus
                        @blur="stat.editingValue = false"
                        @keyup.enter="stat.editingValue = false"
                        class="text-h3 text-weight-bolder text-center"
                        style="min-width: 60px; width: auto; max-width: 100px;"
                        input-class="text-center"
                    />

                    <!-- Unit -->
                    <span
                        v-if="!stat.editingUnit"
                        class="text-subtitle1 cursor-pointer hover-edit-outline"
                        @click="stat.editingUnit = true"
                    >
                        {{ stat.unit }}
                    </span>
                    <q-input
                        v-else
                        v-model="stat.unit"
                        dense
                        borderless
                        autofocus
                        @blur="stat.editingUnit = false"
                        @keyup.enter="stat.editingUnit = false"
                        class="text-subtitle1"
                        style="width: 40px;"
                        input-class="text-center"
                    />
                  </div>

                  <!-- Label -->
                  <div class="text-subtitle2 q-mt-xs q-pb-md op-80 text-ellipsis row justify-center">
                    <span
                        v-if="!stat.editingLabel"
                        class="cursor-pointer hover-edit-outline"
                        @click="stat.editingLabel = true"
                    >
                        {{ stat.label }}
                    </span>
                    <q-input
                        v-else
                        v-model="stat.label"
                        dense
                        borderless
                        autofocus
                        @blur="stat.editingLabel = false"
                        @keyup.enter="stat.editingLabel = false"
                        class="text-subtitle2 text-center"
                        input-class="text-center"
                    />
                  </div>

                  <!-- Delete button (top right, visible on hover) -->
                  <q-btn icon="close" flat round dense size="xs" class="absolute-top-right q-ma-xs" style="opacity: 0.6" @click="removeStat(index)">
                     <q-tooltip>刪除區塊</q-tooltip>
                  </q-btn>
                </q-card>
              </template>

              <!-- Add Button -->
              <q-card flat class="bg-grey-3 text-grey-6 text-center rounded-borders cursor-pointer col column justify-center" style="min-width: 80px; height: 120px; flex: 0 0 80px;" @click="addStat">
                <q-icon name="add" size="md" />
                <div class="text-caption">新增</div>
              </q-card>
            </div>
          </div>

          <!-- 區段 3: 政策精選 -->
          <div id="section-policies" class="section-container q-mt-xl">
            <h4 class="section-title">政策專區</h4>

            <q-card flat bordered class="rounded-borders overflow-hidden bg-white">
              <div class="row items-center bg-blue-50" style="background-color: #ebf5fa;">
                <q-tabs
                  v-model="tab"
                  class="text-blue-9 col"
                  active-color="white"
                  active-bg-color="blue-9"
                  indicator-color="transparent"
                  align="justify"
                  narrow-indicator
                  dense
                >
                  <q-tab v-for="(policy) in campaignData.policies" :key="policy.name" :name="policy.name" class="q-px-sm">
                    <div class="row items-center no-wrap">
                      <q-icon v-if="policy.icon" :name="policy.icon" size="xs" class="q-mr-xs" />
                      <span
                        v-if="!policy.editingLabel"
                        class="cursor-pointer hover-edit-outline"
                        @click.stop="policy.editingLabel = true"
                      >
                        {{ policy.label }}
                      </span>
                       <q-input
                        v-else
                        v-model="policy.label"
                        dense
                        borderless
                        autofocus
                        class="text-blue-9"
                        style="min-width: 60px;"
                        @blur="policy.editingLabel = false"
                        @keyup.enter="policy.editingLabel = false"
                        @click.stop
                      />
                    </div>
                  </q-tab>
                </q-tabs>
                <q-btn flat round dense icon="add" color="blue-9" @click="addPolicyTab" class="q-mx-sm">
                  <q-tooltip>新增政策分類</q-tooltip>
                </q-btn>
              </div>

              <q-tab-panels v-model="tab" animated class="bg-white">
                <q-tab-panel v-for="(policy, pIndex) in campaignData.policies" :key="policy.name" :name="policy.name" class="q-pa-lg">
                  <div class="row justify-end q-mb-md">
                     <q-btn flat label="刪除此分類" icon="delete" color="negative" size="sm" @click="removePolicyTab(policy.name)" v-if="campaignData.policies.length > 1" />
                  </div>

                  <ul class="policy-list list-none no-margin q-pl-none q-gutter-y-lg">
                    <template v-for="(item, iIndex) in policy.content" :key="iIndex">
                      <li class="row items-center justify-between">
                         <div class="row items-center col-grow">
                            <q-icon name="check" color="blue-8" size="sm" class="q-mr-md" />
                            <span
                                v-if="!item.editing"
                                class="text-subtitle1 text-grey-9 text-weight-medium col-grow cursor-pointer hover-edit-outline"
                                @click="item.editing = true"
                            >
                              {{ item.text }}
                            </span>
                            <q-input
                                v-else
                                v-model="item.text"
                                dense
                                borderless
                                autofocus
                                type="textarea"
                                autogrow
                                class="text-subtitle1 text-grey-9 text-weight-medium col-grow"
                                @blur="item.editing = false"
                                @keyup.enter.prevent="item.editing = false"
                            />
                         </div>
                         <q-btn flat round dense icon="close" size="sm" color="grey-5" @click="removePolicyItem(pIndex, iIndex)" />
                      </li>
                      <q-separator inset v-if="iIndex < policy.content.length - 1" />
                    </template>
                  </ul>

                  <div class="row justify-center q-mt-md">
                    <q-btn flat label="新增政策內容" icon="add" color="blue-8" @click="addPolicyItem(pIndex)" />
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>

          <!-- 區段 4: 最新花絮 -->
          <div id="section-highlights" class="section-container q-mt-xl q-mb-xl">
            <h4 class="section-title">最新花絮</h4>

            <div class="row q-col-gutter-sm q-mt-sm masonry-grid">
              <!-- Grid items -->
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[0].src" class="rounded-borders cursor-pointer" :ratio="4/3" @click="triggerImageUpload('highlight', 0)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[1].src" class="rounded-borders cursor-pointer" :ratio="4/3" @click="triggerImageUpload('highlight', 1)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[2].src" class="rounded-borders cursor-pointer" :ratio="4/3" @click="triggerImageUpload('highlight', 2)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[3].src" class="rounded-borders h-full cursor-pointer" :ratio="3/4" @click="triggerImageUpload('highlight', 3)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[4].src" class="rounded-borders q-mb-sm cursor-pointer" :ratio="4/3" @click="triggerImageUpload('highlight', 4)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
                <q-img :src="campaignData.highlights[5].src" class="rounded-borders cursor-pointer" :ratio="4/3" @click="triggerImageUpload('highlight', 5)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <q-img :src="campaignData.highlights[6].src" class="rounded-borders h-full cursor-pointer" :ratio="3/4" @click="triggerImageUpload('highlight', 6)">
                  <q-tooltip>更換圖片</q-tooltip>
                </q-img>
              </div>
            </div>
          </div>
        </div>

        <!-- Hidden file input for image upload -->
        <input
          type="file"
          ref="fileInput"
          accept="image/*"
          class="hidden"
          @change="handleImageUpload"
        />

        <!-- Image Cropper Dialog -->
        <q-dialog v-model="cropDialog" persistent @show="initCropper" full-width>
          <q-card style="max-width: 90vw;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">裁切圖片</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-ma-md" style="height: 60vh;">
              <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                <img ref="cropImageRef" :src="imageToCrop" style="max-height: 100%; max-width: 100%; display: block;" />
              </div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="取消" color="grey" @click="cancelCrop" />
              <q-btn unelevated label="確認裁切並上傳" color="primary" @click="confirmCrop" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref, reactive, onBeforeUnmount} from 'vue';
import {useQuasar, scroll} from 'quasar';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import beforeAfter from '@/assets/imgs/before-after.png';
import highlights1 from '@/assets/imgs/highlights-1.png';
import highlights2 from '@/assets/imgs/highlights-2.png';
import highlights3 from '@/assets/imgs/highlights-3.png';
import highlights4 from '@/assets/imgs/highlights-4.png';
import highlights5 from '@/assets/imgs/highlights-5.png';
import highlights6 from '@/assets/imgs/highlights-6.png';
import manImg from '@/assets/imgs/man.png';

const $q = useQuasar();
const tab = ref('economy');
const editingIntro = ref(false);

const campaignData = reactive({
  candidate: {
    // name: '李明華',
    // title: '市議員',
    // sloganPart1: '為里鄰',
    // sloganHighlight: '築',
    // sloganPart2: '未來',
    // description: '用心傾聽 · 帶來改變',
    introHtml: `<div class="row items-center q-mb-md">
  <div class="text-h2 text-weight-bolder" style="color: #0b2e59; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(255,255,255,0.8);">李明華</div>
  <div class="bg-blue-6 text-white q-px-sm q-py-xs q-ml-md rounded-borders text-subtitle1 text-weight-bold shadow-1" style="margin-top: 8px;">市議員</div>
</div>

<div class="text-h3 text-weight-bold q-mb-sm" style="color: #174276; letter-spacing: 4px; text-shadow: 2px 2px 4px rgba(255,255,255,0.8);">
  為里鄰<span class="text-blue-8">築</span>未來
</div>

<div class="text-h6 text-grey-9 q-mb-xl q-mt-md text-weight-bold" style="letter-spacing: 2px; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">
  用心傾聽 · 帶來改變
</div>`,
    image: manImg,
  },
  about: {
    educationTitle: '學歷 / 經歷',
    editingEducationTitle: false,
    education: [
      {year: '2020', content: '國立大學 碩士', editingYear: false, editingContent: false},
      {year: '2015', content: '社區發展協會理事長', editingYear: false, editingContent: false},
      {year: '2008', content: '大學畢業', editingYear: false, editingContent: false},
    ],
    philosophyTitle: '我的理念',
    editingPhilosophyTitle: false,
    philosophy: [
      {text: '用心傾聽需求', editing: false},
      {text: '落實市政監督', editing: false},
      {text: '改善生活環境', editing: false},
    ],
  },
  stats: [
    {value: '1200', unit: '案', label: '已完成服務案', color: 'blue-9', editingValue: false, editingUnit: false, editingLabel: false},
    {value: '18', unit: '條', label: '推動修法草案', color: 'blue-6', editingValue: false, editingUnit: false, editingLabel: false},
    {value: '36', unit: '場', label: '辦理公民論壇', color: 'deep-orange-5', editingValue: false, editingUnit: false, editingLabel: false},
    {value: '120', unit: '項', label: '推動社區改善', color: 'teal-5', editingValue: false, editingUnit: false, editingLabel: false},
  ],
  policies: [
    {name: 'economy', label: '經濟發展', icon: 'business_center', editingLabel: false, content: [
      {text: '推動內湖科技園區綠能化，創造更多就業機會', editing: false},
      {text: '活化在地老商圈，設立發展中心輔導轉型', editing: false},
      {text: '青年創業獎勵金，提供辦公空間補貼', editing: false},
    ]},
    {name: 'welfare', label: '社會福利', icon: '', editingLabel: false, content: [{text: '社會福利相關政策內容... (建置中)', editing: false}]},
    {name: 'education', label: '教育文化', icon: '', editingLabel: false, content: [{text: '教育文化相關政策內容... (建置中)', editing: false}]},
    {name: 'environment', label: '環境生態', icon: 'eco', editingLabel: false, content: [{text: '環境生態相關政策內容... (建置中)', editing: false}]},
    {name: 'traffic', label: '交通建設', icon: '', editingLabel: false, content: [{text: '交通建設相關政策內容... (建置中)', editing: false}]},
  ],
  highlights: [
    {src: beforeAfter, ratio: 4/3},
    {src: highlights1, ratio: 4/3},
    {src: highlights2, ratio: 4/3},
    {src: highlights3, ratio: 3/4},
    {src: highlights4, ratio: 4/3},
    {src: highlights5, ratio: 4/3},
    {src: highlights6, ratio: 3/4},
  ],
});

// Helper functions for adding/removing items
const addEducation = () => {
  campaignData.about.education.unshift({year: '2024', content: '新經歷', editingYear: true, editingContent: true});
};
const removeEducation = (index) => {
  campaignData.about.education.splice(index, 1);
};

const addPhilosophy = () => {
  campaignData.about.philosophy.push({text: '新理念', editing: true});
};
const removePhilosophy = (index) => {
  campaignData.about.philosophy.splice(index, 1);
};

const addStat = () => {
  campaignData.stats.push({value: '0', unit: '個', label: '新項目', color: 'blue-4', editingValue: true, editingUnit: true, editingLabel: true});
};
const removeStat = (index) => {
  campaignData.stats.splice(index, 1);
};

const addPolicyTab = () => {
  const id = `tab-${Date.now()}`;
  campaignData.policies.push({name: id, label: '新政策', icon: '', editingLabel: true, content: [{text: '新政策內容', editing: true}]});
  tab.value = id;
};

const removePolicyTab = (name) => {
  const idx = campaignData.policies.findIndex((p) => p.name === name);
  if (idx > -1) {
    campaignData.policies.splice(idx, 1);
    if (tab.value === name && campaignData.policies.length > 0) {
      tab.value = campaignData.policies[0].name;
    }
  }
};

const addPolicyItem = (policyIndex) => {
  campaignData.policies[policyIndex].content.push({text: '新政策項目', editing: true});
};
const removePolicyItem = (policyIndex, itemIndex) => {
  campaignData.policies[policyIndex].content.splice(itemIndex, 1);
};

// Image Upload Handling
const fileInput = ref(null);
const currentUploadTarget = ref({type: null, index: null});

const triggerImageUpload = (type, index = null) => {
  currentUploadTarget.value = {type, index};
  fileInput.value.click();
};

// Image Cropping Logic
const cropDialog = ref(false);
const imageToCrop = ref('');
const cropImageRef = ref(null);
let cropper = null;
let currentCropTarget = null; // Store file and type to process after confirm

const initCropper = () => {
  if (cropper) {
    cropper.destroy();
  }

  let aspectRatio = NaN;
  if (currentCropTarget && currentCropTarget.type === 'highlight' && currentCropTarget.index !== null) {
    const item = campaignData.highlights[currentCropTarget.index];
    if (item && item.ratio) {
      aspectRatio = item.ratio;
    }
  }

  if (cropImageRef.value) {
    cropper = new Cropper(cropImageRef.value, {
      aspectRatio: aspectRatio,
      viewMode: 1,
      autoCropArea: 0.8,
      guides: true,
      background: false,
    });
  }
};

const openCropDialog = (dataUrl, type, index) => {
  currentCropTarget = {type, index};
  imageToCrop.value = dataUrl;
  cropDialog.value = true;
};

const destroyCropper = () => {
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
  imageToCrop.value = '';
  currentCropTarget = null;
};

const confirmCrop = () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas();
  // Default to PNG
  const result = canvas.toDataURL();

  const {type, index} = currentCropTarget;

  if (type === 'candidate') {
    campaignData.candidate.image = result;
  } else if (type === 'highlight' && index !== null) {
    if (campaignData.highlights[index]) {
      campaignData.highlights[index].src = result;
    }
  }

  $q.notify({
    message: '圖片裁切並上傳成功',
    color: 'positive',
    icon: 'check_circle',
  });

  cropDialog.value = false;
  destroyCropper();
};

const cancelCrop = () => {
  cropDialog.value = false;
  destroyCropper();
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target.result;
    const {type, index} = currentUploadTarget.value;

    // Open cropper dialog instead of setting directly
    openCropDialog(result, type, index);
  };
  reader.readAsDataURL(file);

  // Clear input value so same file can be selected again
  event.target.value = '';
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const target = scroll.getScrollTarget(el);
    const offset = el.offsetTop - 80; // Adjust for header height
    const duration = 500;
    scroll.setVerticalScrollPosition(target, offset, duration);
  }
};

onBeforeUnmount(() => {
  destroyCropper();
});
</script>

<style scoped>
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

.hover-outline, .hover-edit-outline {
  border: 1px dashed transparent;
  transition: all 0.2s;
  border-radius: 4px;
  padding: 2px 4px; /* Add some padding so border doesn't hug text too tight */
  margin: -2px -4px; /* Negative margin to offset padding and keep flow */
}

.hover-outline:hover, .hover-edit-outline:hover {
  border-color: #1976D2;
  background-color: rgba(25, 118, 210, 0.05);
  cursor: text;
}

/* Force transparent background for editor content */
:deep(.q-editor.bg-transparent .q-editor__content) {
  background: transparent !important;
}

:deep(.q-editor.no-border) {
  border: none !important;
}

/* Optional: Make toolbar slightly transparent or distinct */
:deep(.q-editor.bg-transparent .q-editor__toolbars-container) {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #ddd;
}
</style>
