<template>
  <div class="st-textfield">
    <input
      id="user_name"
      v-model="user_name"
      type="text"
      name="user_name"
      required
      aria-required="true"
    >
    <label for="user_name">ユーザー名(ログイン後変更可)</label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    idText: {
      type: String,
      required: true
    },
    nameText: {
      type: String,
      required: false
    },
    typeArea: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    requiredArea: {
      type: Boolean,
      required: true
    },
    readOnly: {
      type: Boolean,
      required: false
    },
    minLength: {
      type: Number,
      required: false
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (newVal) {
        if (this.value !== newVal) {
          this.valued = newVal
          this.$emit('input', newVal)
        }
      }
    }
  }
}
</script>
