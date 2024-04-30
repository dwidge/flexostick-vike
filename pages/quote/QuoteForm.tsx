// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { AutoForm } from "uniforms-unstyled";
import { ZodBridge } from "uniforms-bridge-zod";
import { Quote } from "./Quote";
import { openEmailClient } from "../../utils/openEmailClient";
import { printFormData } from "../../utils/printFormData";
import { config } from "../config";

const bridge = new ZodBridge({
  schema: Quote,
});

export function QuoteForm() {
  return (
    <AutoForm
      schema={bridge}
      onSubmit={(data: Quote) =>
        openEmailClient({
          to: config.app.email,
          subject: `Quote`,
          body: `
            Hello,
            
            I am interested in placing an order.
            
            ${printFormData(data)}
            
            Please get back to me at your earliest convenience. Thank you!
          `,
        })
      }
    />
  );
}
