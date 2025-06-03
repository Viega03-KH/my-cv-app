<template>
    <div class="">
      <n-loading-bar-provider
      :to="loadingBarTargetRef"
      container-style="position: absolute;"
    >
      <div
        ref="loadingBarTargetRef"
        style="
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: var(--n-border-radius);
          overflow: hidden;
          pointer-events: none;
        "
      />
      <LoadingBarTrigger />
    </n-loading-bar-provider>
    </div>
  </template>
  
  <script>
  import { NButton, NSpace, useLoadingBar } from "naive-ui";
  import { defineComponent, h, ref } from "vue";
  
  export default defineComponent({
    components: {
      LoadingBarTrigger: defineComponent({
        setup() {
          const loadingBar = useLoadingBar();
          return () => {
            return h(NSpace, null, {
              default: () => [
                h(
                  NButton,
                  { onClick: () => loadingBar.start() },
                  { default: () => "Start" }
                ),
                h(
                  NButton,
                  { onClick: () => loadingBar.finish() },
                  { default: () => "Finish" }
                )
              ]
            });
          };
        }
      })
    },
    setup() {
      return {
        loadingBarTargetRef: ref(void 0)
      };
    }
  });
  </script>