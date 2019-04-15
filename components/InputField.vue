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
