import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form';

describe("Form", () => {
  describe("Examples of queries", () => {
    beforeEach(() => {
      render(<Form />);
    });

    it('Find a component by data-test-id', () => {
      // screen.debug();
      expect(screen.getByTestId('form.input.name')).toBeInTheDocument();
      expect(screen.getByTestId('form.input.surname')).toBeVisible();
    });

    it('Use `queryBy..` to check that an element is not visible', () => {
      expect(screen.queryByTestId("form.result")).not.toBeInTheDocument();
      // expect(screen.getByTestId("form.result")).not.toBeInTheDocument(); //this would throw an exception
    });

    it('Find some text in the page - exact match', () => {
      expect(screen.getByText('1. Sign up form')).toBeVisible();
      expect(screen.getByText('1. Sign up form')).toBeInTheDocument();
    });

    it('Find some text in the page - with regex', () => {
      expect(screen.getByText(/Sign up form/)).toBeInTheDocument();
    });

    it('Find repeated text by a regex', () => {
      expect(screen.getAllByText(/\w{0,4}ame/)).toHaveLength(2);
    });

    it('Find accessible elements by role', () => {
      const h2 = screen.getByRole('heading');
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveTextContent(/Sign up form/);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Find multiple accessible elements by role', () => {
      expect(screen.getAllByRole('textbox')).toHaveLength(2);
    });

    it('Find an input by placeholder text', () => {
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    });
  });
});

describe("Form #2", () => {

  it("Test click event", () => {
    render(<Form />);

    // screen.debug();

    const submit = screen.getByRole('button')

    fireEvent.click(submit);

    expect(screen.getByTestId(("form.result"))).toBeInTheDocument();
    // screen.debug();
  });
});
