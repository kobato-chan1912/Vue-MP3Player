<template>
  <div class="landing">
    <h2>SWORD ART ONLINE</h2>
    <h3 style="color: #999">🍰 Beautiful and clean VueJS Player 🍰</h3>

    <div class="aplayer-wrap">
      <aplayer :audio="audio" :lrcType="3" />
    </div>
  </div>
</template>

<script>
import axios from "axios";



export default {
  name: "App",
  data() {
    return {
      audio: [],
    };
  },

  created() {
    axios
      .get(
        `${process.env.VUE_APP_API}/playlists/${this.$route.params.id}/songs`,
        {}
      )
      .then((response) => {
        console.log(response.data.songs);
        this.audio = response.data.songs;
      })
      .catch((error) => {
        let res = error.response;
        if (res.status === 404){
          window.location.href = '/404'
        }
      });
  },
};
</script>