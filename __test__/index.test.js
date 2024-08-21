import { render, screen } from "@testing-library/react";

import LoginLayout from "./container/login";



describe("Econtact", () => {
    it("renders an econtact", () => {
        render(<LoginLayout />);
        // check if all components are rendered
        expect(screen.getByTestId("econtact")).toBeInTheDocument();
        expect(screen.getByTestId("email")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
        expect(screen.getByTestId("signin")).toBeInTheDocument();
        expect(screen.getByTestId("signup")).toBeInTheDocument();
    });
});

// /* This is a test that is testing the App component.
//  * It is testing that the heading is correct. */
// describe("App", () => {
//     it("should have exact heading", () => {
//         /* Rendering the App component. */
//         render(<App />);

//         /* Getting the element with the test id of "app-header-heading". */
//         const mainHeading = screen.getByTestId("app-header-heading");

//         /* Checking that the innerHTML of the element with the test id of "app-header-heading" is equal to
//     "econtact". */
//         expect(mainHeading.innerHTML).toBe("econtact");
//     });
// });
