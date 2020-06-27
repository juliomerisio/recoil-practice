interface debounceProps {
  value: string;
  action: (a: string) => void;
  delay?: number;
}
let time: number = 0;
export const debounce = ({ value, action, delay = 1000 }: debounceProps) => {
  clearTimeout(time);
  time = setTimeout(() => {
    action(value);
  }, delay);
};
