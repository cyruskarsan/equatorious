const isHTMLElement = (nodes) => nodes instanceof HTMLElement;

export const getFocusableChildNodes = (node) => {
  if (!isHTMLElement(node)) return [];
  return node.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
};
