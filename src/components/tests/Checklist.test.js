import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react';
import Checklist from '../CheckList';

describe("CheckList test #1", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  afterAll(() => {
    jest.useRealTimers();
  })

  it("Updates state with delay, test with act() + mock timers", async() => {
    act(() => {
      render(<Checklist />);
    })

    // screen.debug();

    const label = await screen.findByLabelText("false")
    expect(label).toBeInTheDocument();

    act(() => {
      fireEvent.click(label);
      jest.advanceTimersByTime(2000);
    })

    // screen.debug();
    expect(await screen.findByLabelText("true")).toBeInTheDocument();
  });
});

describe("CheckList #2", () => {

  it("Test with Async utilitities", async () => {
    render(<Checklist />);

    screen.debug();

    const label = screen.getByLabelText("false")
    expect(label).toBeInTheDocument();

    fireEvent.click(label);

    // screen.debug();
    expect(await screen.findByLabelText("true", {}, { timeout: 2100 })).toBeInTheDocument();
  });
});
