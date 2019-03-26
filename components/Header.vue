<template>
  <header>
    <div class="st-inner">
      <h1>dates</h1>
      <nav>
        <ul>
          <li>
            <n-link to="/register">新規登録</n-link>
          </li>
          <li>
            <n-link to="/login">ログイン</n-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.st-inner {
  width: 80%;
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
</style>
