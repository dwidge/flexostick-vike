// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

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
