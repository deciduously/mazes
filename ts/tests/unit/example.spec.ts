import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Maze from '@/components/Maze.vue';

describe('Maze.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(Maze, {
      propsData: { title },
    });
    expect(wrapper.text()).to.include(title);
  });
});
