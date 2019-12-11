export default window.CONFIG.supportedLanguages.map(
  (language: { handle: string; string: string }) => ({
    value: language.handle,
    label: language.string,
  })
);
