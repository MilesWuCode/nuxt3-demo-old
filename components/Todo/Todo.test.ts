import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import List from './List.vue'

test('todo component', () => {
  const wrapper = mount(List, {
    props: {},
  })

  expect(wrapper.vm).toBeTruthy()

  // expect(wrapper.find('[data-testid=index]').text()).toContain('index')
})
