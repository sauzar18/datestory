<template>
  <div>
    <app-header/>
    <main>
      <div class="st-login">
        <section class="st-login__left">
          <h2>ログイン</h2>
          <p
            v-if="formError"
            class="error"
          >
            {{ formError }}
          </p>
          <form @submit.prevent="login">
            <div class="st-textfield">
              <input
                id="email"
                v-model="email"
                type="text"
                name="email"
              >
              <label for="email">メールアドレス</label>
            </div>
            <div class="st-textfield">
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
              >
              <label for="password">パスワード(英数字12文字以上)</label>
            </div>
            <div class="st-login__button">
              <button
                class="st-button yellow medium-button"
                type="submit"
              >
                ログインする
              </button>
              <nuxt-link to="/password_request">＊パスワードを忘れた方はこちら</nuxt-link>
            </div>
          </form>
        </section>
        <section class="st-login__right">
          <h2>会員登録をしましょう</h2>
          <div>
            <p>会員登録するときになる求人の最新情報や応募が簡単になります。</p>
            <ul>
              <li>魅力的な歯科求人に応募ができる</li>
              <li>気になる歯科求人をお気に入りにいれられる</li>
              <li>応募履歴を管理できる</li>
            </ul>
            <nuxt-link
              to="/register"
              class="st-button black"
            >
              新規会員登録はこちら
            </nuxt-link>
          </div>
        </section>
      </div>
    </main>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  },
  fetch ({ store, redirect }) {
    if (store.state.authUser) {
      return redirect('/')
    }
  },
  data () {
    return {
      title: 'ログインページ | 歯科医師・衛生士の求人・募集・転職なら【MEDEE】',
      description: '歯科医師・歯科衛生士・歯科助手・歯科技工士の求人・転職・募集情報が豊富に掲載されているMEDEEのログインページです。まだ登録がお済みではない歯科医師・歯科衛生士・歯科助手・歯科技工の方は新規登録を。募集中の求人に応募をすることができます。',
      password: '',
      email: '',
      formError: null
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.title},
        { property: 'og:description', content: this.description},
        { property: 'og:url', content: 'https://medee.jp/login'},
        { property: 'og:image', content: 'https://medee.jp/images/ogp.png' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: 'https://medee.jp/images/ogp.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://medee.jp/login' }
      ]
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          usermail: this.email,
          password: this.password,
          _csrf: this.$store.state.csrfToken
        }).then(() => this.$router.go('/'))
        this.email = ''
        this.password = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.error {
  color: red;
  width: 360px;
  margin: 0 auto;
}
.st-login {
  width: 980px;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  margin: 60px auto;
  section {
    width: 490px;
  }
}
h2 {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 1px solid #000;
}
.st-textfield {
  margin: 0 auto 20px;
}
.st-login__button {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    margin-bottom: 6px;
  }
  button {
    width: 260px;
    height: 40px;
  }
  a {
    font-size: 16px;
    color: #000;
    margin-top: 10px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
.st-login__right {
  > div {
    width: 360px;
    margin: 0 auto;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  a {
    width: 260px;
    margin: 0 auto;
  }
  ul {
    margin-bottom: 20px;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #53CDE2;
      margin-right: 8px;
      flex-shrink: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 980px) {
  .st-login {
    width: 90%;
    margin: 60px auto;
    flex-direction: column;
    section {
      width: 100%;
    }
  }
  .st-login__left {
    border-right: 0;
    border-bottom: 2px dashed #005792;
  }
}
@media screen and (max-width: 480px) {
  .error {
    width: 100%;
  }
  .st-login {
    margin: 5.3333vw auto 10.6666vw;
    section {
      padding: 5.3333vw;
    }
  }
  h2 {
    font-size: 4.8vw;
    border-bottom: 2px solid #005792;
    margin-bottom: 5.3333vw;
  }
  .st-login__button {
    margin-top: 6.4vw;
    button {
      width: 69.3333vw;
    }
    a {
      font-size: 3.8vw;
    }
  }
  .st-login__right {
    p {
      margin-bottom: 5.3333vw;
    }
    > div {
      width: 100%;
    }
    ul {
      margin-bottom: 5.3333vw;
    }
    li {
      margin-bottom: 2.6666vw;
    }
    p {
      font-size: 4.26666vw;
    }
    a {
      width: 69.3333vw;
    }
  }
}
</style>
