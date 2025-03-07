import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 이 함수를 사용하여 Tailwind 클래스들을 조건부로 적용하고 병합할 수 있습니다.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}