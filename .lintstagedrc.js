
module.exports = {
  '*.rs': files => ["cargo +nightly fmt", "cargo +nightly fix --allow-dirty --allow-staged -Z unstable-options --clippy", "cargo test"],
  '*.{md,mdx,js,ts,tsx,json,html,css,scss}': [
    "prettier"
  ]
};
