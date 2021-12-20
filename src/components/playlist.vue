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
        if (res.status === 403) {
          this.$swal({
      title: "Nhập mật khẩu của Playlist",
      input: "password",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            this.$swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !this.$swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        this.$swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
        } else {
          window.location.href = '/404';
        }
      });
  },
};
</script>