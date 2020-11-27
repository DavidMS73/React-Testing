import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {

    // Reto 1
    // Que por defecto, el componente muestra en el párrafo el valor "Likes: 0"
    it("Show default likes value", () => {
      const label = container.querySelector("p");
      expect(label.textContent).toBe("Likes: 0");
      });

    // Reto 2
    // Que cuando se hace clic en el botón Like, el número de likes se incremente en uno
	it("Number of likes increase by 1", () => {
        const btn = container.querySelector("button");
        const label = container.querySelector("p");
        const actual = label.textContent;
        const split = actual.split(" ");
        
        act(() => {
          btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        const nuevo = parseInt(split[1]) + 1;
        expect(label.textContent).toBe(`Likes: ${nuevo}`);
    });
    
    // Reto 3
    // Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno
    it("Number of likes decrease by one", () => {
      const btn = container.querySelectorAll("button")[1];
        const label = container.querySelector("p");
        const actual = label.textContent;
        const split = actual.split(" ");
        
        act(() => {
          btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        const nuevo = parseInt(split[1]) - 1;
        expect(label.textContent).toBe(`Likes: ${nuevo}`);

      });
    

});