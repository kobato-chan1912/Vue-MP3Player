<template>
  <div id="app">
    <router-view>
      
    </router-view>
    

    <div
      class="
        aplayer
        aplayer-withlist
        aplayer-narrow
        aplayer-fixed
        aplayer-arrow
        aplayer-loading
      "
    >
      <div class="aplayer-lrc">
        <div
          class="aplayer-lrc-contents"
          style="
            transition-duration: 0ms;
            transform: translate3d(0px, 0px, 0px);
          "
        >
          <p class="aplayer-lrc-current">(,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import evanyou from "docute-evanyou";

export default {
  name: "App",
  created() {
    "use strict";

    evanyou()({
      router: {
        afterEach: function (e) {
          return e({ meta: { name: "landing" } });
        },
      },
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

h2,
h3 {
  font-family: "Roboto";
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
}

.landing > * {
  opacity: 0.8;
}
.landing {
  position: relative;
  z-index: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  user-select: none;
}
body {
  font: Roboto !important;
}
h2 {
  margin: 0;
  margin-top: -50px;
  font-size: 40px;
}
h3 {
  margin-top: 20px;
}
.aplayer-wrap {
  width: 600px;
  max-width: 100%;
  margin: 20px 0 40px;
}

#app,
body,
html {
  height: 100%;
  overflow: hidden;
}
</style>