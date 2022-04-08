import { Contact, ContactBtn, ContentContact, Foot, GroupLinks, InputContact, LabelContact, Link, Links } from './styles';

import Logo from '../Logo';

import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <Foot>
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
      <Contact>
        <ContentContact>
          <LabelContact>Contato</LabelContact>
          <InputContact  type="text" name="contact" placeholder="example@example.com" />
        </ContentContact>
        <ContactBtn><MdEmail size={18} />Contatar</ContactBtn>
      </Contact>
      <Logo />
    </Foot>
  )
}