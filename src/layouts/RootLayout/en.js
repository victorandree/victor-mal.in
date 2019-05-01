import React from 'react';
import RootLayout from './index';
import { addLocaleData } from 'react-intl';

import messages from '../../data/messages/en';
import en from 'react-intl/locale-data/en';

addLocaleData(en);

const MENU_ITEMS = [
  { to: '/en/ceremony', title: 'Ceremony' },
  { to: '/en/party', title: 'Dinner & party' },
  { to: '/en/toastmasters', title: 'Toastmasters' },
  { to: '/en/info', title: 'Info' },
  { to: '/en/contact', title: 'Contact' },
  { to: '/', title: 'Svenska' },
];

export default props => (
  <RootLayout {...props} i18nMessages={messages} menuItems={MENU_ITEMS} />
);
