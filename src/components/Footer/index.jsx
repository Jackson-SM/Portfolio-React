import { Contact, ContentContact, Foot, GroupLinks, InfoFooter, InputContact, InputTextarea, Link, Links, InviteFormContact, TitleForm, InfoUser, BtnSocial } from './styles';

import Logo from '../Logo';

import { SiMinutemailer } from 'react-icons/si';
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

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
        <TitleForm>Form Contact</TitleForm>
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
      <InfoUser>
        <BtnSocial href="#"><AiFillGithub size={35} /></BtnSocial>
        <BtnSocial href="#"><FaDiscord size={35} /></BtnSocial>
        <BtnSocial href="#"><AiFillInstagram size={35} /></BtnSocial>
        <BtnSocial href="#"><AiOutlineTwitter size={35} /></BtnSocial>
        <BtnSocial href="#"><AiFillLinkedin size={35} /></BtnSocial>
      </InfoUser>
    </Foot>
  )
}