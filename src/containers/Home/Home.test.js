import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './Home';
import Card from '../../components/Card/Card';

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
    },
    location: jest.fn(),
    account: {
      ownedMovie: [1]
    }
  };

  const wrapper = shallow(
    <Home {...props} owned={true} />
  );

  return {
    props,
    wrapper
  };
};

describe('Home Component', () => {
  it('renders correct total list movies', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Card).length).toBe(1);
  });
});
