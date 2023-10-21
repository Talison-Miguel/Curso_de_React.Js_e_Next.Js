import userEvent from '@testing-library/user-event'
import { Button } from '.'

const { render, screen } = require("@testing-library/react")


describe('<Button />', () => {
    it('should render the button with the text "Load more"', () => {
        render(<Button text="Load more"/>)
        
        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeInTheDocument()
    })

    it('should call function on button click', () => {
        const fn = jest.fn()
        render(<Button text="Load more" Click={fn} />)
    
        const button = screen.getByRole('button', { name: /load more/i })
        
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    })

    it('should be disabled when dissabled is true', () => {
        render(<Button text="Load more" disabled={true}/>)
        
        const button = screen.getByRole('button', { name: /load more/i })
        
        expect(button).toBeDisabled()
    })

    it('should be enabled when dissabled is false', () => {
        render(<Button text="Load more" disabled={false}/>)
        
        const button = screen.getByRole('button', { name: /load more/i })
        
        expect(button).toBeEnabled()
    })

})