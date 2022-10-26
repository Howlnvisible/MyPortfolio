import styles from './CommonCard.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import Button from '../Button';

type CommonCardProps = {
  children?: React.ReactNode;
  src?: string;
  title?: string;
  isSlider?: boolean;
  windowDimension?: any;
  progress?: number | null;
  status?: string;
  state?: string;
  button?: boolean;
  navigate?: string;
  commonCardItems?: any;
  isShowcase?: boolean;
};
const CommonCard = ({
  children,
  src,
  title,
  isSlider = false,
  windowDimension,
  progress = null,
  status,
  state,
  button = false,
  navigate,
  commonCardItems,
  isShowcase
}: CommonCardProps) => {
  const [currentCard, setCurrentCard] = useState<any>(commonCardItems?.[0]);

  const nextSlide = () => {
    setCurrentCard(
      currentCard.id === commonCardItems.length - 1
        ? commonCardItems[0]
        : commonCardItems[currentCard.id + 1]
    );
  };
  const prevSlide = () => {
    setCurrentCard(
      currentCard.id === 0
        ? commonCardItems[commonCardItems.length - 1]
        : commonCardItems[currentCard.id - 1]
    );
  };
  return (
    <div className={`${styles.container} ${isShowcase ? styles.showcase : ``}`}>
        <Image
          src={isSlider ? currentCard.src : src}
          width={380}
          height={380}
          objectFit='cover'
          style={{ borderRadius: 16 }}
        />
      <SectionTitle
        title={isSlider ? currentCard.title : title}
        noBorder
        color={`rgba(76, 62, 37, 1)`}
        align={`left`}
        min
        style={{
          fontWeight: `bold`
        }}
      />
      {isSlider ? (
        <>
          <div className={styles.bioContainer}>
            <div className={styles.headContainer}>{currentCard.subTitle}</div>
            <div className={styles.bodyContainer}>{currentCard.children}</div>
          </div>
          <div className={styles.buttonImageContainer}>
            <div className={styles.buttonImage} onClick={prevSlide}>
              &#8249;
            </div>
            <div className={styles.buttonImage} onClick={nextSlide}>
              &#8250;
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.bioContainer}>
            <div className={styles.bodyContainer}>{children}</div>
          </div>
          {progress !== null ? (
            <>
              <div className={styles.progress}>
                <div>{status}</div>
                <div>{state}</div>
              </div>
              <div className={styles.bar}>
                <div
                  style={{
                    width: `${progress}%`,
                    height: `100%`,
                    background: `rgba(76, 62, 37, 1)`,
                  }}
                ></div>
              </div>
            </>
          ) : (
            ``
          )}
          {button ?
            <Button
              children={`more info`}
              onClick={() => window.open(navigate)}
              className={navigate === `` ? styles.disabled : ``}
            />
            : ``}
        </>
      )}
    </div>
  );
};

export default CommonCard;
