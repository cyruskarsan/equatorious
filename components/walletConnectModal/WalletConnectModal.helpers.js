export const getConnectButtonText = (account, chain, text) => {
  if (!account) return 'Connect Wallet';
  if (chain !== 'Polygon') return 'Wrong Network';
  return text;
};
