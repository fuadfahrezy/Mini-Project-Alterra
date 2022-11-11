import React from "react";
import { render, screen } from "@testing-library/react";
import Header from '../components/Header/Header';

// test('render Header component', async () => {
//     render(<Header />);
//     const heading = screen.getByRole("heading")
//     expect(heading).toBeInTheDocument();
// });

const setup = () => {
    return render (<Header />);
}

describe('Header', () => {
    test('render Header component', () => {
        setup();

        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByText(/welcome to our website/i)).toBeInTheDocument();
    })
});
