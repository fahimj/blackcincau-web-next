"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent } from "react";
import {
  inquiryMessage,
  inquirySubject,
  mailtoUrl,
  whatsappUrl,
  type Inquiry,
} from "@/lib/inquiry";

interface InquiryFormProps {
  whatsappNumber: string;
  email: string;
  // English product names are sent in the message; `label` is what the buyer sees.
  products: { slug: string; label: string; messageName: string }[];
  labels: {
    type: string;
    typeQuote: string;
    typeSample: string;
    product: string;
    productAll: string;
    quantity: string;
    quantityHint: string;
    destination: string;
    company: string;
    name: string;
    contact: string;
    message: string;
    sendWhatsapp: string;
    sendEmail: string;
    note: string;
  };
}

export function InquiryForm({
  whatsappNumber,
  email,
  products,
  labels,
}: InquiryFormProps) {
  const params = useSearchParams();
  const initialType = params.get("type") === "sample" ? "sample" : "quote";
  const initialProduct =
    products.find((product) => product.slug === params.get("product"))?.slug ??
    "";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "");
    const product = products.find((item) => item.slug === field("product"));
    const inquiry: Inquiry = {
      type: field("type") === "sample" ? "sample" : "quote",
      product: product?.messageName ?? "All products",
      quantity: field("quantity"),
      destination: field("destination"),
      company: field("company"),
      name: field("name"),
      contact: field("contact"),
      message: field("message"),
    };
    const text = inquiryMessage(inquiry);
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    if (submitter instanceof HTMLButtonElement && submitter.value === "email") {
      window.location.href = mailtoUrl(email, inquirySubject(inquiry), text);
    } else {
      window.open(whatsappUrl(whatsappNumber, text), "_blank", "noopener");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form-row form-choice">
        <legend>{labels.type}</legend>
        <label>
          <input
            type="radio"
            name="type"
            value="quote"
            defaultChecked={initialType === "quote"}
          />
          {labels.typeQuote}
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="sample"
            defaultChecked={initialType === "sample"}
          />
          {labels.typeSample}
        </label>
      </fieldset>

      <label className="form-row">
        <span>{labels.product}</span>
        <select name="product" defaultValue={initialProduct}>
          <option value="">{labels.productAll}</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.label}
            </option>
          ))}
        </select>
      </label>

      <label className="form-row">
        <span>{labels.quantity}</span>
        <input name="quantity" required aria-describedby="quantity-hint" />
        <small id="quantity-hint">{labels.quantityHint}</small>
      </label>

      <label className="form-row">
        <span>{labels.destination}</span>
        <input name="destination" required autoComplete="country-name" />
      </label>

      <div className="form-pair">
        <label className="form-row">
          <span>{labels.company}</span>
          <input name="company" required autoComplete="organization" />
        </label>
        <label className="form-row">
          <span>{labels.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
      </div>

      <label className="form-row">
        <span>{labels.contact}</span>
        <input name="contact" required />
      </label>

      <label className="form-row">
        <span>{labels.message}</span>
        <textarea name="message" rows={4} />
      </label>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" value="whatsapp">
          {labels.sendWhatsapp}
        </button>
        <button className="btn btn-outline" type="submit" value="email">
          {labels.sendEmail}
        </button>
      </div>
      <p className="form-note">{labels.note}</p>
    </form>
  );
}
