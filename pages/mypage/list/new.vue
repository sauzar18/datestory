<template>
  <div>
    <app-header/>
    <main>
      <div class="st-admin">
        <app-sidebar/>
        <section class="st-admin__control">
          <h2>記事を新規追加</h2>
          <form
            action="/api/posts"
            method="POST"
            class="st-admin__posts"
          >
            <input
              :value="$store.state.csrfToken"
              type="hidden"
              name="_csrf"
            >
            <input
              :value="$store.state.authUser.name"
              name="post_name"
              type="hidden"
            >
            <div class="st-admin__posts_left">
              <div class="st-textfield thin full">
                <input
                  id="title"
                  v-model="post_title"
                  type="text"
                  name="post_title"
                  required
                  aria-required="true"
                >
                <label for="title">タイトル</label>
              </div>
              <div class="st-half">
                <div class="st-textfield thin">
                  <input
                    id="location"
                    v-model="post_location"
                    type="text"
                    name="post_location"
                    placeholder="渋谷,表参道"
                    required
                    aria-required="true"
                  >
                  <label for="location">地域</label>
                </div>
                <dl class="st-radiofield light thin">
                  <dt>投稿属性</dt>
                  <dd>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="みてみて"
                        required
                        aria-required="true"
                      >
                      <span>みてみて</span>
                    </label>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="相談"
                        required
                        aria-required="true"
                      >
                      <span>相談</span>
                    </label>
                    <label class="st-radio">
                      <input
                        v-model="post_category"
                        type="radio"
                        name="post_category"
                        value="理想"
                        required
                        aria-required="true"
                      >
                      <span>理想</span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div class="st-filefield light">
                <label for="ceo_thumbnail">メイン画像</label>
                <div>
                  <input
                    :value="filepath1"
                    type="hidden"
                    name="thumbnail"
                  >
                  <figure>
                    <img
                      v-if="filepath"
                      :src="filepath"
                      alt="#"
                    >
                  </figure>
                  <input
                    id="ceo_thumbnail"
                    ref="file"
                    type="file"
                    @change="selectedFile"
                  >
                  <div class="st-file__button">
                    <button
                      class="st-button st-add"
                      type="button"
                      @click="addFiles()"
                    >
                      参照
                    </button>
                  </div>
                </div>
              </div>
              <input
                :value="content"
                name="column_content"
                type="hidden"
              >
              <no-ssr placeholder="Loading Your Editor...">
                <vue-editor
                  id="editor"
                  v-model="content"
                  useCustomImageHandler
                  @imageAdded="handleImageAdded"
                  :editorToolbar="customToolbar"
                />
              </no-ssr>
            </div>
            <div class="st-admin__posts_right">
              <section class="st-admin__release">
                <div class="st-release__title">
                  <h3>公開</h3>
                  <button
                    type="button"
                    class="st-button blue"
                    @click="isPreview = true"
                  >
                    プレビュー
                  </button>
                </div>
                <div class="st-release__box"> 
                  <dl>
                    <dt>ステータス</dt>
                    <dd>
                      <label class="st-radio">
                        <input
                          type="radio"
                          name="post_status"
                          value="公開"
                        >
                        <span>公開</span>
                      </label>
                      <label class="st-radio">
                        <input
                          type="radio"
                          name="post_status"
                          value="非公開"
                          checked
                        >
                        <span>非公開</span>
                      </label>
                    </dd>
                  </dl>
                  <button
                    class="st-button yellow"
                    type="submit"
                  >
                    追加
                  </button>
                </div>
              </section>
            </div>
          </form>
        </section>
        <section
          :class="{active : isPreview}"
          class="st-preview"
        >
          <div class="st-preview__title">
            <h2>プレビュー</h2>
            <button
              class="st-button black"
              type="button"
              @click="isPreview = false"
            >
              閉じる
            </button>
          </div>
          <section class="st-post__preview">
            <h3 class="title">
              {{ post_title }}
            </h3>
            <div
              v-if="post_title"
              class="st-post__author"
            >
              <dl v-if="post_name">
                <dt>投稿者:</dt>
                <dd>{{ post_name }}</dd>
              </dl>
              <dl
                v-if="post_date"
                class="time"
              >
                <dt>投稿日:</dt>
                <dd>{{ post_date }}</dd>
              </dl>
            </div>
            <ul
              v-if="post_location || post_category"
              class="category"
            >
              <li v-if="post_location">
                {{ post_location }}
              </li>
              <li v-if="post_category">
                {{ post_category }}
              </li>
            </ul>
            <figure v-if="filepath">
              <img
                :src="filepath"
                :alt="post_title"
              >
            </figure>
            <div
              v-html="content"
              class="st-article__content"
            />
          </section>
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
  head () {
    return {
      title: 'コラムの新規追加 | dates',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' }
      ],
      link: [
        { rel: 'canonical', href: 'https://medee.jp/admin/columns/post-new' }
      ]
    }
  },
  data () {
    return {
      post_title: '',
      post_name: this.$store.state.authUser.name,
      post_date: moment().format('YYYY年MM月DD日'),
      post_location: '',
      post_category: '',
      content: '',
      uploadFile: '',
      filepath: '',
      filepath1: '',
      filepath2: '',
      today: moment().format('YYYY-MM-DD'),
      isPreview: false,
      media: '',
      customToolbar: [
        [{ 'header': [false, 3, 4, 5, 6, ] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['image', 'code-block']
      ]
    }
  },
  methods: {
    isActive(e) {
      e.currentTarget.nextElementSibling.classList.add('active')
    },
    addFiles () {
      this.$refs.file.click()
    },
    selectedFile (e) {
      let uploadedFiles = this.$refs.file.files || this.$refs.file.dataTransfer.files
      this.uploadFile = uploadedFiles[0]
      const file = e.target.files[0]
      this.filepath1 = `/upload/${this.uploadFile.name}`
      this.filepath = window.URL.createObjectURL(file)
      let formData = new FormData()
      formData.set('fileupload', this.filepath1)
      formData.append('thumbnail', this.uploadFile)
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.$store.state.csrfToken,
          'X-CSRF-TOKEN': this.$store.state.csrfToken
        }
      }
      this.$axios.$post('/api/file_uploads', formData, config)
        .then(function() {
          console.log('success')
        })
        .catch(function(error) {
          console.log('error')
        })
    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      let formData = new FormData()
      this.filepath2 = '/upload/' + file.name
      formData.set('fileupload', this.filepath2)
      formData.append('thumbnail', file)
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.$store.state.csrfToken,
          'X-CSRF-TOKEN': this.$store.state.csrfToken
        }
      }
      this.$axios.$post('/api/file_uploads', formData, config)
        .then((result) => {
          Editor.insertEmbed(cursorLocation, 'image', this.filepath2)
          Editor.formatText(cursorLocation, cursorLocation + 1, 'alt', 'コラム画像')
          resetUploader()
        })
        .catch((err) => {
          if (!err) {
            Editor.insertEmbed(cursorLocation, 'image', this.filepath2)
            Editor.formatText(cursorLocation, cursorLocation + 1, 'alt', 'コラム画像')
            resetUploader()
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #4ecca3;
$deep: #232931;
main {
  display: block;
  padding-top: 60px;
} 
.title {
  margin-bottom: 20px;
}
.st-article__left {
  width: 620px;
  h3 {
    font-size: 24px;
  }
  h4 {
    border-left: #005792 6px solid;
    padding: 4px 10px;
    background-color: #fff;
  }
}
.st-facebook {
  background-color: #3b5998;
  color: #fff;
  margin: 10px 0;
  &:hover,
  &:focus {
    background-color: #496DB9;
  }
}
.st-twitter {
  background-color: #00aced;
  color: #fff;
  &:hover,
  &:focus {
    background-color: #04b4f4;
  }
}
.st-cat {
  background-color: #53cde2;
  padding: 4px 4px;
  color: #fff;
  line-height: 1;
  margin-right: 20px;
}
.st-thumbnail {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.st-post__preview {
  max-width: 720px;
  .title {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .category {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    li {
      padding: 2px 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      border: 1px solid $deep;
      border-radius: 4px;
      font-size: 14px;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.st-post__author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  dl {
    display: flex;
    margin-bottom: 8px;
  }
}
.st-location {
  border: 1px solid rgb(148, 148, 148);
  padding: 2px 4px;
  border-radius: 5px;
}
.st-text {
  margin: 8px 0 0;
}
@media screen and (max-width: 980px) {
  .st-report {
    width: 90%;
    flex-direction: column;
  }
  .st-article__left {
    width: 100%;
  }
  .st-thumbnail {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
@media screen and (max-width: 480px) {
  .st-article__left {
    h2 {
      font-size: 6.4vw;
    }
  }
  .st-report {
    margin: 5.3333vw auto 10.6666vw;
  }
  .st-cat {
    padding: 1.6666vw;
    margin-right: 5.3333vw;
  }
  .st-thumbnail {
    margin-top: 4.2666vw;
  }
  .st-share {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
  }
  .st-facebook,
  .st-twitter {
    margin: 0;
    height: 9.6vw;
    border-radius: 0;
  }
  .st-contain {
    margin-bottom: 9.6vw;
  }
}
</style>