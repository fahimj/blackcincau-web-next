export type InquiryType = "quote" | "sample";

export interface Inquiry {
  type: InquiryType;
  product: string;
  quantity: string;
  destination: string;
  company: string;
  name: string;
  contact: string;
  message: string;
}

// The message is always written in English, whatever language the buyer is
// browsing in, because it is read by the sales team.
export function inquirySubject(inquiry: Inquiry): string {
  const kind = inquiry.type === "sample" ? "Sample request" : "Quote request";
  return `${kind}: ${inquiry.product}`;
}

export function inquiryMessage(inquiry: Inquiry): string {
  const lines: [string, string][] = [
    ["Product", inquiry.product],
    ["Quantity", inquiry.quantity],
    ["Destination", inquiry.destination],
    ["Company", inquiry.company],
    ["Name", inquiry.name],
    ["Contact", inquiry.contact],
    ["Message", inquiry.message],
  ];
  const body = lines
    .filter(([, value]) => value.trim() !== "")
    .map(([label, value]) => `${label}: ${value.trim()}`);
  const opening =
    inquiry.type === "sample"
      ? "Hello Black Cincau, I would like to request a sample."
      : "Hello Black Cincau, I would like to request a quote.";
  return [opening, "", ...body].join("\n");
}

export function whatsappUrl(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
