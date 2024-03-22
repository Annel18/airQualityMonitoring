import { render } from '@testing-library/react'
import { describe, it, expect } from "@jest/globals"
import navBar from "./navBar"

describe(navBar, () => {
    it('display the correct menu', () => {
        const { getAllByTestId } = render(<navBar initialDropDownOption={'realTime'} />)
        const dropDownValue = getAllByTestId('dropDownOption')
        expect(dropDownValue).toEqual('realTime')
    })
}) 