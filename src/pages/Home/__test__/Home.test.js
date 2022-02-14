import { render, screen, cleanup, fireEvent, getAllByTestId} from '@testing-library/react';

import Home from '../Home'

describe('Home page works well', () => {
  it('renders without failing', () => {
    const home_page = render(
      <Home/>
    )
  })

  it('home page has title', () => {
    const home_page = render(
      <Home/>
    )

    const home_page_title = home_page.getByTestId('home-page-title')
    expect(home_page_title.innerHTML).toBe('Cammie') 
  })
})