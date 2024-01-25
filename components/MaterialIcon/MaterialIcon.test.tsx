import { render } from '@testing-library/react'
import MaterialIcon from '.'

describe('Material Icon', () => {
  it('should render', () => {
    const { container } = render(<MaterialIcon iconName='add' />)
    expect(container).toMatchSnapshot()
  })

  it('should execute onClick function', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <MaterialIcon iconName='add' onClick={onClick} />
    )
    getByText('add').click()
    expect(onClick).toHaveBeenCalled()
  })
})
