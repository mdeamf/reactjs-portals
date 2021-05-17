import { createPortal } from 'react-dom';

export const PortalComponent = ({ children }) => {
  const domNode = document.getElementById('top-level');
  return createPortal(children, domNode);
};
