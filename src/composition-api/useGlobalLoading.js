import {ref} from 'vue';

const loadingInnerStatus = ref(false);

export function useGlobalLoading() {
  const setLoadingInnerStatus = (status) => {
    loadingInnerStatus.value = status;
  };

  return {
    loadingInnerStatus,
    setLoadingInnerStatus,
  };
}

export default useGlobalLoading;
