import { IProps } from '@/types';

interface ButtonProps extends IProps {
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { id, className, disabled, children, type, onChange } = props;

  return (
    <button
      disabled={disabled}
      id={id}
      className={[className, 'rounded-md bg-zinc-500 p-2 outline-none'].join(
        ' ',
      )}
      type={type}
      onChange={onChange}
    >
      {children}
    </button>
  );
};
