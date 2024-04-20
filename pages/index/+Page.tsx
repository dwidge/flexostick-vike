import React, { useState } from "react";
// import "../../styles/reset.css";
// import "../../styles/home.css";
import { config } from "../config.js";
import { Link } from "../../renderer/Link.js";
import banner from "../../images/banner.png";
import { Home } from "./Home.js";

export function Page() {
  // const submitted = useState<boolean>(false);

  return (
    <div className="flex column wide shadow">
      {/* <img src={banner} /> */}
      <section
        className="flex0 row spaced wrap dark pad"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
        }}
      >
        <section
          className="flex column"
          style={{
            height: "14em",
            justifyContent: "flex-end",
            alignContent: "flex-end",
          }}
        >
          {/* <section className="logo">
            <div style={{ display: "grid", gridAutoColumns: "2fr" }}>
              <div>g</div>
              <div style={{ flex: 1 }}>
                <h2>
                  <Link href="/">{config.app.title}</Link>
                </h2>
                Label Manufacturer
              </div>
            </div>
          </section> */}
          <section className="navigation">
            <nav
              role="navigation"
              className="row gap wrap"
              style={{ justifyContent: "flex-end" }}
            >
              <Link className="button" href="/">
                What We Do
              </Link>
              <Link className="button" href="/">
                Request a Quote
              </Link>
            </nav>
          </section>
        </section>
      </section>
      <div className="flex dark">
        <Home />
      </div>
      <section className="flex0 semidark pad right">
        <p>
          We are a Level 4 BEE contributor and Essential Supplier. © 2023{" "}
          {config.app.title}
        </p>
      </section>
    </div>
  );
}
