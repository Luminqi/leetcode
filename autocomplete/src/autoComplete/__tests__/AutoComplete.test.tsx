import React from 'react'
import AutoComplete from '../AutoComplete'
import renderer from 'react-test-renderer'

describe('<AutoComplete />', () => {
  it('renders without crashing', () => {
    const autocomplete = renderer.create(<AutoComplete />).toJSON()
    expect(autocomplete).toMatchSnapshot()
  })
})
