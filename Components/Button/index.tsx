import styles from './Button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  min?: boolean;
  children: React.ReactNode;
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
