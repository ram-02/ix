'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b3c85302.js');

/*
 Stencil Client Patch Esm v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ix-siemens-about-content.cjs",[[1,"ix-siemens-about-content",{"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"imprintLanguage":[1,"imprint-language"],"copyrightYears":[1,"copyright-years"],"i18nCorporateLabel":[1,"i-1-8n-corporate-label"],"i18nPrivacyNoticeLabel":[1,"i-1-8n-privacy-notice-label"],"i18nTermsOfUseLabel":[1,"i-1-8n-terms-of-use-label"],"i18nCookieNoticeLabel":[1,"i-1-8n-cookie-notice-label"],"i18nDigitalId":[1,"i-1-8n-digital-id"]}]]],["ix-siemens-logo.cjs",[[1,"ix-siemens-logo"]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map