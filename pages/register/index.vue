<template>
  <div>
    <app-header />
    <main>
      <section class="st-register">
        <h2>新規登録</h2>
        <p>会員登録すると以下の機能がご利用できます。</p>
        <ul>
          <li>・記事編集</li>
          <li>・投稿履歴</li>
          <li>・ユーザー名投稿</li>
        </ul>
        <div class="st-form">
          <div class="st-textfield">
            <input
              id="user_name"
              v-model="user_name"
              type="text"
              name="user_name"
              required
              aria-required="true"
            >
            <label for="user_name">ユーザー名(ログイン後変更可)</label>
          </div>
          <div class="st-textfield">
            <input
              id="login"
              v-model="email"
              type="text"
              name="email"
              required
              aria-required="true"
            >
            <label for="login">メールアドレス(ログインID)<span class="st-required">必須</span></label>
          </div>
          <div class="st-textfield">
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              required
              aria-required="true"
            >
            <label for="password">パスワード<span class="st-required">必須</span></label>
          </div>
          <button
            class="st-button deep"
            type="button"
            @click="isConfirm = true"
          >
            登録内容確認
          </button>
        </div>
        <section
          :class="{ active : isConfirm }"
          class="st-confirm"
        >
          <h3>登録内容確認</h3>
          {{ formError }}
          <form @submit.prevent="register">
            <input
              :value="$store.state.csrfToken"
              type="hidden"
              name="_csrf"
            >
            <input
              v-model="permission"
              type="hidden"
              name="permission"
            >
            <div class="st-textfield readonly">
              <input
                v-model="user_name"
                type="text"
                name="user_name"
                readonly
              >
              <label for="user_name">ユーザー名(ログイン後変更可)</label>
            </div>
            <div class="st-textfield readonly">
              <input
                v-model="email"
                type="email"
                name="email"
                readonly
              >
              <label for="login">メールアドレス(ログインID)<span class="st-required">必須</span></label>
            </div>
            <div class="st-textfield readonly">
              <input
                v-model="password"
                type="text"
                name="password"
                readonly
              >
              <label for="password">パスワード<span class="st-required">必須</span></label>
            </div>
            <div class="st-submit__button">
              <button
                class="st-button gray"
                type="button"
                @click="isConfirm = false"
              >
                入力画面へ戻る
              </button>
              <button
                class="st-button deep"
                type="submit"
              >
                内容を確認の上送信
              </button>
            </div>
          </form>
        </section>
        <div
          class="st-hidden"
          @click="isConfirm = false"
        />
      </section>
    </main>
    <app-footer />
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
  data() {
    return {
      email: '',
      user_name: '',
      password: '',
      permission: 'editor',
      isConfirm: false,
      formError: ''
    }
  },
  methods: {
    async register () {
      try {
        await this.$store.dispatch('register', {
          name: this.user_name,
          email: this.email,
          password: this.password,
          permission: this.permission,
          _csrf: this.$store.state.csrfToken
        })
        setTimeout(() => {
          location.href = '/register/complete'
        }, 0.1)
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.st-register {
  width: 980px;
  margin: 40px auto;
}
.st-form {
  margin: 20px 0;
}
h2 {
  font-size: 24px;
  border-bottom: 2px solid #232931;
  margin-bottom: 20px;
}
p {
  margin-bottom: 20px;
}

.st-textfield {
  margin-bottom: 26px;
}
.st-confirm {
  max-height: 0;
  overflow: hidden;
  visibility: visible;
  h3 {
    font-size: 24px;
    border-bottom: 2px solid #232931;
    margin-bottom: 20px;
  }
}
.st-confirm.active {
  position: fixed;
  width: 560px;
  padding: 20px;
  background-color: #fff;
  margin: 0 auto;
  top: 60px;
  left: 0;
  right: 0;
  max-height: 80vh;
  overflow: auto;
  visibility: initial;
  z-index: 2;
  + .st-hidden {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
  }
}
.st-button {
  width: 160px;
  height: 40px;
}
</style>
