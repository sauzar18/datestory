<template>
  <section class="st-newpost__list">
    <h2>デート相談一覧</h2>
    <ul v-if="consults.toString()">
      <li
        v-for="(item, i) in consults"
        :key="i"
      >
        <nuxt-link :to="'/consults/' + item.id">
          <article class="st-newpost__article">
            <header>
              <h3>{{ item.title }}</h3>
            </header>
            <footer>
              <p>{{ item.author }}</p>
              <time :datetime="item.post_date">
                {{ item.post_date | moment }}
              </time>
            </footer>
          </article>
        </nuxt-link>
      </li>
    </ul>
    <p v-else>現在相談されたデートプランはございません</p>
  </section>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    consult: {
      type: Array,
      required: false
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('YYYY年MM月DD日')
    }
  },
  data () {
    return {
      consults: this.consult
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #4ecca3;
$deep: #232931;
h2 {
  color: $deep;
  font-size: 18px;
  border-bottom: 2px solid $deep;
  margin-bottom: 20px;
}
footer {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgb(148, 148, 148);
}
.st-newpost__list {
  width: 300px;
  h3 {
    font-size: 16px;
    padding: 0 12px;
    line-height: 1.5;
  }
  p {
    padding: 0 12px;
    line-height: 1.5;
    font-size: 14px;
  }
  ul {
    background-color: #fff;
  }
  video {
    width: 100%;
    height: 158px;
    order: -1;
    margin-bottom: 8px;
    position: relative;
    overflow: hidden;
    object-fit: cover;
  }
  figure {
    width: 100%;
    height: 158px;
    order: -1;
    margin-bottom: 8px;
    position: relative;
    overflow: hidden;
    img {
      transition: 0.2s all;
    }
    &::before {
      transition: 0.2s all;
      content: "";
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  a {
    color: #000;
    display: flex;
    padding-top: 10px;
    &:hover,
    &:focus {
      background-color: #efefef;
      figure {
        img {
          transform: scale(1.1);
        }
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          background-color: rgba(0,0,0,0.3);
        }
      }
    }
  }
  li {
    border-bottom: #7A7878 1px dashed;
  }
}
.st-newpost__article {
  padding-bottom: 15px;
  width: 100%;
  header {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 980px) {
  .st-newpost__list {
    width: 100%;
  }
}
</style>
