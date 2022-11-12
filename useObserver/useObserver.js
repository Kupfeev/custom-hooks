import { useEffect } from "react";


export const useObserver = ( elements ) => {
  // ! TO USE THIS HOOK, ARGUMENT "elements" MUST CONTAIN THE PROPERTY "current" AND IT HAS TO BE AN ARRAY, even if there is only one value. Follow the guideline below.
  // ? const foo = useRef([]);
  // ? <HTMLelement ref={ el => foo.current[0] = el } />

    useEffect(() => {
        const cardsObserver = new IntersectionObserver((entries) => {

          entries.forEach( entry => {

            if (entry.isIntersecting && entry.target.classList.contains("direct-card")){
              entry.target.classList.add("direct-card-animated");
            } 

            else if (entry.isIntersecting && entry.target.classList.contains("inverted-card")) {
              entry.target.classList.add("inverted-card-animated");
            } 
            
            else if (entry.isIntersecting && entry.target.classList.contains("quote")) {
                entry.target.classList.add("quote-animated");
            }

            else if (entry.isIntersecting && entry.target.classList.contains("project-card")) {
                entry.target.classList.add("project-card-animated");
            }

          });
        });

        elements.current.forEach((element) => {
          cardsObserver.observe(element);
        });

    }, []);

};