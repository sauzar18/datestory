<template>
  <div>
    <app-header />
    <main>
      <div class="st-admin">
        <app-sidebar/>
        <section class="st-admin__control">
          <h2>記事一覧</h2>
          <nuxt-link
            to="/mypage/list/new"
            class="st-button st-newbutton"
          >
            新規追加
          </nuxt-link>
          <nav class="st-sort__permission">
            <ul>
              <li>
                <div>
                  <label for="all">
                    <input
                      id="all"
                      v-model="selectCategory"
                      type="radio"
                    >
                    <span>すべて ({{ posts.length }})</span>
                  </label>
                </div>
              </li>
              <li>
                <div>
                  <label for="consumer">
                    <input
                      id="consumer"
                      v-model="selectCategory"
                      type="radio"
                      value="公開"
                    >
                    <span>公開 ({{ countUser('公開') }})</span>
                  </label>
                </div>
              </li>
              <li>
                <div>
                  <label for="admin">
                    <input
                      id="admin"
                      v-model="selectCategory"
                      type="radio"
                      value="非公開"
                    >
                    <span>非公開 ({{ countUser('非公開') }})</span>
                  </label>
                </div>
              </li>
              <li>
                <input
                  v-model="searchWord"
                  class="st-search"
                  type="text"
                  placeholder="絞り込み検索"
                >
              </li>
            </ul>
          </nav>
          <table v-if="sortedItems.toString()">
            <thead>
              <tr>
                <th/>
                <th>
                  <button
                    :class="sortedClass('column_title')"
                    type="button"
                    @click="sortBy('column_title')"
                  >
                    タイトル
                  </button>
                </th>
                <th>
                  <button
                    :class="sortedClass('post_status')"
                    type="button"
                    @click="sortBy('post_status')"
                  >
                    公開ステータス
                  </button>
                </th>
                <th>
                  <button
                    :class="sortedClass('create_at')"
                    type="button"
                    @click="sortBy('create_at')"
                  >
                    作成日
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(clinic, i) in sortedItems"
                :key="i"
              >
                <td class="st-checkbox">
                  <label>
                    <input
                      v-model="clientids"
                      :value="clinic.id"
                      type="checkbox"
                    >
                    <span/>
                  </label>
                </td>
                <td>
                  <nuxt-link :to="'/admin/columns/' + clinic.id">
                    {{ clinic.column_title }}
                  </nuxt-link>
                </td>
                <td>{{ clinic.post_status }}</td>
                <td>{{ clinic.create_at | moment }}</td>
              </tr>
            </tbody>
          </table>
          <p v-else>作成された記事はありません</p>
          <form
            v-if="clientids.toString()"
            action="/api/column_remove"
            method="POST"
          >
            <input
              :value="$store.state.csrfToken"
              type="hidden"
              name="_csrf"
            >
            <input
              :value="clientids"
              name="ids[]"
              type="hidden"
            >
            <button
              class="st-delete yellow medium-button"
              type="button"
              @click="isActive = !isActive"
            >
              コラムを削除する
            </button>
            <div
              :class="{ active : isActive }"
              class="st-attention"
            >
              <p>本当に削除しても良いですか？</p>
              <button
                class="st-delete yellow medium-button"
                type="submit"
              >
                コラムを削除する
              </button>
            </div>
            <div
              class="st-block"
              @click="isActive = false"
            />
          </form>
          <button
            v-if="(sortedItems.length - count) >= 0"
            class="st-motto st-button medium-button blue"
            type="button"
            @click="isMore"
          >
            もっとみる
          </button>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/Header-user.vue'
import AppSidebar from '~/components/Sidebar-user.vue'
import moment from 'moment'
export default {
  components: {
    AppHeader,
    AppSidebar
  },
  fetch ({ store, redirect }) {
    if (!store.state.authUser) {
      return redirect('/login')
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('YYYY年MM月DD日HH時mm分')
    }
  },
  async asyncData ({ app, store, params }) {
    const data = await app.$axios.$get(`/api/get_user_columns/${store.state.authUser.userid}`)
    return { posts: data }
  },
  data () {
    return {
      searchWord: '',
      selectCategory: '',
      clientids: [],
      isActive: false,
      count: 20,
      sort: {
        key: '',
        isAsc: false
      },
    }
  },
  computed: {
    sortedItems () {
      let list = this.posts.slice()
      const filterWord = this.searchWord && this.searchWord.toLowerCase()
      const filterCategory = this.selectCategory
      if (this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key]
          b = b[this.sort.key]
          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
        })
      }
      if (filterWord || this.selectCategory) {
        list = list.filter(function (row) {
          if (filterCategory) {
            if (row['post_status'] !== filterCategory) {
              return false
            }
          }
          if (filterWord) {
            return Object.keys(row).some(function (key) {
              if (String(row[key]).toLowerCase().indexOf(filterWord) > -1) {
                return true
              }
            })
          }
          return row
        })
      }
      return list.slice(0, this.count)
    }
  },
  methods: {
    isMore() {
      this.count += 20
    },
    sortedClass (key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}` : ''
    },
    sortBy (key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false
      this.sort.key = key
    },
    countUser (e) {
      let count = this.posts.filter(function (row) {
        if (row['post_status'] !== e) {
          return false
        }
        return row
      })
      return count.length
    }
  }
}
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.16);
  border-collapse: collapse;
}
thead {
  th {
    border-bottom: 1px solid #efefef;
    button {
      width: 100%;
      height: 36px;
      background-color: transparent;
    }
  }
}
tbody {
  td {
    padding: 10px 16px;
    font-size: 16px;
    text-align: center;
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  a {
    color: #005792;
    &:hover {
      color: #53CDE2;
    }
  }
}
.st-checkbox input[type='checkbox']:checked + span::after {
  top: 1px;
}
.st-sort__permission {
  margin-bottom: 10px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    padding: 0 20px;
  }
  input[type="radio"]:checked + span {
    color: #53CDE2;
  }
  label {
    cursor: pointer;
  }
}
p {
  padding: 0 12px;
}
.st-delete {
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
}
.st-attention {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 0;
  width: 0;
  margin: auto;
}
.st-attention.active {
  border: 2px solid #FFE867;
  box-sizing: border-box;
  max-height: 300px;
  width: 320px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
  z-index: 2;
  + .st-block {
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
.st-motto {
  width: 160px;
  margin-top: 20px;
}
.st-search {
  height: 30px;
  padding: 0 4px;
}
main {
  display: block;
  padding-top: 60px;
} 
</style>