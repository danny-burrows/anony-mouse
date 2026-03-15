export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**"],
  rules: {
    "alpha-value-notation": null,
    "color-function-notation": null,
    "color-function-alias-notation": null,
    "declaration-empty-line-before": null,
    "font-family-name-quotes": null,
    "media-feature-range-notation": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "selector-class-pattern": null,
  },
};
