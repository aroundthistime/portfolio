'use client';

import { cn } from '@/utils/styles';
import { SwitchProps, Root, Thumb } from '@radix-ui/react-switch';

type Props = Pick<SwitchProps, 'checked' | 'onCheckedChange' | 'className'>;

const Switch = ({ className, ...props }: Props) => {
  return (
    <Root
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600',
        'data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}>
      <Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        )}
      />
    </Root>
  );
};

export default Switch;
