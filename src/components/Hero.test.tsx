import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "./Hero";

// Mock the hero background image
vi.mock("@/assets/hero-bg.jpg", () => ({ default: "hero-bg.jpg" }));

describe("Hero", () => {
  it("renders the initial tagline", () => {
    render(<Hero />);
    expect(screen.getByText("Westwater")).toBeInTheDocument();
    expect(screen.getByText("Consulting")).toBeInTheDocument();
  });

  it("renders the subheadline text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Our team of dedicated IT professionals/i)
    ).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /learn more/i })).toBeInTheDocument();
  });

  it("has the hero section with correct id", () => {
    render(<Hero />);
    const heroSection = document.getElementById("hero");
    expect(heroSection).toBeInTheDocument();
  });
});
