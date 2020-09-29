import React from 'react';
import clsx from 'clsx';
import i18next from 'i18next';

import { ReactComponent as ValidIcon } from '~assets/ic_valid.svg';
import { ReactComponent as InvalidIcon } from '~assets/ic_invalid.svg';

import styles from './styles.module.scss';

interface Props {
  label: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  confirmable?: boolean;
  name: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  // Typed from react-hook-form
  inputRef: (instance: HTMLInputElement | null) => void;
  className?: string;
}

function FormInput({
  name,
  label,
  disabled,
  error,
  onChange,
  confirmable = true,
  placeholder,
  type = 'text',
  inputRef,
  className = ''
}: Props) {
  return (
    <div className={clsx('column', styles.inputWrapper, className)}>
      <label htmlFor={name} className={`${styles.inputLabel} m-bottom-1`}>
        {label}
      </label>
      <div className={styles.inputContent}>
        <input
          id={name}
          data-testid={`${name}-input`}
          name={name}
          className={clsx(
            styles.inputBase,
            'm-bottom-1',
            { [styles.inputError]: !!error },
            { [styles.confirmed]: confirmable && !error }
          )}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          aria-errormessage={`${name}-error`}
          aria-invalid={!!error}
          type={type}
          ref={inputRef}
        />
        {confirmable && !error && (
          <ValidIcon
            className={styles.inputIcon}
            role="status"
            aria-label={i18next.t('Input:valid') as string}
          />
        )}
        {error && (
          <InvalidIcon
            className={styles.inputIcon}
            role="status"
            aria-label={i18next.t('Input:invalid') as string}
          />
        )}
      </div>
      <span
        id={`${name}-error`}
        role="alert"
        className={clsx(styles.errorMessage, { [styles.show]: !!error })}
      >
        {error}
      </span>
    </div>
  );
}

export default FormInput;
