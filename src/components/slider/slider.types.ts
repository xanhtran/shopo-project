import { ReactNode } from 'react';

export interface ArrowSliderPropsType {
  children: ReactNode;
  onNext: () => void;
  onPrev: () => void;
}
