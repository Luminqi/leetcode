import React from 'react'
import AutoComplete from '../AutoComplete'
import renderer from 'react-test-renderer'
import { render, cleanup, fireEvent } from 'react-testing-library'

describe('<AutoComplete />', () => {
  afterEach(cleanup)
  it('renders without crashing', () => {
    const autocomplete = renderer.create(<AutoComplete />).toJSON()
    expect(autocomplete).toMatchSnapshot()
  })
  it('changes text after type in input', () => {
    const { container } = render(<AutoComplete />)
    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'a' } })
    expect(input.value).toBe('a')
  })
  it('display emoji when type smile', () => {
    const { container } = render(<AutoComplete />)
    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'smile' } })
    expect(input.value).toBe('😜')
  })
  it('clear text after click clear-button', () => {
    const { container } = render(<AutoComplete />)
    const input = container.querySelector('input') as HTMLInputElement
    const button = container.querySelector('.autocomplete-clearbtn') as HTMLButtonElement
    fireEvent.change(input, { target: { value: 'a' } })
    expect(input.value).toBe('a')
    fireEvent.click(button)
    expect(input.value).toBe('')
  })
  it('display loading after 500ms if stop typing', () => {
    jest.useFakeTimers()
    const { container } = render(<AutoComplete />)
    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'a' } })
    const loading = container.querySelector('.autocomplete-loading')
    expect(loading).toBeNull()
    setTimeout(() => {
      expect(loading).not.toBeNull()
    }, 500)
  })
  it('display toggle-button and menu when data coming', async () => {
    jest.useFakeTimers()
    const { container, queryByText } = render(<AutoComplete />)
    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'a' } })
    const button = container.querySelector('.autocomplete-togglebtn')
    const menu = container.querySelector('.autocomplete-menu')
    setTimeout(() => {
      expect(button).not.toBeNull()
      expect(menu).not.toBeNull()
      const secondItem = queryByText('aa')
      expect(secondItem).not.toBeNull()
      fireEvent.click(secondItem!)
      expect(input.value).toBe('aa')
      fireEvent.click(button!)
      expect(menu).toBeNull()
    }, 2500)
  })
})
