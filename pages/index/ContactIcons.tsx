import { EmailIcon } from "../../components/EmailIcon";
import { PhoneIcon } from "../../components/PhoneIcon";
import { WhatsappIcon } from "../../components/WhatsappIcon";

export const ContactIcons = () => (
  <section className="auto row gap left wrap">
    <EmailIcon email="flex.stick@gmail.com" />
    <PhoneIcon phone="011 892 3224" />
    <WhatsappIcon whatsapp="+27832596698" />
  </section>
);
