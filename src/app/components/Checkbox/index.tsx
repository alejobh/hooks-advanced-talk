import React from 'react';

import { ReactComponent as CheckboxSvg } from './assets/checkbox.svg';
import styles from './styles.module.scss';

interface Props {
  name: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value: boolean;
  className?: string;
}

function CustomCheckbox({ name, onChange, value = false, className = '' }: Props) {
  return (
    <div className={`${styles.itemCheckbox} ${className}`}>
      <div className={styles.checkbox2}>
        <input
          onChange={onChange}
          name={name}
          id={name}
          className={styles.checkbox}
          type="checkbox"
          defaultChecked={value}
        />
        <label htmlFor={name}>
          <CheckboxSvg />
        </label>
      </div>
    </div>
  );
}

export default CustomCheckbox;
