import { Contact, ContentContact, Foot, GroupLinks, InfoFooter, InputContact, InputTextarea, Link, Links, InviteFormContact } from './styles';

import Logo from '../Logo';

import { SiMinutemailer } from 'react-icons/si';

export default function Footer() {
  return (
    <Foot>
      <InfoFooter>
      <Links>
        <GroupLinks>
          <h1>Titulo</h1>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
        </GroupLinks>
        <GroupLinks>
          <h1>Titulo</h1>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
        </GroupLinks>
      </Links>
      <Contact method="POST">
        <ContentContact>
          <InputContact  type="text" name="name" placeholder="Name" required />
        </ContentContact>
        <ContentContact>
          <InputContact  type="text" name="email" placeholder="Email" required />
        </ContentContact>
        <ContentContact>
          <InputTextarea  type="text" name="message" placeholder="Message" required />
        </ContentContact>
        <InviteFormContact type="submit">Contact</InviteFormContact>
      </Contact>
      <Logo />
      </InfoFooter>
    </Foot>
  )
}