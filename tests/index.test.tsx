import { fireEvent, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import React from 'react'


describe('App', () => {

    it('initializes with a default result of 0', () => {
        const { getByText } = render(<App />)
        const resultDisplay = getByText('0')
        expect(resultDisplay).toBeTruthy()
    })

    it('title should display', () => {
        const { getAllByRole } = render(<App />)
        const title = getAllByRole('heading', {level: 1})

        expect(title).not.toBeNull();
    })

    it('result is 0 if operation is not choose', () => {
        const { getAllByRole, getByText } = render(<App />)
        const inputs = getAllByRole('spinbutton')

        fireEvent.change(inputs[0], { target: { value: '10' } })
        fireEvent.change(inputs[1], { target: { value: '3' } })

        expect(getByText('0')).toBeTruthy()
    })


    it('subtractions works', () => {
        const { getAllByRole, getByRole, getByText } = render(<App />)
        const inputs = getAllByRole('spinbutton')
        const select = getByRole('combobox')

        fireEvent.change(inputs[0], { target: { value: '10' } })
        fireEvent.change(inputs[1], { target: { value: '3' } })
        fireEvent.change(select, { target: { value: 'subtraction' } })

        expect(getByText('7')).toBeTruthy()
    })

    it('additions works', () => {
        const { getAllByRole, getByRole, getByText } = render(<App />)
        const inputs = getAllByRole('spinbutton')
        const select = getByRole('combobox')

        fireEvent.change(inputs[0], { target: { value: '10' } })
        fireEvent.change(inputs[1], { target: { value: '3' } })
        fireEvent.change(select, { target: { value: 'addition' } })

        expect(getByText('13')).toBeTruthy()
    })

    it('divisions works', () => {
        const { getAllByRole, getByRole, getByText } = render(<App />)
        const inputs = getAllByRole('spinbutton')
        const select = getByRole('combobox')

        fireEvent.change(inputs[0], { target: { value: '10' } })
        fireEvent.change(inputs[1], { target: { value: '2' } })
        fireEvent.change(select, { target: { value: 'division' } })

        expect(getByText('5')).toBeTruthy()
    })

    it('multiplications works', () => {
        const { getAllByRole, getByRole, getByText } = render(<App />)
        const inputs = getAllByRole('spinbutton')
        const select = getByRole('combobox')

        fireEvent.change(inputs[0], { target: { value: '10' } })
        fireEvent.change(inputs[1], { target: { value: '2' } })
        fireEvent.change(select, { target: { value: 'multiplication' } })

        expect(getByText('20')).toBeTruthy()
    })
})
