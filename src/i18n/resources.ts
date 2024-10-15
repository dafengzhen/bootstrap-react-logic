import type { Resource } from 'i18next';
import { toCamelCase } from '@src/tools';

const enFiles = import.meta.glob('./en/**/*.json', { eager: true });
const zhFiles = import.meta.glob('./zh/**/*.json', { eager: true });

const parseFiles = (files: Record<string, unknown>) => {
  const resources: Record<string, unknown> = {};

  Object.keys(files).forEach((key) => {
    const cleanedKey = toCamelCase(key.replace(/^.*\/(.*)\.json$/, '$1'));
    const file = files[key] as { default: unknown };
    resources[cleanedKey] = file.default;
  });

  return resources;
};

const enResources = parseFiles(enFiles);
const zhResources = parseFiles(zhFiles);

const resources = {
  en: enResources,
  zh: zhResources,
};

export default resources as Resource;
