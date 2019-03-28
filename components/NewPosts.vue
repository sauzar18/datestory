<template>
  <section class="st-newpost__list">
    <h2>新着デートプラン</h2>
    <ul>
      <li
        v-for="(item, i) in newposts"
        :key="i"
      >
        <nuxt-link :to="'/posts/' + item.id">
          <article class="st-newpost__article">
            <header>
              <h3>{{ item.title }}</h3>
              <figure>
                <img
                  :src="item.thumbnail"
                  :alt="item.title"
                >
              </figure>
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
  </section>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    newpost: {
      type: Array,
      required: true
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('YYYY年MM月DD日')
    }
  },
  data () {
    return {
      newposts: this.newpost
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
  width: 320px;
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
    padding: 20px;
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
</style>
