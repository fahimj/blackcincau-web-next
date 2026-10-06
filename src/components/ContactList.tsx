import { company } from "@/content/company";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export function ContactList() {
  return (
    <ul className="icon-list">
      <li>
        <PinIcon />
        <address>{company.addressLine}</address>
      </li>
      <li>
        <PhoneIcon />
        <a href={company.whatsappLink} dir="ltr">
          {company.phoneDisplay}
        </a>
      </li>
      <li>
        <MailIcon />
        <a href={`mailto:${company.email}`} dir="ltr">
          {company.email}
        </a>
      </li>
    </ul>
  );
}
