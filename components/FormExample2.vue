<script setup lang="ts">
import { defineRule, Field, Form, ErrorMessage, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { required, email, min, max } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

configure({
  generateMessage: localize({
    ja,
    zhTW,
  }),
  // 驗證時機,限<Field />使用
  // validateOnInput: true,
  // validateOnChange: true,
  // validateOnBlur: true,
  // validateOnModelUpdate: true,
})

setLocale('zhTW')

const lang = ref('zhTW')

const onSubmit = (values: any) => {
  console.log(values)
}

const switchLanguage = () => {
  setLocale(lang.value)
}
</script>

<template>
  <div class="flex flex-col space-y-2">
    <h4>vee-validate</h4>
    <Form @submit="onSubmit">
      <!-- email -->
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Email</span>
          <span class="label-text-alt"></span>
        </label>
        <Field
          name="email"
          type="email"
          placeholder="Your Email"
          class="input-bordered input w-full max-w-xs"
          rules="required|email"
        />
        <label class="label">
          <span class="label-text-alt"></span>
          <span class="label-text-alt text-red-500">
            <ErrorMessage name="email" />
          </span>
        </label>
      </div>

      <!-- password -->
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Password</span>
          <span class="label-text-alt"></span>
        </label>
        <Field
          name="password"
          type="password"
          placeholder="Your password"
          class="input-bordered input w-full max-w-xs"
          rules="required|min:8|max:32"
        />
        <label class="label">
          <span class="label-text-alt"></span>
          <span class="label-text-alt text-red-500"
            ><ErrorMessage name="password"
          /></span>
        </label>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">switch language</span>
            <input
              v-model="lang"
              type="checkbox"
              class="toggle"
              true-value="zhTW"
              false-value="ja"
              @change="switchLanguage"
            />
          </label>
        </div>
      </div>

      <!-- submit -->
      <div class="flex w-full max-w-xs justify-end">
        <button type="submit" class="btn-primary btn">Submit</button>
      </div>
    </Form>
  </div>
</template>
