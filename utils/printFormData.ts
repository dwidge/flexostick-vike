// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { capitalCase } from "change-case";

export type FormData = Record<string, string | number>;

export const printFormData = (data: FormData): string =>
  Object.entries(data)
    .map(([k, v]) => capitalCase(k) + ": " + v)
    .join("\n");
