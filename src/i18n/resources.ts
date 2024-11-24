import type { Resource } from 'i18next';

import { kebabToCamelCase } from '@src/tools';

const enFiles = import.meta.glob('./en/**/*.json', { import: 'default', eager: true });
const zhFiles = import.meta.glob('./zh/**/*.json', { import: 'default', eager: true });

const parseFiles = (files: Record<string, unknown>) => {
  const resources: Record<string, unknown> = {};

  Object.keys(files).forEach((key) => {
    const cleanedKey = kebabToCamelCase(key.replace(/^.*\/(.*)\.json$/, '$1'));
    resources[cleanedKey] = files[key];
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
