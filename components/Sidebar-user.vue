<template>
  <nav>
    <h2>MENU</h2>
    <ul>
      <li>
        <nuxt-link to="/">
          サイトトップへ
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mypage">
          マイページ
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mypage/list">
          記事一覧
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mypage/favorite">
          お気に入り一覧
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #4ECCA3;
  width: 240px;
}
h2 {
  font-weight: normal;
  padding: 0 16px;
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  a {
    padding: 18px 16px;
    border-bottom: 1px solid #fff;
  }
}
i {
  display: flex;
  align-items: center;
  margin-right: 7px;
}
a {
  padding: 0 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #212121;
  &:hover,
  &:focus {
    background-color: #fff;
    color: #4ECCA3
  }
}
li {
  a {
    height: 40px;
    color: #fff;
  }
}
.nuxt-link-exact-active {
  background-color: #fff;
  color: #4ECCA3
}
</style>
