import Image from 'next/image';
import logo from '@/svg/logo.svg';
import P14 from '@/components/common/P/P-14';
import youtube from '@/svg/contact/youtube.svg';
import facebook from '@/svg/contact/facebook.svg';
import whatsapp from '@/svg/contact/whatsapp.svg';
import twitter from '@/svg/contact/twitter.svg';

export default function Footer() {
  return (
    <div>
      <div>
        <Image
          src={logo}
          alt="logo"
        />
        <P14>
          Please also note that some packages only have limited tracking events
          in the country of origin and no tracking events in the destination
        </P14>
        <div>
          <Image
            src={facebook}
            alt="facebook"
          />
          <Image
            src={twitter}
            alt="twitter"
          />
          <Image
            src={youtube}
            alt="youtube"
          />
          <Image
            src={whatsapp}
            alt="whatsapp"
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
