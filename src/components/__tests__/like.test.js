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
      <Checkbox labelActive="Active" labelInactive="Inactive" />,
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
        const checkbox = container.querySelector("input");
        const label = container.querySelector("label");
        act(() => {
          checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(label.textContent).toBe("Active");
        expect(checkbox.checked).toBe(true);
      });

    // Reto 2
    // Que cuando se hace clic en el botón Like, el número de likes se incremente en uno
	it("Number of likes increase by 1", () => {
	  const label = container.querySelector("label");
	  expect(label.textContent).toBe("Inactive");
    });
    
    // Reto 3
    // Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno
    it("Number of likes decrease by one", () => {
        const checkbox = container.querySelector("input");
        expect(checkbox.checked).toBe(false);
      });
    

});