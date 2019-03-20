<template>
  <div>
    <app-header />
    <main>
      <div class="st-column">
        <section class="st-column__left">
          <h2>記事一覧</h2>
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
            >
              <n-link
                :to="`/posts/${post.id}`"
                class="st-column__article"
              >
                <article>
                  <div class="st-article__header">
                    <h3 class="text-green">{{ post.title }}</h3>
                    <p><em>{{ post.location }}</em></p>
                    <p>{{ post.content | replaceName }}</p>
                    <div class="st-article__footer">
                      <dl>
                        <dt>投稿者</dt>
                        <dd>{{ post.author }}</dd>
                      </dl>
                      <time :datetime="post.post_date">
                        {{ post.post_date | moment }}
                      </time>
                    </div>
                  </div>
                  <figure>
                    <img
                      :src="post.thumbnail"
                      :alt="post.title"
                    >
                    <figcaption>
                      {{ post.category }}
                    </figcaption>
                  </figure>
                </article>
              </n-link>
            </li>
          </ul>
        </section>
        <section class="st-column__right">
          <h2>新着記事</h2>
        </section>
        <div
          :class="{ active: isActive }"
          class="st-modal"
        >
          <section class="st-modal__left">
            <form action="/api/posts" method="POST">
              <div class="st-title">
                <h2>記事作成</h2>
                <button type="submit">
                  投稿
                </button>
              </div>
              <input
                :value="$store.state.csrfToken"
                type="hidden"
                name="_csrf"
              >
              <div class="st-textfield thin full">
                <input
                  id="title"
                  v-model="post_title"
                  type="text"
                  name="post_title"
                  required
                  aria-required="true"
                >
                <label for="title">タイトル</label>
              </div>
              <div class="st-textfield thin full">
                <input
                  id="post_name"
                  v-model="post_name"
                  type="text"
                  name="post_name"
                  required
                  aria-required="true"
                >
                <label for="post_name">投稿者名</label>
              </div>
              <div class="st-half">
                <div class="st-textfield thin">
                  <input
                    id="location"
                    v-model="post_location"
                    type="text"
                    name="post_location"
                    placeholder="渋谷,表参道"
                    required
                    aria-required="true"
                  >
                  <label for="location">地域</label>
                </div>
                <dl class="st-radiofield light thin">
                  <dt>投稿属性</dt>
                  <dd>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="みてみて"
                        required
                        aria-required="true"
                      >
                      <span>みてみて</span>
                    </label>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="相談"
                        required
                        aria-required="true"
                      >
                      <span>相談</span>
                    </label>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="理想"
                        required
                        aria-required="true"
                      >
                      <span>理想</span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div class="st-textfield">
                <input
                  v-model="process_title01"
                  name="process_title01"
                  type="text"
                >
              </div>
            </form>
          </section>
          <section class="st-modal__right">
            <h2>プレビュー</h2>
            <section class="st-post__preview">
              <h3 class="title">
                {{ post_title }}
              </h3>
              <div
                v-if="post_title"
                class="st-post__author"
              >
                <dl v-if="post_name">
                  <dt>投稿者:</dt>
                  <dd>{{ post_name }}</dd>
                </dl>
                <dl
                  v-if="post_date"
                  class="time"
                >
                  <dt>投稿日:</dt>
                  <dd>{{ post_date }}</dd>
                </dl>
              </div>
              <ul
                v-if="post_location || post_category"
                class="category"
              >
                <li v-if="post_location">
                  {{ post_location }}
                </li>
                <li v-if="post_category">
                  {{ post_category }}
                </li>
              </ul>
              <div v-html="content" />
            </section>
          </section>
        </div>
        <div
          class="st-hidden"
          @click="isActive = false"
        />
      </div>
      <nav class="st-post__button">
        <button
          type="button"
          @click="isActive = true"
        >
          記事を投稿する
        </button>
      </nav>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/Header.vue'
