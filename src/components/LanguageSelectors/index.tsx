import LanguageSelector from './LanguageSelector';
import { LanguageSelectorsContainer } from './style';
import KoreanIcon from '@/assets/icons/lanaguage/korean.png';
import EnglishIcon from '@/assets/icons/lanaguage/english.png';

/**
 * Component for rendering buttons for setting the language of the application
 */
const LanguageSelectors = () => {
  return (
    <LanguageSelectorsContainer>
      <LanguageSelector
        language="한국어"
        locale="ko-KR"
        iconSrc={KoreanIcon.src}
      />
      <LanguageSelector
        language="English"
        locale="en-US"
        iconSrc={EnglishIcon.src}
      />
    </LanguageSelectorsContainer>
  );
};

export default LanguageSelectors;
