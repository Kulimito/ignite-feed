import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  profileData: {
    profileImageBackground: string;
    profileName: string;
    profileOcuppation: string;
    avatarUrl: string;
  };
}

export function Sidebar({
  profileData: {
    profileImageBackground,
    profileName,
    profileOcuppation,
    avatarUrl,
  },
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={profileImageBackground} />

      <Avatar avatarUrl={avatarUrl} />

      <div className={styles.profile}>
        <strong>{profileName}</strong>
        <span>{profileOcuppation}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite seu perfil
        </a>
      </footer>
    </aside>
  );
}
