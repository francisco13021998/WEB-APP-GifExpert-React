import { render, screen } from "@testing-library/react";
import { GifItems } from "../../src/components/GifItems";


describe('Pruebas en <GifItems/>', () => { 
 
    const image = {
        title:"Dragon Ball",
        url:"https://dragon-ball.com/goku.jpg",
        id:1234
    }

    test('Debe de hacer match con el Snapshot', () => { 
        const { container } = render( <GifItems { ...image }/> );
        expect( container ).toMatchSnapshot();
     }) 

     test('Debe de contener el title y url correctos', () => {
        render( <GifItems { ...image }/> );
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(image.url);
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( image.url );
        expect( alt ).toBe( image.title );
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItems { ...image }/> );
        expect( screen.getByText( image.title ) ).toBeTruthy();
     })
})