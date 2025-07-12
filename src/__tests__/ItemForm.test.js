import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("calls onItemFormSubmit with form data on submit", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  const nameInput = screen.getByLabelText(/Name:/i);
  const categorySelect = screen.getByLabelText(/Category:/i);
  const submitButton = screen.getByRole("button", { name: /Add to List/i });

  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });
  fireEvent.click(submitButton);

  expect(onItemFormSubmit).toHaveBeenCalledTimes(1);
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      name: "Ice Cream",
      category: "Dessert",
    })
  );

  expect(nameInput.value).toBe("");
  expect(categorySelect.value).toBe("Produce");
});
