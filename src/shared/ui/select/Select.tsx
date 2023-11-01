import { FC, useState } from 'react';
import styles from './Select.module.scss';
import ChevronDown from '../../icon/chevron-down.svg?react';
import { ICurrenci } from '../..';

interface InputSelectProps {
  options: ICurrenci[];
  selectedOption: ICurrenci;
  onChange: (value: ICurrenci) => void;
}

export const Select: FC<InputSelectProps> = ({ options, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: ICurrenci) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.inputSelect__content}>
      <div className={styles.inputSelect__label} onClick={handleToggleOpen}>
        {options.find((option) => option.id === selectedOption.id)?.id}
        <ChevronDown />
      </div>
      {isOpen && (
        <div className={styles.options__list}>
          {options.map((option) => (
            <li
              key={option.id}
              className={
                option.id === selectedOption.id
                  ? `${styles.list__item} ${styles.selected}`
                  : styles.list__item
              }
              onClick={() => handleOptionClick(option)}
            >
              {option.id}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
