import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Hero from "@/components/Hero";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Hero video loading breakpoint", () => {
  it.each([[767, false], [768, true]])("at %i pixels video loading is %s", (width, expected) => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      matches: query === "(min-width: 768px)" && width >= 768,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    const { container } = render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(container.querySelector("iframe") !== null).toBe(expected);
  });
});