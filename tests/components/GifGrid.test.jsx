const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba <GifGrid/>', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el mensaje de cargando al mandar una categoria', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render( <GifGrid category={ category }/> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => { 
    
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://esto-es-una-url.com/saitama.jpg'
            },
            {
                id: 'CBA',
                title: 'Goku',
                url: 'https://esto-es-una-url.com/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);

    });
    
});