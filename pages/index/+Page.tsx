import { config } from "../config.js";
import { Link } from "../../renderer/Link.js";
import banner from "../../images/banner.png";
import { Home } from "./Home.js";
import { ContactIcons } from "./ContactIcons.js";

export function Page() {
  return (
    <div className="flex column wide shadow">
      <img src={banner} />
      <section
        className="flex row spaced wrap semidark pad gap"
        style={{
          justifyContent: "space-between",
        }}
      >
        <ContactIcons />
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
              Gallery
            </Link>
            <Link className="button" href="/">
              Request a Quote
            </Link>
          </nav>
        </section>
      </section>
      <div className="flex dark">
        <Home />
      </div>
      <section className="auto row semidark pad gap left">
        <ContactIcons />
        <p>
          We are a Level 4 BEE contributor and Essential Supplier. © 2023{" "}
          {config.app.title}
        </p>
      </section>
    </div>
  );
}
