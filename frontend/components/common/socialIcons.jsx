import { 
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from './common/icons';
import Link from 'next/link';
import styled from 'styled-components';

const SocialIcons = props => {
  const socials = [
    {"link": "https://www.facebook.com/jamie.pask.71", "icon": <FacebookIcon />},
    {"link": "https://www.instagram.com/jamiepask92/", "icon": <InstagramIcon />},
    {"link": "https://www.linkedin.com/in/jamie-pask/", "icon": <LinkedinIcon />},
    {"link": "https://www.github.com/jpask1392", "icon": <GithubIcon />},
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
    color: white;
    width: 42px;
    padding: 13px;
    background: ${props => props.theme.color.primaryLight};
    border-radius: 100px;
    position: relative;
    height: 42px;
    display: flex;
    margin-bottom: 1rem;

    svg {
      width: 100%;
      height: 100%;
      fill: white;
    }
  }
`;
