import styles from "./style.module.css";

export type ProjectProps = {
  title: string;
  index: number;
  setModal: (modal: { active: boolean; index: number }) => void;
};

export const Project = ({ title, index, setModal }: ProjectProps) => {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}>
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};
