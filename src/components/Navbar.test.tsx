import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("is hidden initially when at top of page", () => {
    render(<Navbar />);
    // Navbar should not render the nav links when scrollY is 0
    expect(screen.queryByText("Services")).not.toBeInTheDocument();
  });

  it("shows navigation after scrolling past 500px", () => {
    render(<Navbar />);

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 600, writable: true });
    fireEvent.scroll(window);

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("renders contact button with correct email link after scroll", () => {
    render(<Navbar />);

    Object.defineProperty(window, "scrollY", { value: 600, writable: true });
    fireEvent.scroll(window);

    const contactLinks = screen.getAllByRole("link", { name: /contact us/i });
    expect(contactLinks[0]).toHaveAttribute("href", "mailto:manchester.branch@westwater.io");
  });

  it("renders logo with W initial after scroll", () => {
    render(<Navbar />);

    Object.defineProperty(window, "scrollY", { value: 600, writable: true });
    fireEvent.scroll(window);

    expect(screen.getByText("W")).toBeInTheDocument();
  });
});
