export { PageShell };

import React from "react";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./PageShell.css";
import "../styles/reset.css";
import "../styles/flex.css";
import "../styles/basic.css";
import "../styles/doublecolumn.css";
import "../styles/form.css";
import { config } from "../pages/config";

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    // <React.StrictMode>
    <PageContextProvider pageContext={pageContext}>
      <div className="flex column wide shadow">
        <section
          className="flex0 row spaced wrap semidark pad gap"
          style={{
            justifyContent: "space-between",
          }}
        >
          <section className="navigation">
            <nav
              role="navigation"
              className="row gap wrap"
              style={{ justifyContent: "flex-end" }}
            >
              <Link className="button" href="/">
                What We Do
              </Link>
              <Link className="button" href="/gallery">
                Gallery
              </Link>
              <Link className="button" href="/quote">
                Request a Quote
              </Link>
            </nav>
          </section>
        </section>
        <div className="flex dark">{children}</div>
        <section className="flex0 row semidark pad gap left">
          <p>© 2023 {config.app.title}</p>
        </section>
      </div>
    </PageContextProvider>
    // </React.StrictMode>
  );
}
