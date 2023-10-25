import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>{greeting}</p>
      </div>
    </>
  );
};
