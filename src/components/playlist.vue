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
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Vào nghe",
            showLoaderOnConfirm: true,
            preConfirm: (passwordInput) => {
              let formData = new FormData();
              formData.append("password", passwordInput);

              return fetch(
                `${process.env.VUE_APP_API}/playlists/${this.$route.params.id}/songs`,
                {
                  method: "post",
                  body: formData,
                }
              )
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(response.statusText);
                  }
                  return response.json();
                })
                .catch((error) => {
                  this.$swal.showValidationMessage(
                    `${error}: Kiểm tra lại mật khẩu`
                  );
                });
            },
            allowOutsideClick: () => !this.$swal.isLoading(),
          }).then((result) => {
            if (result.isConfirmed) {
              this.audio = result.value.songs;
              this.$swal.fire(
                "Thành công!",
                "Tận hưởng âm nhạc nào!",
                "success"
              );
            }
          });
        } else {
          window.location.href = "/404";
        }
      });
  },
};
</script>