import { 
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from './icons';
import Link from 'next/link';
import styled from 'styled-components';

const SocialIcons = props => {
  const socials = [
    {"link": "//www.facebook.com/jamie.pask.71", "icon": <FacebookIcon />},
    {"link": "//www.instagram.com/jamiepask92/", "icon": <InstagramIcon />},
    {"link": "//www.linkedin.com/in/jamie-pask/", "icon": <LinkedinIcon />},
    {"link": "//github.com/jpask1392", "icon": <GithubIcon />},
  ]

  return (
    <div className={`social-icons ${props.className}`}>
      {socials.map((social, i) => (
        <Link key={i} href={social.link}><a target="_blank">{social.icon}</a></Link>  
      ))}
    </div>
  )
};

export default styled(SocialIcons)`
  z-index: 1;

  & a {
    color: black;
  }
`;
