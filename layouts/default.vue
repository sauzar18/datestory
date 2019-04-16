<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
$blue: #4ecca3;
$deep: #232931;
$yellow: #FFE867;
$thin: #eeeeee;
$light: #d1f4fa;
$gray: #ddd;
$indigo: #393e46;
html {
  font-family: 'Yu Gothic', '游ゴシック', YuGothic, '游ゴシック体',
    'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  border: none;
  cursor: pointer;
}
.text-green {
  color: $blue;
}
.thin {
  background-color: $thin;
}
.deep {
  background-color: $deep;
  color: #fff;
}
.gray {
  background-color: $gray;
}
a.deep,
button.deep {
  &:hover,
  &:focus {
    background-color: #394049;
  }
}
a.gray,
button.gray {
  &:hover,
  &:focus {
    background-color: #d4d8d8;
  }
}
@keyframes onAutoFillStart { from {} to {}}

input:-webkit-autofill {
  animation-name: onAutoFillStart;
  transition: background-color 50000s ease-in-out 0s;
}
.st-half {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  .st-textfield,
  .st-radiofield {
    width: 48%;
  }
}
.st-textfield.full {
  margin-bottom: 26px;
}
.st-textfield {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid $deep;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  position: relative;
  label {
    font-size: 14px;
    font-weight: bold;
    cursor: text;
    line-height: 1.7;
    order: -1;
    padding: 5px 12px 0;
    position: relative;
    color: $deep;
    height: 28px;
    &::after {
      content: '';
      max-width: 0;
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      bottom: -28px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transition: 0.2s all;
      background-color: $deep;
    }
  }
  input:focus {
    + label {
      &::after {
        max-width: 100%;
      }
    }
  }
  select,
  input {
    font-size: 14px;
    appearance: none;
    background-color: transparent;
    border: none;
    color: $deep;
    padding: 0 12px;
    position: relative;
    &:focus {
      outline: none;
    }
  }
  textarea {
    font-size: 14px;
    appearance: none;
    background-color: transparent;
    border: none;
    color: $deep;
    padding: 0 12px;
    position: relative;
    height: 121px;
    line-height: 1.3;
    &:focus {
      outline: none;
      + label {
        &::after {
          max-width: 100%;
        }
      }
    }
  }
  &.area {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    label {
      &::after {
        bottom: -122px;
      }
    }
  }
  &.active {
    &::after {
      max-width: 100%;
    }
  }
  &.light {
    &:hover {
      background-color: rgb(188, 237, 244);
    }
    input {
      &:hover {
        background-color: rgb(188, 237, 244);
      }
    }
  }
}
.st-textfield.disabled,
.st-textfield.readonly {
  background-color: #EFEFEF;
  &:hover,
  input:hover {
    background-color: #efefef;
  }
}
.st-textfield.readonly {
  border-bottom: 1px solid #30D841;
  label {
    &::after {
      background-color: #30D841;
    }
  }
}
.st-selectfield {
  width: 360px;
  position: relative;
  button {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid $deep;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 0 0;
    position: relative;
    &::after {
      content: '';
      max-width: 0;
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transition: 0.2s all;
      background-color: $deep;
    }
    &:focus {
      &::after {
        max-width: 100%;
      }
    }
    &:hover {
      background-color: rgb(188, 237, 244);
    }
    span {
      max-width: 300px;
      display: block;
      padding: 0 12px;
      text-align: left;
      white-space: nowrap;
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  p {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    padding: 5px 12px 0;
    position: relative;
    line-height: 1.7;
    color: $deep;
    text-align: left;
    display: flex;
    align-items: center;
    span {
      padding: 0;
    }
    &::after {
      content: '';
      max-width: 0;
      height: 2px;
      background-color: $deep;
      position: absolute;
      bottom: -32px;
      display: block;
      left: 0;
    }
  }
  ul {
    width: 100%;
    display: none;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 48px;
      padding: 0 16px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
  ul.active {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    max-height: 400px;
    z-index: 2;
    + .st-close {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
}
input[type="file"] {
  display: none;
}
.st-filefield {
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid $deep;
  padding-bottom: 8px;
  > label {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.7;
    padding: 5px 12px 0;
    position: relative;
    color: $deep;
    height: 28px;
  }
  > div {
    display: flex;
    padding: 0 12px;
    align-items: center;
  }
  figure {
    width: 160px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    background-color: $thin;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  video {
    width: 160px;
    height: 100px;
    margin-right: 20px;
    flex-shrink: 0;
  }
  .st-close {
    background-color: rgba(0,0,0,0.5);
  }
}
.st-file__button {
  display: flex;
  flex-direction: column;
  button {
    width: 100px;
    height: 36px;
  }
}
.st-file__alt {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 20px;
  > div {
    width: 100%;
    &:first-child {
      margin-bottom: 10px;
    }
  }
}
.st-add {
  background-color: $gray;
  margin-bottom: 10px;
}
.st-filebox {
  width: 360px;
  position: relative;
  button {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid $deep;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 0 0;
    position: relative;
    &::after {
      content: '';
      max-width: 0;
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transition: 0.2s all;
      background-color: $deep;
    }
    &:focus {
      &::after {
        max-width: 100%;
      }
    }
    &:hover {
      background-color: rgb(188, 237, 244);
    }
    span {
      max-width: 300px;
      display: block;
      padding: 0 12px;
      text-align: left;
      white-space: nowrap;
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  p {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    padding: 5px 12px 0;
    position: relative;
    line-height: 1.7;
    color: $deep;
    text-align: left;
    &::after {
      content: '';
      max-width: 0;
      height: 2px;
      background-color: $deep;
      position: absolute;
      bottom: -32px;
      display: block;
      left: 0;
    }
  }
  ul {
    width: 100%;
    display: none;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    li {
      width: 100px;
      height: 100px;
      padding: 8px;
      box-sizing: content-box;
    }
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  ul.active {
    display: flex;
    position: fixed;
    margin: auto;
    padding: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    overflow: auto;
    max-height: 400px;
    z-index: 4;
    flex-wrap: wrap;
    background-color: $gray;
    + .st-close {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 3;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  input:checked {
    + img,
    + video {
      opacity: 0.6;
    }
  }
}
.st-radiofield {
  width: 360px;
  position: relative;
  height: 56px;
  border-bottom: 1px solid $deep;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  position: relative;
  dt {
    font-size: 14px;
    font-weight: bold;
    cursor: text;
    padding: 5px 12px 0;
    position: relative;
    color: $deep;
    &::after {
      content: '';
      max-width: 0;
      height: 2px;
      background-color: $deep;
      position: absolute;
      bottom: -32px;
      display: block;
      left: 0;
    }
  }
  dd {
    display: flex;
    padding: 0 12px;
  }
  label {
    display: inline-flex;
    margin-right: 20px;
    cursor: pointer;
  }
}
.st-radio {
  dd {
    justify-content: flex-start;
  }
  label {
    margin-right: 16px;
    cursor: pointer;
    display: flex;
  }
  span {
    position: relative;
    display: flex;
    line-height: 1.5;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }
  span::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid $indigo;
    margin-right: 8px;
    flex-shrink: 0;
  }
  input[type='radio']:focus {
    + span {
      &::before {
        box-shadow: $indigo 0 0 5px;
      }
    }
  }
  input[type='radio']:checked {
    + span::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $indigo;
      top: 8px;
      left: 4px;
      position: absolute;
    }
  }
}
.st-checkbox {
  cursor: pointer;
  span {
    display: inline-flex;
    align-items: center;
    line-height: 1.5;
    position: relative;
    transition: 0.2s all;
    color: $indigo;
    &::before {
      content: '';
      width: 16px;
      height: 16px;
      border: 2px solid $indigo;
      display: inline-flex;
      box-sizing: border-box;
      border-radius: 2px;
      margin-right: 4px;
      transition: 0.2s all;
    }
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      transition: 0.2s all;
    }
  }
  input[type='checkbox']:focus {
    + span {
      &::before {
        box-shadow: $indigo 0 0 5px;
      }
    }
  }
  input[type='checkbox']:checked {
    + span {
      &::before {
        background-color: $indigo;
      }
      &::after {
        top: 5px;
        left: 1px;
        width: 6px;
        height: 11px;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        -webkit-transform: rotateZ(37deg);
        transform: rotateZ(37deg);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
    }
  }
}
input[type='radio'],
input[type='checkbox'] {
  appearance: none;
  background-color: transparent;
  border-bottom: 0;
  width: auto;
  height: auto;
  filter: alpha(opacity=0);
  -moz-opacity:0;
  opacity:0;
  position: absolute;
}
.st-article {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  > div {
    display: flex;
  }
  h3,
  h4 {
    font-size: 18px;
    max-height: 60px;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  video {
    background-color: #B8B8B8;
    border-radius: 2px 2px 0 0;
    width: 100%;
    height: 100%;
    order: -1;
    overflow: hidden;
    position: relative;
    object-fit: cover;
    height: 290px;
  }
  figure {
    background-color: #B8B8B8;
    border-radius: 2px 2px 0 0;
    width: 100%;
    height: 290px;
    order: -1;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background-color: rgba(0,0,0,0);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: 0.3s all;
    }
  }
  header {
    display: flex;
    flex-direction: column;
  }
  footer {
    position: relative;
    width: 100%;
    padding: 0 20px 10px;
    border-top: 1px solid #efefef;
  }
  a {
    color: #000;
    &:hover,
    &:focus {
      h4,
      h3 {
        color: $blue;
      }
      figure {
        &::before {
          transition: 0.3s all;
          background-color: rgba(0,0,0,0.5);
        }
        img {
          transform: scale(1.05);
        }
      }
    }
  }
}
.st-bread {
  width: 980px;
  margin: 20px auto;
  ol {
    display: flex;
    align-items: center;
  }
  li {
    padding: 0 20px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    a {
      font-size: 14px;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    &:nth-child(2n) {
      background-color: #c4fdea;
      color: #232931;
      a {
        color: #232931;
      }
    }
    &:nth-child(2n-1) {
      background-color: #4ecca3;
      color: #fff;
      a {
        color: #fff;
        font-size: 14px;
      }
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
}
.st-article__content {
  margin: 20px 0;
  h3 {
    font-size: 18px;
    background-color: #efefef;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-bottom: #4ecca3 2px solid;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 16px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 2px dashed #4ecca3;
  }
  h5 {
    font-size: 16px;
    padding: 8px 0;
    display: flex;
    margin-bottom: 30px;
    font-weight: normal;
    &::before {
      content: "";
      width: 6px;
      background-color: #4ecca3;
      margin-right: 8px;
    }
  }
  p {
    padding: 0 16px;
    margin-bottom: 30px;
  }
  em {
    font-style: normal;
    color: #3db38b;
    font-weight: bold;
  }
  strong {
    color: #3db38b;
    text-decoration: #3db38b underline;
  }
  dl {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }
  dt {
    background-color: #efefef;
    color: #000;
    padding: 2px 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  dd {
    padding: 2px 10px;
    width: 100%;
  }
  ul {
    margin-bottom: 16px;
    li {
      display: flex;
      align-items: center;
      &::before {
        content: "";
        display: inline-flex;
        width: 16px;
        height: 16px;
        background-image: url(~static/images/ic_list.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        margin-right: 10px;
      }
    }
  }
  ol{
    margin-bottom: 16px;
    counter-reset: number 0; 
    li {
      display: flex;
      align-items: center;
      &::before {
        counter-increment: number 1;
        content: counter(number) " ";
        margin-right: 10px;
        font-size: 12px;
        width: 16px;
        height: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #3db38b;
        color: #fff;
      }
    }
  }
}
.st-admin__control {
  width: calc(100% - 240px);
  padding: 20px;
  margin-left: auto;
  h2 {
    border-bottom: #3db38b 2px solid;
    font-size: 18px;
    margin-bottom: 20px;
  }
}
.st-newbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  background-color: #4ECCA3;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 20px;
  &:hover {
    background-color: #60d8b0;
  }
}
.st-admin__posts {
  display: flex;
  justify-content: space-between;
}
.st-admin__posts_left {
  width: 68%;
  > dl {
    > dt {
      border-bottom: 1px dashed #005792;
      margin-bottom: 10px;
    }
  }
}
.st-admin__posts_right {
  width: 30%;
  h3 {
    font-size: 16px;
  }
}
.st-admin__release {
  width: 100%;
  border-radius: 2px;
  background-color: #fafafa;
  margin-bottom: 20px;
  z-index: 2;
  position: sticky;
  top: 60px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.16);
}
.st-release__title {
  border-bottom: 1px solid #005792;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 90px;
    height: 30px;
  }
}
.st-release__box {
  padding: 10px;
  button {
    width: 80px;
    height: 36px;
    margin-top: 10px;
  }
  dd {
    display: flex;
  }
  label {
    margin-right: 20px;
  }
}
.st-preview {
  position: fixed;
  top: 60px;
  right: 0;
  background-color: #F2F7FF;
  z-index: 2;
  transition: 0.2s all;
  width: calc(100% - 240px);
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 0 20px 20px;
  transform: translateX(100%);
}
.st-preview.active {
  transform: translateX(0);
}
.st-preview__title {
  border-bottom: #005792 2px solid;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 20px;
  background-color: #F2F7FF;
  h2 {
    font-size: 18px;
  }
  button {
    width: 90px;
    height: 30px;
    background-color: #3e3939;
    color: #fff;
    &:hover,
    &:focus {
      background-color: #7A7878;
    }
  }
}
</style>
