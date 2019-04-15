<template>
  <div>
    <app-header />
    <main>
      <section class="st-login">
        <h2>ログイン</h2>
        <form
          class="st-form"
          @submit.prevent="login"
        >
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
            type="submit"
            class="st-button deep"
          >
            ログインする
          </button>
        </form>
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
  fetch ({ store, redirect }) {
    if (store.state.authUser) {
      return redirect('/')
    }
  },
  data () {
    return {
      email: '',
      password: '',
      formError: null
    }
  },
  methods: {
    async login() {
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
.st-login {
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
.st-button {
  width: 160px;
  height: 40px;
}
</style>
