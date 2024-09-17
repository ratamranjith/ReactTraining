import styles from "../../assets/css/Inline.module.css";

function StyleForParticularComponent() {
  return (
    <div>
      <span className={styles.paragraph}>
        Particular Styles in <code>Paragraph</code> Tag
      </span>
    </div>
  );
}

export default StyleForParticularComponent;
