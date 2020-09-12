import { getParser } from 'bowser';

const bowser = getParser(window.navigator.userAgent);

export const isMobile = bowser.getPlatformType(true) === 'mobile';
