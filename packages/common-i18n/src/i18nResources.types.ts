import type admin from './locales/en/admin.json';
import type auth from './locales/en/auth.json';
import type common from './locales/en/common.json';
import type system from './locales/en/system.json';
export interface I18nResources {
  admin: typeof admin;
  common: typeof common;
  auth: typeof auth;
  system: typeof system;
}