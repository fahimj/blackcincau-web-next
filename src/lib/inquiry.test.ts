import assert from "node:assert/strict";
import { test } from "node:test";
import {
  inquiryMessage,
  inquirySubject,
  mailtoUrl,
  whatsappUrl,
  type Inquiry,
} from "./inquiry.ts";

const quote: Inquiry = {
  type: "quote",
  product: "Dried Black Cincau Leaves",
  quantity: "18 MT",
  destination: "Guangzhou, China",
  company: "Example Foods Co.",
  name: "Li Wei",
  contact: "li@example.com",
  message: "",
};

test("quote message lists the filled fields and skips empty ones", () => {
  const text = inquiryMessage(quote);
  assert.match(text, /^Hello Black Cincau, I would like to request a quote\./);
  assert.match(text, /Product: Dried Black Cincau Leaves/);
  assert.match(text, /Destination: Guangzhou, China/);
  assert.doesNotMatch(text, /Message:/);
});

test("sample request changes the opening line and subject", () => {
  const sample: Inquiry = { ...quote, type: "sample", message: "500 g please" };
  assert.match(inquiryMessage(sample), /request a sample\./);
  assert.match(inquiryMessage(sample), /Message: 500 g please/);
  assert.equal(
    inquirySubject(sample),
    "Sample request: Dried Black Cincau Leaves",
  );
  assert.equal(inquirySubject(quote), "Quote request: Dried Black Cincau Leaves");
});

test("links encode the message", () => {
  assert.equal(
    whatsappUrl("6281325485979", "a b&c\nd"),
    "https://wa.me/6281325485979?text=a%20b%26c%0Ad",
  );
  assert.equal(
    mailtoUrl("x@example.com", "Quote request: A & B", "line 1\nline 2"),
    "mailto:x@example.com?subject=Quote%20request%3A%20A%20%26%20B&body=line%201%0Aline%202",
  );
});
