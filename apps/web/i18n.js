module.exports = {
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  localeDetection: true,
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: async (locale, namespace) => {
    return import(`./locales/${locale}/${namespace}.json`).then(
      (r) => r.default
    );
  },
};
