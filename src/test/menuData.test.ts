import { describe, it, expect } from "vitest";
import {
  insalatone,
  taglieri,
  fritti,
  aperitivi,
  cucinaCarne,
  cucinaPesce,
  birreNovita,
  birreSpeciali,
  pizzeStagione,
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

  it("prices the tagliata at €22 and drops the costata", () => {
    expect(names(cucinaCarne)).not.toContain("Costata di Manzo 600g");
    const tagliata = cucinaCarne.find((i) => i.name === "Tagliata di Manzo agli Aromi");
    expect(tagliata?.price).toBe("€22");
    expect(tagliata?.description).toBe("");
    expect(cucinaCarne.find((i) => i.name === "Hamburger di Manzo")?.description).toBe("gr. 200, con patate fritte");
  });

  it("serves seppie, frittura and branzino in fish", () => {
    expect(names(cucinaPesce)).toEqual(["Seppie in Umido", "Frittura Mista di Pesce", "Filetto di Branzino al Forno"]);
    expect(cucinaPesce.find((i) => i.name === "Frittura Mista di Pesce")?.price).toBe("€16");
    expect(cucinaPesce.find((i) => i.name === "Frittura Mista di Pesce")?.description).toContain("servita con polenta");
    const seppie = cucinaPesce.find((i) => i.name === "Seppie in Umido");
    expect(seppie?.price).toBe("€15");
    expect(seppie?.description).toBe("servite con polenta");
    expect(names(cucinaPesce)).not.toContain("Baccalà alla vicentina");
  });

  it("lists the three radicchio seasonal pizzas with their photos", () => {
    expect(names(pizzeStagione)).toEqual([
      "Radicchio Zola e Noci",
      "Radicchio Sopressa e Morlacco",
      "Radicchio Alici e Pomodorini",
    ]);
    expect(pizzeStagione.map((i) => i.price)).toEqual(["€13", "€13", "€14"]);
    pizzeStagione.forEach((i) => expect(i.image).toBeTruthy());
  });

  it("keeps Tongerlo only in Birre Speciali and drops Italian Bock from the tap list", () => {
    expect(names(birreNovita)).not.toContain("Italian Bock");
    expect(names(birreNovita)).not.toContain("Tongerlo Brun");
    const tongerlo = birreSpeciali.find((i) => i.name === "Tongerlo Brun");
    expect(tongerlo?.price).toBe("€5");
    expect(tongerlo?.description).toContain("Birra Bruna d'Abbazia");
  });
});
