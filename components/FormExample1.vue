<script setup lang="ts">
import { Field, Form, ErrorMessage, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

configure({
  // 驗證時機,限<Field />使用
  // validateOnInput: true,
  // validateOnChange: true,
  // validateOnBlur: true,
  // validateOnModelUpdate: true,
})

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().nonempty().email(),
    password: zod.string().nonempty().min(8).max(32),
  })
)

// ts無法檢查到
const onSubmit = (values: any) => {
  console.log(values)
}

// 一般的<form>標籤
// 使用useField,useForm
// const { handleSubmit, errors } = useForm({
//   validationSchema,
// })
// const { value: email } = useField('email')
// const { value: password } = useField('password')
// ts可以檢查到
// const onSubmit = handleSubmit((values) => {
//   alert(JSON.stringify(values, null, 2))
// })
</script>

<template>
  <div class="flex flex-col space-y-2">
    <h4>vee-validate + zod</h4>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
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
        />
        <label class="label">
          <span class="label-text-alt"></span>
          <span class="label-text-alt text-red-500"
            ><ErrorMessage name="password"
          /></span>
        </label>
      </div>

      <!-- submit -->
      <div class="flex w-full max-w-xs justify-end">
        <button type="submit" class="btn-primary btn">Submit</button>
      </div>
    </Form>
  </div>
</template>
