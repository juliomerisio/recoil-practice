interface debounceProps {
  value: string;
  action: (a: string) => void;
}
let time: number = 0;
export const debounce = ({ value, action }: debounceProps) => {
  clearTimeout(time);
  time = setTimeout(() => {
    action(value);
  }, 1000);
};
