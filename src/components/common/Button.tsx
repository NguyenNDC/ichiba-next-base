import classNames from 'classnames';
import Image from 'next/image';
import P15 from './P/P-15';

interface props {
  className?: string;
  children: React.ReactNode;
  icon?: string;
}

export default function Button({ className, children, icon }: props) {
  return (
    <button
      className={classNames(
        ' bg-[#F27C08] rounded-lg outline-none border-none',
        className,
        icon ? 'flex justify-between items-center' : null
      )}
    >
      <P15 className="text-[white]">{children}</P15>
      {icon ? (
        <Image
          src={icon}
          alt="button"
        />
      ) : null}
    </button>
  );
}
