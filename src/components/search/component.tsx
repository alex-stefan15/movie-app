import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

type Props = {
  onSearch: (searchQuery: string) => void;
  query: string;
};

export const Search: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = () => {
    const input = inputRef.current!.value;
    props.onSearch(input);
  };
  const { t } = useTranslation();
  return (
    <div className={styles.search}>
      <form>
        <input
          value={props.query}
          type="text"
          placeholder={t('searchQuery')}
          ref={inputRef}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
};
