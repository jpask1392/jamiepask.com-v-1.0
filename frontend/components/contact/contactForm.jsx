import styled from 'styled-components'
import { Grid, Container } from "@material-ui/core"
import { PrimaryButton } from '../buttons';
import { ContactInputText, ContactInputDropdown } from '../../components/contactInput';
import { mediaQueries } from '../../media_queries'

function ContactPage({page, className}) {
  // has form been submitted?
  const [submit, setSubmit] = React.useState(false);

  const onSubmit = event => {
    event.preventDefault();
    var object = {};
    const data = new FormData(event.target);
    data.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    fetch('http://localhost:1337/send-email', {
      method: 'POST',
      headers: { "Content-type": "application/json"},
      body: json
    }).then(setSubmit(true))
  }

  return (
    <Container>
      <Grid container className={className}>
        <Grid item xs={12}>
          {submit && <div>SUBMITTED</div>}

          <div className="title"><h2>Hello!</h2></div>
          <form method="POST" onSubmit={onSubmit} id="contactForm">
            <span>My Name is </span>
            <ContactInputText name="name" placeholder="name"/>
            <span> from </span> 
            <ContactInputText name="company" placeholder="company"/>
            .
            I'm currently looking for 
            <ContactInputDropdown />.
            <span> You can call me on </span>
            <label htmlFor="phone"></label>
            <ContactInputText name="phone" placeholder="phone"/>
            <span> or email me at </span>
            <ContactInputText name="email" placeholder="email"/>
            <span>. I look forward to talking further!</span>
            <div className="submit-btn-wrapper">
              <button type="submit">
                <PrimaryButton btnText="Send"/>
              </button>
            </div>
          </form>
        </Grid> 
      </Grid>
    </Container>
  );
}

export default styled(ContactPage)`
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};

  & .excerpt {
    text-transform: uppercase;
    text-align: center;
    padding-bottom: ${props => props.theme.spacing[3]};
  }

  & .title {
    padding-bottom: ${props => props.theme.spacing[2]};

    @media ${mediaQueries.md_up} {
      text-align: center;
    }
  }

  & form {
    width: 100%;
    font-weight: ${props => props.theme.fontWeights.heading};
    line-height: 2.5;
    font-size: ${props => props.theme.fontSizes[4]};

    .MuiInputBase-root {
      font-weight: ${props => props.theme.fontWeights.heading};
      color: #B2B2B2;
    }

    .MuiInputBase-input {
      padding-bottom: 0;
      font-size: ${props => props.theme.fontSizes[4]};

      @media ${mediaQueries.md_up} {
        font-size: ${props => props.theme.fontSizes[2]};
      }
    }

    .MuiInput-underline::before,
    .MuiInput-underline::after {
      content: none;
    }

    @media ${mediaQueries.md_up} {
      font-size: ${props => props.theme.fontSizes[2]};
      text-align: center;
    }

    .submit-btn-wrapper {
      padding-top: ${props => props.theme.spacing[2]};

      @media ${mediaQueries.md_up} {
        text-align: center;
      }

      button {
        background: none;
        border: none;
      }
    }
  }
`;
