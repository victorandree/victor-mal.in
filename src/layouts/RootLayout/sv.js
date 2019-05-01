import React from 'react';
import RootLayout from './index';
import { addLocaleData } from 'react-intl';

import messages from '../../data/messages/sv';
import sv from 'react-intl/locale-data/sv';

addLocaleData(sv);

const MENU_ITEMS = [
  { to: '/vigsel', title: 'Vigsel' },
  { to: '/middag-fest', title: 'Middag & fest' },
  { to: '/toastmasters', title: 'Toastmasters' },
  { to: '/info', title: 'Övrig info' },
  { to: '/kontakt', title: 'Kontakt' },
  { to: '/en', title: 'English' },
];

export default props => (
  <RootLayout {...props} i18nMessages={messages} menuItems={MENU_ITEMS} />
);
