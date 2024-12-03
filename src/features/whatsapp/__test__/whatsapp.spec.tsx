import { describe, test, expect } from "vitest";
import { WhatsappPage } from "../page";
import { render } from "@/lib/test-renderer";

describe("WhatsApp", () => {
  test("should be rendered", () => {
    const page = render(<WhatsappPage />);

    expect(page).toMatchSnapshot();
  });
});
