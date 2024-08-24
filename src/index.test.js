import ContactsTable from "./container/contacts-table";
import { render, screen } from "@testing-library/react";

test("renders table headers in correct order", () => {
    render(<ContactsTable />);

    const headerCells = screen.getAllByRole("columnheader");

    expect(headerCells[0].textContent).toBe("S/N");
    expect(headerCells[1].textContent).toBe("NAME");
    expect(headerCells[2].textContent).toBe("PHONE NUMBER");
});
