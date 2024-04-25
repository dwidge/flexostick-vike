import mailIcon from "../images/antdesign/mail.svg";

export const EmailIcon = ({ email }: { email: string }) => (
  <a aria-label="email" href={"mailto:" + email}>
    <img
      src={mailIcon}
      style={{
        display: "flex",
        width: 30,
        height: 30,
      }}
    />
  </a>
);
