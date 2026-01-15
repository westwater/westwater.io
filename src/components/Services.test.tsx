import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("renders the section heading", () => {
    render(<Services />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Unmatched Expertise")).toBeInTheDocument();
  });

  it("renders all three service cards", () => {
    render(<Services />);
    expect(screen.getByText("Bespoke IT Strategies")).toBeInTheDocument();
    expect(screen.getByText("Unrivaled Business Growth")).toBeInTheDocument();
    expect(screen.getByText("24/7 Reliable Support")).toBeInTheDocument();
  });

  it("renders service descriptions", () => {
    render(<Services />);
    expect(
      screen.getByText(/We understand that one size doesn't fit all/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Transform your business with cutting-edge solutions/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Trust in our impeccable track record/i)
    ).toBeInTheDocument();
  });

  it("has the services section with correct id", () => {
    render(<Services />);
    const servicesSection = document.getElementById("services");
    expect(servicesSection).toBeInTheDocument();
  });
});
