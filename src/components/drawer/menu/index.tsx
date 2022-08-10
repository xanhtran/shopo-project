import './menu.scss';
import { MenuHeaderPropsType } from './menu.types';

const MenuHeader = (props: MenuHeaderPropsType) => {
  const { children, path } = props;

  if (path) {
    return (
      <div className="menu-header">
        <a href={path} className="menu-label">
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className="menu-header">
      <span className="menu-label">{children}</span>
      <span className="menu-icon"></span>
    </div>
  );
};

export default MenuHeader;
