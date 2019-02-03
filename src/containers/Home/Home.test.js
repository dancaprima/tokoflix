import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './Home';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    fetchMovies: jest.fn(),
    movies: {
      data: [
        {
          original_title: 'Keluarga Ceramah',
          vote_average: 8
        }
      ],
      isLoading: false
    }
  };

  const wrapper = shallow(<Home {...props} />);

  return {
    props,
    wrapper
  };
};

describe('Home Component', () => {
  it('renders correct total list movies', () => {
    const { wrapper } = setup();
    expect(wrapper.children().length).toBe(1);
  });
});
