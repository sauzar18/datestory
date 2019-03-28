<template>
  <div>
    <app-header />
    <main>
      <nav class="st-bread">
        <ol>
          <li>
            <n-link to="/">
              TOP
            </n-link>
          </li>
          <li>
            <n-link to="/posts">
              投稿一覧
            </n-link>
          </li>
          <li>
            {{ article.title }}
          </li>
        </ol>
      </nav>
      <div class="st-article__box">
        <article class="st-column">
          <h2 class="title">
            {{ article.title }}
          </h2>
          <div class="st-post__author">
            <dl v-if="article.post_author">
              <dt>投稿者:</dt>
              <dd>{{ article.post_author }}</dd>
            </dl>
            <dl
              v-if="article.post_date"
              class="time"
            >
              <dt>投稿日:</dt>
              <dd>{{ article.post_date | moment }}</dd>
            </dl>
          </div>
          <ul
            v-if="article.location || article.category"
            class="category"
          >
            <li v-if="article.location">
              {{ article.location }}
            </li>
            <li v-if="article.category">
              {{ article.category }}
            </li>
          </ul>
          <figure>
            <img
              :src="article.thumbnail"
              :alt="article.title"
            >
          </figure>
          <div
            v-html="article.content"
            class="st-article__content"
          />
        </article>
      </div>
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
  async asyncData({ app, store, params, context }) {
    const data = await app.$axios.$get(`/api/get_column/${params.id}`)
    store.commit('setArticle', data[0])
    return { test: data }
  },
  computed: {
    article() {
      return this.$store.state.article
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #4ecca3;
$deep: #232931;
.st-column {
  width: 720px;
  figure {
    display: flex;
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      background-color: #ddd;
    }
  }
}
h2 {
  font-size: 24px;
  margin-bottom: 12px;
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
.st-article__box {
  width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
