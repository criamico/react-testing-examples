import React from "react";
import { render, screen, act } from '@testing-library/react';
import FetchData from '../FetchData';

describe("FetchData", () => {
  beforeEach(() => {
    render(<FetchData />);
  });

  describe("Mock API request", () => {

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: { id: "EUR", name: "Euro" } }),
        })
      );
      fetch.mockClear();
    });

    afterEach(() => {
      global.fetch.mockRestore();
    });

    it("Checks that the fetch function was called", async () => {
      // screen.debug();
      expect(screen.getByText("Loading..")).toBeInTheDocument();

      expect(await screen.findByText(/world currencies/, {}, { timeout: 3000 })).toBeInTheDocument();
      // screen.debug();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
