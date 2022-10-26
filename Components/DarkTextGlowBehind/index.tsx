import styles from './DarkTextGlowBehind.module.scss';

type DarkTextGlowBehindProps = {
  children: React.ReactNode;
  color: string;
  title?: string;
};
const DarkTextGlowBehind = ({
  children,
  color,
  title,
}: DarkTextGlowBehindProps) => {
  return (
    <div
      style={{
        color,
      }}
      className={styles.container}
    >
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default DarkTextGlowBehind;
