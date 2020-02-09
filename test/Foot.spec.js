import { mount } from '@vue/test-utils'
import Foot from '@/components/Foot.vue'

describe('Foot', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Foot)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
