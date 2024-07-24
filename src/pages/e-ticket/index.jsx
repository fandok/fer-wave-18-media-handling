import PdfViewer from "../../components/pdf-viewer";
import styles from "./styles.module.css";

const ETiket = () => (
  <>
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.nav__logo} />
        <div className={styles.nav__menu}>
          <span>Our Services</span>
          <span>Why Us</span>
          <span>Testimonial</span>
          <span>FAQ</span>
          <button className={styles.menu__button}>Register</button>
        </div>
      </div>
      <div className={styles.headerStep}>
        <div className={styles.headerStep__detail}>
          <img width={24} height={24} src="/arrowLeft.svg" alt="left-arrow" />
          <div>
            <div className={styles.detail__title}>Tiket</div>
            <div>Order ID: xxxxxxxx</div>
          </div>
        </div>
        <div className={styles.headerStep__steps}>
          <div className={styles.steps__container}>
            <img className={styles.steps__icon} src="/check.svg" alt="check" />
            Pilih Metode
          </div>
          <div className={styles.headerStep__steps_line} />
          <div className={styles.steps__container}>
            <img className={styles.steps__icon} src="/check.svg" alt="check" />
            Bayar
          </div>
          <div className={styles.headerStep__steps_line} />
          <div className={styles.steps__container}>
            <img className={styles.steps__icon} src="/three.svg" alt="three" />
            Tiket
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: 500,
        width: 500,
      }}
    >
      <PdfViewer />
    </div>
  </>
);

export default ETiket;
