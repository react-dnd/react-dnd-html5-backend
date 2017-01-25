
const _isSafari = Boolean(window.safari);
const _isFirefox = !_isSafari && /firefox/i.test(navigator.userAgent);

export const isFirefox = () => _isFirefox;
export const isSafari = () => _isSafari;
