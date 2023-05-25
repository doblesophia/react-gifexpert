import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => { 

    
    const title = "Saitama";
    const url = "https://instagram.com/";
    

    test('debe de hacer match con el snapshot', () => {
        

        const {container} = render (<GifGridItem title ={title} url={url}/>);
        expect(container).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render (<GifGridItem title ={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole("img").src);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe de mostrar el título en el componente', () => {
        render (<GifGridItem title ={title} url={url}/>);
        expect (screen.getByText(title)).toBeTruthy();
     });

     });