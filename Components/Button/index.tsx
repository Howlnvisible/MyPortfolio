import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  min?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  disabled,
  min = false,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <div
      className={`${styles.button} 
        ${disabled ? styles.disabled : ``
      } ${className}`}
      onClick={onClick}
      style={{
        height: min ? `32px` : `48px`,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
