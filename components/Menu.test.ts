import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Menu from './Menu.vue'

test('mount component', () => {
  const wrapper = mount(Menu, {
    props: {},
  })

  expect(wrapper.vm).toBeTruthy()

  // expect(wrapper.find('[data-testid=index]').text()).toContain('index')
})
