import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, defineMessages, injectIntl } from 'react-intl';
import Header from '../../components/Header';
import ogImageUrl from '../../images/std2.jpg';

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

const IntlHelmet = injectIntl(({ intl, pageName, lang }) => {
  const title = intl.formatMessage(messages.title);

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang, prefix: 'og: http://ogp.me/ns#' }}
    >
      <meta property="og:title" content={title} />
      <meta property="og:description" content="31 augusti 2019" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content="https://victor-mal.in/" />

      <body className={pageName} />
    </Helmet>
  );
});

const RootLayout = ({
  children,
  location,
  pageName,
  i18nMessages,
  menuItems,
}) => (
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
          <div className="root">
            <IntlHelmet pageName={pageName || ''} lang={langKey} />
            <Header langs={langsMenu} menuItems={menuItems} />
            {children}
          </div>
        </IntlProvider>
      );
    }}
  />
);

export default RootLayout;
