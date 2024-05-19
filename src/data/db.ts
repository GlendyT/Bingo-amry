import type { MenuItem } from "../types";
import itunes from "../assets/FaBrandsItunes.png";
import tiktok from "../assets/AntDesignTikTokOutlined.png";
import qobuz from "../assets/ArcticonsQobuz.png";
import shazam from "../assets/CibShazam.png";
import twitter from "../assets/Fa6BrandsSquareXTwitter.png";
import fb from "../assets/LogosFacebook.png";
import spotify from "../assets/LogosSpotifyIcon.png";
import youtube from "../assets/LogosYoutubeIcon.png";
import amazonmusic from "../assets/SimpleIconsAmazonmusic.png";
import youtubemusic from "../assets/SimpleIconsYoutubemusic.png";
//import ig from "../assets/SkillIconsInstagram.png"

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Buy song(s) on iTunes",
    link: [{name: "Apple Music", url: "https://music.apple.com/us/album/hope-on-the-street-vol-1-ep/1730608078"},],
    img: itunes,
  },
  {
    id: 2,
    name: "Like the music video",
    link: [{name: "YouTube", url: "https://www.youtube.com/watch?v=8Nx8gRpAvWA&list=PLXxIRFaXrEhYv99T-kmZoA7k974YeJt_S"}],
    img: youtube,
  },
  {
    id: 3,
    name: "Stream on Spotify",
    link: [{name: "Spotify", url: "https://open.spotify.com/intl-es/album/5mqxdPWQirLBE7vdDMhlB4"}],
    img: spotify,
  },
  {
    id: 4,
    name: "Create an Apple Music Playlist",
    link: [{name: "Apple Music", url: "https://music.apple.com/us/album/hope-on-the-street-vol-1-ep/1730608078"}],
    img: itunes,
  },
  {
    id: 5,
    name: "Download any mp3s bought",
    link: [{name: "YouTube Music", url: "https://music.apple.com/us/album/hope-on-the-street-vol-1-ep/1730608078"}],
    img: itunes,
  },
  {
    id: 6,
    name: "Buy physical copies",
    img: itunes,
    link: [
      { name: "BTS Official Shop", url: "https://shop.bts-official.us/pages/j-hope" },
      { name: "Amazon", url: "https://www.amazon.com/dp/B0CVLHPQ11" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/hope-on-the-street-vol1-j-hope/1144945370;jsessionid=D08392673F9B9AAB0F55ED397D0C8896.prodny_store01-atgap11?ean=0196922766701" },
      { name: "Walmart", url: "https://www.walmart.com/search?q=j-hope+hope+on+the+street&catId=4104_4615761&facet=brand%3Aj-Hope" },
      { name: "Target", url: "https://www.target.com/p/j-hope-bts-hope-on-the-street-vol-1-target-exclusive-cd/-/A-91224697" },
      { name: "Weverse Shop", url: "https://weverseshop.io/en/shop/US_USD/artists/2/categories/74?subCategoryId=3831" },
  ]
  },
  {
    id: 7,
    name: "Leave a thoughtful comment on YouTube",
    link: [{name: "YouTube", url: "https://www.youtube.com/watch?v=8Nx8gRpAvWA&list=PLXxIRFaXrEhYv99T-kmZoA7k974YeJt_S"}],
    img: youtube,
  },
  {
    id: 8,
    name: "Promote on TikTok",
    link: [{name: "Tiktok", url: "https://www.tiktok.com/@bts_official_bighit"}],
    img: tiktok,
  },
  {
    id: 9,
    name: "Share this bingo board",
    link: [{name: "Spotify", url: "https://open.spotify.com/playlist/37i9dQZF1DX9owDoKZZXV5"}],
    img: itunes,
  },
  {
    id: 10,
    name: "Buy on Qobuz",
    link: [{name: "Qobuzc", url: "https://www.qobuz.com/us-en/album/hope-on-the-street-vol1-j-hope/qtib05z7gzrnc"}],
    img: qobuz,
  },
  {
    id: 11,
    name: "Blast it in the car with the windows down",
    link: [{name: "Spotify", url: "https://open.spotify.com/playlist/37i9dQZF1DX9owDoKZZXV5"}],
    img: spotify,
  },
  {
    id: 12,
    name: "Hydrate",
    link: [{name: "Spotify", url: "https://open.spotify.com/playlist/37i9dQZF1DX9owDoKZZXV5"}],
    img: spotify,
  },
  {
    id: 13,
    name: "FREE",
    link: [{name: "Spotify", url: "https://open.spotify.com/playlist/37i9dQZF1DX9owDoKZZXV5"}],
    img: itunes,
  },
  {
    id: 14,
    name: "Steam on YouTube Music",
    link: [{name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_nUOVsjRj0t7D1f_eul3DtSvI9TQ6fRSWc"}],
    img: youtubemusic,
  },
  {
    id: 15,
    name: "Share streaming links on social media",
    img: twitter,
    link: [
      {name: "Twitter", url: "https://twitter.com/"},
      {name: "Instagram", url: "https://www.instagram.com/"},
      {name: "Facebook", url: "https://www.facebook.com/"},
      {name: "TikTok", url: "https://www.tiktok.com/"},
    ],
  },
  {
    id: 16,
    name: "Buy digital version(s) on Amazon",
    link: [{name: "Amazon Music", url: "https://www.amazon.com/dp/B0CY6SZT5K"}],
    img: amazonmusic,
  },
  {
    id: 17,
    name: "Stream on Apple Music",
    link: [{name: "Apple Music", url: "https://music.apple.com/us/album/hope-on-the-street-vol-1-ep/1730608078"}],
    img: itunes,
  },
  {
    id: 18,
    name: "Watch official music video on facebook",
    link: [{name: "Facebook", url: "https://www.facebook.com/bangtan.official/videos"}],
    img: fb,
  },
  {
    id: 19,
    name: "Share a playlist",
    link: [{name: "Spotify", url: "https://open.spotify.com/playlist/37i9dQZF1DX9owDoKZZXV5"}],
    img: spotify,
  },
  {
    id: 20,
    name: "Get a free trial of a premium app",

    img: spotify,
    link: [
      { name: "Spotify Premium", url: "https://www.spotify.com/gt/premium/?ref=account_sam_explore_premium#plans" },
      { name: "Shazam", url: "https://www.shazam.com/applemusic" },
      { name: "Amazon Music", url: "https://music.amazon.es/" }
  ]
  },
  {
    id: 21,
    name: "Shazam song(s)",
    link: [{name: "Shazam", url: "https://www.shazam.com/"}],
    img: shazam,
  },
  {
    id: 22,
    name: "Create a Spotify Playlist",
    link: [{name: "Spotify", url: "https://open.spotify.com/"}],
    img: spotify,
  },
  {
    id: 23,
    name: "Share the video on social media",

    img: twitter,
    link: [
      {name: "Twitter", url: "https://twitter.com/"},
      {name: "Instagram", url: "https://www.instagram.com/"},
      {name: "Facebook", url: "https://www.facebook.com/"},
      {name: "TikTok", url: "https://www.tiktok.com/"},
    ],
  },
  {
    id: 24,
    name: "Stream on Amazon",
    link: [{ name: "Amazon Music", url:  "https://music.amazon.com/albums/B0CY6SZT5K"}],
    img: amazonmusic,
  },
  {
    id: 25,
    name: "Share your favorite lyric",
    link: [{ name: "Spotify", url: "https://open.spotify.com/lyrics"}],
    img: spotify,
  },
];
