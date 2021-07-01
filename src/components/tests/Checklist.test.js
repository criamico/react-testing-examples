import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react';
import Checklist from '../CheckList';

describe("CheckList Async test", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  afterAll(() => {
    jest.useRealTimers();
  })

  it("use act() and mock timers", async () => {
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

describe("CheckList Async test #2", () => {
  it("use findBy query and passing a timeout", async () => {
    render(<Checklist />);

    // screen.debug();

    const label = screen.getByLabelText("false")
    expect(label).toBeInTheDocument();

    fireEvent.click(label);

    // screen.debug();
    expect(await screen.findByLabelText("true", {}, { timeout: 2100 })).toBeInTheDocument();
  });
});
