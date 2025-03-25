import "i18next";
import { Translation } from "./types";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: Translation,
    defaultNS: 'shared'
  }
}