import moment from 'moment'
export default {
  components: {
    AppHeader
  },
  filters: {
    moment(date) {
      return moment(date).format('YYYY年MM月DD日')
    },
    datetime(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    replaceName(data) {
      return data.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 50)
    }
  },
  data() {
    return {
      allPost: 0,
      errors: '',
      title: 'test',
      description: 'test',
      isActive: false,
      post_title: '',
      post_name: '',
      post_date: moment().format('YYYY年MM月DD日'),
      post_location: '',
      post_category: '',
      content: '',
      uploadFile: '',
      filepath: '',
      process_title01: ''
    }
  },
  computed: {
    count() {
      const pages = this.allPost / 20
      if (pages > 1 && pages < 2) return 2
      else return Math.floor(pages)
    }
  },
  async asyncData({ app, store, params }) {
    let page
    if (await app.context.query['page']) {
      page = await app.context.query['page']
    } else {
      page = 1
    }
    const start = 20 * (page - 1)
    const data = await app.$axios.$get(`/api/post_columns/${start}`)
    return { posts: data }
  },
  watchQuery: ['page'],
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:url', content: 'https://medee.jp/column' },
        { property: 'og:image', content: 'https://medee.jp/images/ogp.png' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: 'https://medee.jp/images/ogp.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://medee.jp/column' }
      ]
    }
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      this.filepath = '/upload/' + file.name
      formData.set('fileupload', this.filepath)
      formData.append('column_figure', file)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.$store.state.csrfToken,
          'X-CSRF-TOKEN': this.$store.state.csrfToken
        }
      }
      this.$axios.$post('/api/admin_fileupload_column', formData, config)
        .then((result) => {
          Editor.insertEmbed(cursorLocation, 'image', this.filepath2)
          Editor.formatText(cursorLocation, cursorLocation + 1, 'alt', 'コラム画像')
          resetUploader()
        })
        .catch((err) => {
          if (!err) {
            Editor.insertEmbed(cursorLocation, 'image', this.filepath2)
            Editor.formatText(cursorLocation, cursorLocation + 1, 'alt', 'コラム画像')
            resetUploader()
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #4ecca3;
$deep: #232931;
.st-column {
  width: 980px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
h2 {
  color: $deep;
  font-size: 18px;
  border-bottom: 2px solid $deep;
  margin-bottom: 20px;
}
.st-column__left {
  width: 620px;
  li {
    margin-bottom: 10px;
  }
}
.st-column__right {
  width: 320px;
}
.st-column__article {
  display: flex;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
  padding: 20px;
  &:hover,
  &:focus {
    background-color: #f4f4f4;
  }
  article {
    display: flex;
    width: 100%;
  }
  figure {
    width: 120px;
    order: -1;
    margin-right: 20px;
    flex-shrink: 0;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    background-color: $blue;
    color: #fff;
    padding: 2px 6px;
  }
  div {
    color: #000;
    word-break: break-all;
  }
  time {
    font-size: 12px;
    color: rgb(148, 148, 148);
  }
  dl {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: rgb(148, 148, 148);
  }
  dt {
    margin-right: 8px;
  }
  em {
    font-style: normal;
    font-size: 14px;
  }
}
.st-article__header {
  width: 100%;
}
.st-article__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.st-pagenation {
  width: 100%;
}
.st-post__button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  button {
    font-size: 16px;
    width: 100%;
    height: 40px;
    background-color: $blue;
    color: #fff;
    &:hover {
      background-color: #37bf91;
    }
  }
}
.st-modal {
  max-height: 0;
  overflow: hidden;
  visibility: visible;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: 0.2s all;
  padding: 0 20px;
}
.st-modal.active {
  overflow: auto;
  max-height: 100%;
  visibility: initial;
  z-index: 2;
  padding: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  + .st-hidden {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.16);
    z-index: 1;
  }
}
.st-modal__left {
  width: 52%
}
.st-modal__right {
  width: 46%;
}
.st-post__preview {
  .title {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .category {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    li {
      padding: 2px 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      border: 1px solid $deep;
      border-radius: 4px;
      font-size: 14px;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.st-post__author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  dl {
    display: flex;
    margin-bottom: 8px;
  }
}
@media screen and (max-width: 980px) {
  .st-column {
    width: 90%;
    flex-direction: column;
  }
  .st-column__left {
    width: 100%;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 480px) {
  .st-column {
    margin: 5.3333vw auto;
  }
  .st-column__article {
    padding: 4.26666vw;
    article {
      flex-direction: column;
      position: relative;
    }
    figure {
      width: auto;
      margin-right: 0;
      display: inline-flex;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
      img {
        display: none;
      }
    }
    figcaption {
      position: static;
    }
    h3 {
      font-size: 4.26666vw;
    }
    time {
      font-size: 3.2vw;
    }
  }
  .st-column__left {
    margin-bottom: 5.3333vw;
  }
}
</style>
