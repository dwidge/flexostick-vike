import waIcon from "../images/antdesign/whats-app.svg";

export const WhatsappIcon = ({ whatsapp }: { whatsapp: string }) => (
  <a target="_blank" aria-label="whatsapp" href={"https://wa.me/" + whatsapp}>
    <img
      src={waIcon}
      style={{
        display: "flex",
        width: 30,
        height: 30,
      }}
    />
  </a>
);
