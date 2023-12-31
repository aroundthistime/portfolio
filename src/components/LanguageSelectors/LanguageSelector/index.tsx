import { useRouter } from 'next/router';
import classNames from 'classnames';
import { LanguageIcon, LanguageName, LanguageSelectorLink } from './style';

/**
 * Component used to set the application to use a certain language
 */
const LanguageSelector = ({ language, locale, iconSrc }: Props) => {
  const router = useRouter();

  return (
    // Redirect to same path but with the desired locale
    <li>
      <LanguageSelectorLink
        href={router.asPath}
        replace
        locale={locale}
        className={classNames({
          'language-selector--selected': router.locale === locale,
        })}>
        <LanguageIcon src={iconSrc} alt={language} width={20} height={20} />
        <LanguageName>{language}</LanguageName>
      </LanguageSelectorLink>
    </li>
  );
};

interface Props {
  language: string;
  locale: string;
  iconSrc: string;
}

export default LanguageSelector;
