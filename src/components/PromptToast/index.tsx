import clsx from 'clsx';
import styles from './index.module.scss'

export function PromptToast(props: {
    showToast?: boolean;
    showModal?: boolean;
    setShowModal: (_: boolean) => void;
  }) {
  
    return (
      <div className={styles["prompt-toast"]} key="prompt-toast">
          <div
            className={clsx(styles["prompt-toast-inner"], "clickable")}
            role="button"
            onClick={() => props.setShowModal(true)}
          >
            <BrainIcon />
            <span className={styles["prompt-toast-content"]}>
              {Locale.Context.Toast(context.length)}
            </span>
          </div>
        {props.showModal && (
          <SessionConfigModel onClose={() => props.setShowModal(false)} />
        )}
      </div>
    );
  }