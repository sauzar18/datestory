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
            <n-link to="/consults">
              相談一覧
            </n-link>
          </li>
          <li>
            {{ article.title }}
          </li>
        </ol>
      </nav>
      <div class="st-article__box">
        <div class="st-article__left">
          <article class="st-column">
            <h2 class="title">
              {{ article.title }}
            </h2>
            <div class="st-post__author">
              <dl v-if="article.author">
                <dt>投稿者:</dt>
                <dd>{{ article.author }}</dd>
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
            <div
              v-html="article.content"
              class="st-article__content"
            />
          </article>
          <section class="st-answer">
            <h2>回答一覧</h2>
            <ul v-if="answers.toString()">
              <li
                v-for="(answer ,i) in parentComment"
                :key="i"
              >
                <div class="st-parent__comment">
                  <dl>
                    <dt>by {{ answer.author }}</dt>
                    <dd>{{ answer.answer}}</dd>
                  </dl>
                  <button
                    type="button"
                    @click="isComment(answer.id)"
                  >
                    コメントする
                  </button>
                </div>
                <ul class="st-child__comment">
                  <li
                    v-for="(comment, i) in childComment(answer.id)"
                    :key="i"
                  >
                    <dl>
                      <dt>by {{ comment.author }}</dt>
                      <dd>{{ comment.answer}}</dd>
                    </dl>
                  </li>
                </ul>
              </li>
            </ul>
            <p v-else>現在回答はありません</p>
            <section
              :class="{ active: isActive }"
              class="st-modal__comment"
            >
              <div class="title">
                <h3>コメントを投稿する</h3>
                <button
                  type="button"
                  class="st-close"
                  @click="isActive = false"
                >
                  <i>
                    <img
                      src="~static/images/ic_close.svg"
                      alt="閉じる"
                    >
                  </i>
                </button>
              </div>
              <form
                action="/api/answers"
                method="POST"
              >
                <input
                  :value="$store.state.csrfToken"
                  type="hidden"
                  name="_csrf"
                >
                <input
                  :value="consultId"
                  type="hidden"
                  name="consult_id"
                >
                <input
                  :value="id"
                  type="hidden"
                  name="parent_id"
                >
                <div class="st-textfield">
                  <input
                    id="author2"
                    v-model="author2"
                    type="text"
                    name="author"
                  >
                  <label for="author2">投稿者名</label>
                </div>
                <div class="st-textfield area">
                  <textarea
                    id="comment"
                    v-model="comment"
                    name="answer"
                    cols="30"
                    rows="10"
                  />
                  <label for="comment">コメント</label>
                </div>
                <button
                  type="submit"
                  class="green"
                >
                  投稿
                </button>
              </form>
            </section>
          </section>
        </div>
        <consults :consult="consult" />
      </div>
      <section
        :class="{ active: isAnswer }"
        class="st-answerbox"
      >
        <div>
          <h2>回答をする</h2>
          <form
            action="/api/answers"
            method="POST"
          >
            <input
              :value="$store.state.csrfToken"
              type="hidden"
              name="_csrf"
            >
            <input
              :value="consultId"
              type="hidden"
              name="consult_id"
            >
            <input
              value="0"
              type="hidden"
              name="parent_id"
            >
            <div class="st-textfield">
              <input
                id="author"
                type="text"
                name="author"
              >
              <label for="author">投稿者名</label>
            </div>
            <div class="st-textfield area">
              <textarea
                id="answer"
                name="answer"
                cols="30"
                rows="10"
              />
              <label for="answer">回答</label>
            </div>
            <button type="submit">
              回答する
            </button>
          </form>
        </div>
      </section>
      <div class="st-post__button">
        <button
          v-if="isAnswer === false"
          type="button"
          @click="isAnswer = true"
        >
          回答する
        </button>
        <button
          v-else
          class="st-close"
          type="button"
          @click="isAnswer = false"
        >
          投稿画面を閉じる
        </button>
      </div>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/Header.vue'
