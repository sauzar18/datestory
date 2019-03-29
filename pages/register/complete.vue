<template>
  <div>
    <app-header/>
    <main>
      <section class="st-complete">
        <h2>登録完了</h2>
        <p>登録完了メールが届きますので、そちらをご確認ください。<br>その後ご利用が開始できます。</p>
        <div class="st-complete__box">
          <p>その他ご不明な点がございましたら、<br>こちらまでお問い合わせください。</p>
          <nuxt-link
            to="/contact"
            class="st-button deep"
          >
            お問い合わせ
          </nuxt-link>
        </div>
        <nuxt-link
          to="/"
          class="st-button st-top deep"
        >
          トップへ戻る
        </nuxt-link>
      </section>
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
  head () {
    return {
      title: '会員登録完了 | MEDEE',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        { hid: 'description', name: 'description', content: 'MEDEEへのご登録ありがとうございます。引き続きご利用よろしくお願いいたします。' }
      ],
      link: [
        { rel: 'canonical', href: 'https://medee.jp/register/complete' },
        { rel: 'prev', href: 'https://medee.jp/register' }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.st-complete {
  width: 980px;
  background-color: #fff;
  padding: 40px 110px;
  margin: 40px auto;
  h2 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  > p {
    text-align: center;
    margin-bottom: 20px;
  }
}
.st-complete__list {
  font-size: 18px;
  font-weight: bold;
  color: #10316B;
  margin: 40px 0;
  padding: 0 10px;
  li {
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.st-complete__box {
  width: 500px;
  box-sizing: border-box;
  margin: 0 auto 40px;
  padding: 40px 0;
  border: 1px solid #232931;
  p {
    color: #10316B;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  margin: 0 auto;
}
@media screen and (max-width: 980px) {
  .st-complete {
    width: 90%;
    padding: 40px;
  }
  .st-complete__box {
    width: 80%;
  }
}
@media screen and (max-width: 480px) {
  .st-complete {
    padding: 5.3333vw;
    margin: 5.3333vw auto 10.6666vw;
    h2 {
      padding-bottom: 1.06666vw;
      font-size: 4.8vw;
      margin-bottom: 5.3333vw;
    }
  }
  .st-complete__list {
    margin: 0 auto 5.3333vw;
    padding: 0;
    li {
      font-size: 3.8vw;
      margin-bottom: 1.2vw;
    }
  }
  .st-complete__box {
    width: 100%;
    margin: 0 auto 5.3333vw;
    padding: 6.6666vw 0;
    p {
      font-size: 3.8vw;
      margin-bottom: 5.3333vw;
    }
    a {
      width: 53.3333vw;
      height: 10.6666vw;
    }
  }
  .st-top {
    width: 53.3333vw;
    height: 10.6666vw;
  }
}
</style>


