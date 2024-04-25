import phoneIcon from "../images/antdesign/phone.svg";

export const PhoneIcon = ({ phone }: { phone: string }) => (
  <a aria-label="tel" href={"tel:" + phone}>
    <img
      src={phoneIcon}
      style={{
        display: "flex",
        width: 30,
        height: 30,
      }}
    />
  </a>
);