import Consults from '~/components/Consults.vue'
import moment from 'moment'
export default {
  components: {
    AppHeader,
    Consults
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
    const [data, data2, data3] = await Promise.all([
      app.$axios.$get(`/api/get_column/${params.id}`),
      app.$axios.$get(`/api/get_answers/${params.id}`),
      app.$axios.$get(`/api/consults/${params.id}`)
    ])
    store.commit('setArticle', data[0])
    return { consultId: params.id, answers: data2, consult: data3 }
  },
  data () {
    return {
      isAnswer: false,
      isActive: false,
      id: '',
      comment: '',
      author: '',
      author2: ''
    }
  },
  computed: {
    article() {
      return this.$store.state.article
    },
    parentComment() {
      let list = this.answers
      list = list.filter(function (row) {
        if (row['parent_id'] !== 0) {
          return false
        }
        return row
      })
      return list
    }
  },
  methods: {
    isComment(id) {
      this.id = id
      this.isActive = true
    },
    childComment(id) {
      let list = this.answers
      list = list.filter(function (row) {
        if (row['parent_id'] !== id) {
          return false
        }
        return row
      })
      return list
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #4ecca3;
$deep: #232931;
.st-article__left {
  width: 640px;
}
.st-column {
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
.st-textfield {
  margin-bottom: 20px;
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
  margin: 0 auto 60px;
  width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.st-answer {
  margin: 40px auto;
  position: relative;
  h2 {
    background-color: #ddd;
    padding: 6px 16px;
    border-radius: 5px 5px 0 0;
    font-size: 18px;
  }
  dl {
    display: flex;
    position: relative;
    width: 100%;
  }
  dt {
    position: absolute;
    top: -18px;
    flex-shrink: 0;
    font-size: 12px;
    background-color: #fff;
    line-height: 1;
  }
  dd {
    margin-right: 10px;
  }
}
.st-parent__comment {
  border: #4ecca3 1px solid;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    font-size: 12px;
    color: #4ecca3;
    font-weight: bold;
    flex-shrink: 0;
    &:hover {
      text-decoration: underline;
    }
  }
}
.st-child__comment {
  width: 96%;
  margin-left: auto;
  li {
    border: #4ecca3 1px solid;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  
}
.st-answerbox {
  position: fixed;
  bottom: 40px;
  left: 0;
  background-color: #fff;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  visibility: visible;
  transition: 0.2s all;
  > div {
    width: 90%;
    max-width: 980px;
    margin: 0 auto;
    padding: 20px 0;
  }
  h2 {
    font-size: 18px;
  }
  .st-textfield {
    background-color: #efefef;
  }
  button {
    width: 120px;
    height: 40px;
    background-color: #000;
    color: #fff;
    border-radius: 2px;
    &:hover {
      background-color: rgb(32, 31, 31);
    }
  }
}
.st-answerbox.active {
  border-top: 2px solid #000;
  max-height: 400px;
  overflow: auto;
  visibility: initial;
  box-shadow: 0 -4px 6px rgba(0,0,0,0.16);
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
.st-modal__comment {
  padding: 0 20px;
  width: 90%;
  margin-left: auto;
  border-radius: 5px;
  max-height: 0;
  overflow: hidden;
  visibility: visible;
  transition: 0.2s all;
  position: relative;
  .title {
    border-bottom: 1px solid #37bf91;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h3 {
      font-size: 16px;
    }
  }
  .st-textfield {
    background-color: #effff9;
  }
  button {
    width: 120px;
    height: 40px;
  }
  button.st-close {
    width: 24px;
    height: 24px;
    background-color: transparent;
    margin-bottom: 8px;
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
}
.st-modal__comment.active {
  border: 1px solid #37bf91;
  padding: 20px;
  max-height: 400px;
  overflow: auto;
  visibility: initial;
}
@media screen and (max-width: 980px) {
  .st-article__box {
    width: 90%;
    flex-direction: column;
  }
  .st-column {
    width: 100%;
  }
  .st-article__left {
    width: 100%;
  }
}
@media screen and (max-width: 680px) {
  

}
</style>
