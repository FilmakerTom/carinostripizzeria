import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BIRTHDAY_DISMISS_KEY, birthdayEventJsonLd, isBirthdayVisible } from "@/config/birthday-event";
import { BirthdayEventProvider, useBirthdayEvent } from "@/contexts/BirthdayEventContext";

afterEach(() => { cleanup(); sessionStorage.clear(); vi.useRealTimers(); vi.restoreAllMocks(); });

describe("birthday promotion rules", () => {
  it("remains visible through 27 November in Italy", () => {
    expect(isBirthdayVisible(new Date("2026-11-27T22:59:59.999Z"))).toBe(true);
  });
  it("expires at Italian midnight on 28 November", () => {
    expect(isBirthdayVisible(new Date("2026-11-27T23:00:00Z"))).toBe(false);
  });
  it("expires while the page remains open", () => {
    vi.useFakeTimers(); vi.setSystemTime(new Date("2026-11-27T22:59:59Z"));
    const { result } = renderHook(useBirthdayEvent, { wrapper: BirthdayEventProvider });
    expect(result.current.eventVisible).toBe(true);
    act(() => { vi.advanceTimersByTime(1000); });
    expect(result.current.eventVisible).toBe(false);
    expect(result.current.barVisible).toBe(false);
  });
  it("dismisses only the bar for the session", () => {
    vi.useFakeTimers(); vi.setSystemTime(new Date("2026-11-13T19:53:00Z"));
    const first = renderHook(useBirthdayEvent, { wrapper: BirthdayEventProvider });
    expect(first.result.current.barVisible).toBe(true);
    act(() => first.result.current.dismissBar());
    expect(first.result.current.barVisible).toBe(false);
    expect(first.result.current.eventVisible).toBe(true);
    expect(sessionStorage.getItem(BIRTHDAY_DISMISS_KEY)).toBe("1");
    first.unmount();
    const second = renderHook(useBirthdayEvent, { wrapper: BirthdayEventProvider });
    expect(second.result.current.barVisible).toBe(false);
    second.unmount(); sessionStorage.clear();
    const fresh = renderHook(useBirthdayEvent, { wrapper: BirthdayEventProvider });
    expect(fresh.result.current.barVisible).toBe(true);
  });
  it("still dismisses when session storage is unavailable", () => {
    vi.useFakeTimers(); vi.setSystemTime(new Date("2026-11-13T19:53:00Z"));
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    const { result } = renderHook(useBirthdayEvent, { wrapper: BirthdayEventProvider });
    act(() => result.current.dismissBar());
    expect(result.current.barVisible).toBe(false);
    expect(result.current.eventVisible).toBe(true);
  });
  it("publishes the requested schedule", () => {
    expect(birthdayEventJsonLd.startDate).toBe("2026-11-27T18:00:00+01:00");
    expect(birthdayEventJsonLd.endDate).toBe("2026-11-27T23:30:00+01:00");
  });
  it("prices dinner at EUR 20 excluding drinks", () => {
    expect(birthdayEventJsonLd.offers.price).toBe("20");
    expect(birthdayEventJsonLd.offers.priceCurrency).toBe("EUR");
    expect(birthdayEventJsonLd.offers.description).toBe("Cena, bevande escluse");
  });
});