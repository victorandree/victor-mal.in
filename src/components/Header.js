import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  rsvp: {
    id: 'rsvp',
    defaultMessage: 'OSA',
  },
  rsvpHref: {
    id: 'rsvpHref',
    defaultMessage: 'mailto:osa@victor-mal.in',
  },
});

const RsvpLink = injectIntl(({ intl }) => (
  <a href={intl.formatMessage(messages.rsvpHref)}>
    <FormattedMessage {...messages.rsvp} />
  </a>
));

const Header = ({ menuItems }) => (
  <header className={styles.header}>
    <Link to="/" className={styles.homeLink}>
      <FormattedMessage id="title" />
    </Link>
    <nav className={styles.nav}>
      <ul>
        {menuItems.map(item => (
          <li key={item.to}>
            <Link to={item.to} activeClassName="current">
              {item.title}
            </Link>
          </li>
        ))}

        <li className={styles.rsvp}>
          <RsvpLink />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
