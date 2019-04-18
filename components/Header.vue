<template>
  <header>
    <div class="st-inner">
      <h1>
        <nuxt-link to="/">dates</nuxt-link>
      </h1>
      <nav>
        <ul v-if="!$store.state.authUser">
          <li>
            <n-link to="/register">新規登録</n-link>
          </li>
          <li>
            <n-link to="/login">ログイン</n-link>
          </li>
        </ul>
        <ul v-else>
          <li>
            <n-link to="/mypage">マイページ</n-link>
          </li>
          <li class="st-login">
            <button
              type="button"
              @click="logout"
            >
              ログアウト
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout', {
          _csrf: this.$store.state.csrfToken
        }).then(() => this.$router.go('/'))
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.st-inner {
  margin: 0 auto;
  max-width: 980px;
  height: 60px;
  display: flex;
  align-items: center;
}
nav {
  margin-left: auto;
}
ul {
  display: flex;
}
li {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
a {
  color: #232931;
  &:hover {
    text-decoration: underline;
  }
}
.st-login {
  button {
    background-color: transparent;
    &:hover {
      text-decoration: underline
    }
  }
}
@media screen and (max-width: 980px) {
  .st-inner {
    width: 90%;
  }
}
</style>
