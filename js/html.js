// htm gives JSX-like templates in plain JavaScript, so the site needs no build step.
import { createElement } from 'react';
import htm from 'htm';

export const html = htm.bind(createElement);
