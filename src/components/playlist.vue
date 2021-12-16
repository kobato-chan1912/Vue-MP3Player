<template>
  <div class="landing">
      <h2>SWORD ART ONLINE</h2>
      <h3 style="color: #999">
        🍰 Beautiful and clean VueJS Player 🍰
      </h3>

      <div class="aplayer-wrap">
        <aplayer :audio="audio" :lrcType="3" />
      </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      audio: [
        {
          name: "The Party We Have Never Seen",
          artist: "Nana Takahashi",
          url: "https://vnso-zn-23-tf-mp3-s1-zmp3.zadn.vn/a81a446fb4295d770438/2817507058537369840?authen=exp=1639798104~acl=/a81a446fb4295d770438/*~hmac=e7175308a95641560b993bee7b80ec9c&fs=MTYzOTYyNTMwNDE5M3x3ZWJWNnwwfDE0LjI0My43MS44OQ",
          cover: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/0/2/f/8/02f8c807ce8f0477ccda3cdc2d47e692.jpg', // prettier-ignore
          lrc: "https://static-zmp3.zadn.vn/lyrics/2/4/1/8/24186e60ee4887ebb6b5395f49a7c748.lrc",
        },
        {
          name: "The Party We Have Never Seen",
          artist: "Nana Takahashi",
          url: "https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3",
          cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
          lrc: "https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc",
        },
      ],
    };
  }
};
</script>