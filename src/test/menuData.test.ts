import { describe, it, expect } from "vitest";
import {
  insalatone,
  taglieri,
  fritti,
  aperitivi,
  cucinaCarne,
  cucinaPesce,
  birreNovita,
} from "@/data/menuData";

const names = (items: { name: string }[]) => items.map((i) => i.name);

describe("menu prices and items (Carinostri)", () => {
  it("drops the focaccia slices from the antipasti block", () => {
    const antipasti = [...aperitivi, ...taglieri, ...fritti];
    expect(names(antipasti)).not.toContain("Salsa pomodoro, aglio e origano");
    expect(names(antipasti)).not.toContain("Porchetta Carinostri/altro affettato");
    expect(names(antipasti)).not.toContain("Varietà di Gusti");
  });

  it("drops the tartare from insalatone", () => {
    expect(names(insalatone)).not.toContain("Tartare di Manzo");
  });

  it("prices the costata at €24", () => {
    expect(cucinaCarne.find((i) => i.name === "Costata di Manzo 600g")?.price).toBe("€24");
  });

  it("keeps only frittura, branzino and baccalà in fish", () => {
    expect(names(cucinaPesce)).not.toContain("Insalata di Piovra");
    expect(names(cucinaPesce)).not.toContain("Insalata di Mare, Pomodorini e Misticanza");
    expect(cucinaPesce.find((i) => i.name === "Frittura Mista di Pesce")?.price).toBe("€16");
    const baccala = cucinaPesce.find((i) => i.name === "Baccalà alla vicentina");
    expect(baccala?.price).toBe("€15");
    expect(baccala?.description).toBe("servito con polenta");
  });

  it("serves Tongerlo on tap at a single €5 price and drops Italian Bock", () => {
    expect(names(birreNovita)).not.toContain("Italian Bock");
    const tongerlo = birreNovita.find((i) => i.name === "Tongerlo Brun");
    expect(tongerlo?.price).toBe("€5");
    expect(tongerlo?.price.includes("|")).toBe(false);
    expect(tongerlo?.description).toContain("Birra Bruna d'Abbazia");
  });
});
