<template>
  <footer class="deep">
    <div class="inner">
      <h2><n-link to="/">dates</n-link></h2>
      <nav>
        <ul>
          <li>
            <n-link to="/terms">利用規約</n-link>
          </li>
          <li>
            <n-link to="/contact">お問い合わせ</n-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  padding: 20px 0;
}
.inner {
  width: 980px;
  margin: 0 auto;
}
a {
  color: #fff;
}
ul {
  display: flex;
  align-items: center;
}
li {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
