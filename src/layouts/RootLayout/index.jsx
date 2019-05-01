import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, defineMessages, injectIntl } from 'react-intl';
import Header from '../../components/Header';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Victor och Malin',
  },
});

const IntlHelmet = injectIntl(({ intl }) => (
  <Helmet title={intl.formatMessage(messages.title)} meta={[]} />
));

const RootLayout = ({ children, location, i18nMessages, menuItems }) => (
  <StaticQuery
    query={query}
    render={data => {
      const url = location.pathname;
      const { langs, defaultLangKey } = data.site.siteMetadata.languages;
      const langKey = getCurrentLangKey(langs, defaultLangKey, url);
      const defaultLangKeyUrl = '/' + defaultLangKey + '/';
      const homeLink = ('/' + langKey).replace(defaultLangKeyUrl, '/');
      const langsMenu = getLangs(
        langs,
        langKey,
        getUrlForLang(homeLink, url),
      ).map(item => ({
        ...item,
        link: item.link.replace(defaultLangKeyUrl, '/'),
      }));

      return (
        <IntlProvider locale={langKey} messages={i18nMessages}>
          <div>
            <IntlHelmet />
            <Header langs={langsMenu} menuItems={menuItems} />
            {children}
          </div>
        </IntlProvider>
      );
    }}
  />
);

export default RootLayout;
