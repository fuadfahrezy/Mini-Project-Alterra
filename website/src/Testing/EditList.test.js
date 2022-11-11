import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditList from "../pages/EditList/EditList";

const setup = () => {
    return render (<EditList/>)
}

describe('Addlist', () => {
    test('render Editlist pages', () => {
        setup();

        expect(screen.getByRole('heading', {name: /EDIT PLACE/i})).toBeInTheDocument();
        expect(screen.getByText(/nama tempat/i)).toBeInTheDocument();
        expect(screen.getByText(/asal tempat/i)).toBeInTheDocument();
        expect(screen.getByText(/url/i)).toBeInTheDocument();
        expect(screen.getByText(/deskripsi/i)).toBeInTheDocument();
        
    });

    test('input text', () => {
        setup();

        const inputNamaTempat = screen.getByPlaceholderText(/Masukkan nama tempat.../i);
        fireEvent.input(inputNamaTempat, {target: {value: "Candi Borobudur"}});
        expect(inputNamaTempat.value).toBe("Candi Borobudur");

        const inputAsalTempat = screen.getByPlaceholderText(/Masukkan asal tempat.../i);
        fireEvent.input(inputAsalTempat, {target: {value: "Yogyakarta, Indonesia"}});
        expect(inputAsalTempat.value).toBe("Yogyakarta, Indonesia");

        const inputURL = screen.getByPlaceholderText(/Masukkan url gambar tempat.../i);
        fireEvent.input(inputURL, {target: {value: "gambar"}});
        expect(inputURL.value).toBe("gambar");
        
        const inputDeskripsi = screen.getByPlaceholderText(/Masukkan deskripsi.../i);
        fireEvent.input(inputDeskripsi, {target: {value: "Candi Borobudur adalah"}});
        expect(inputDeskripsi.value).toBe("Candi Borobudur adalah");
        // fireEvent.input(screen.getByRole("textbox", {name: /namaTempat/i}), {target: {value: "Candi Borobudur"}})
    });

});