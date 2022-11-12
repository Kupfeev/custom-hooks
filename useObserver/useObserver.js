import { useEffect } from "react";


export const useObserver = ( elements ) => {
  // ! TO USE THIS HOOK, ARGUMENT "elements" MUST CONTAIN THE PROPERTY "current" AND IT HAS TO BE AN ARRAY, even if there is only one value. Follow the guideline below.
  // ? const foo = useRef([]);
  // ? <HTMLelement ref={ el => foo.current[0] = el } />

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

          entries.forEach( entry => {

            if (entry.isIntersecting){
              entry.target.classList.add("animated-class");
            } 

          });
        });

        elements.current.forEach((element) => {
          observer.observe(element);
        });

    }, []);

};