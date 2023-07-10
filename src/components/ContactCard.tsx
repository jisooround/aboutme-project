import styled from "styled-components";
import { LuExternalLink } from "react-icons/lu";
import { clickLink } from "@/utills/clickLink";

const ContactCard = () => {
  const blogURL = "https://velog.io/@mudidu";
  const gitURL = "https://github.com/jisooround";

  return (
    <CardStyle>
      <NameAreaStyle>
        <h3>우지수</h3>
      </NameAreaStyle>
      <InfoAreaStyle>
        <div>
          <p>Phone</p>
          <p>010 5028 7344</p>
        </div>
        <div>
          <p>Email</p>
          <p>9utesleben@gmail.com</p>
        </div>
        <div>
          <p>GitHub</p>
          <p className="pointer" onClick={() => clickLink(gitURL)}>
            Link <LuExternalLink />
          </p>
        </div>
        <div>
          <p>Blog</p>
          <p className="pointer" onClick={() => clickLink(blogURL)}>
            Link <LuExternalLink />
          </p>
        </div>
      </InfoAreaStyle>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 35%;
  min-width: 380px;
  aspect-ratio: 90 / 53;
  margin: 80px;
  background-color: var(--color-white);
  box-sizing: border-box;
  padding: 2.1875rem;
  color: var(--color-blue);
  display: flex;
  background-image: url("./strokeLogo.png");
  background-position: -10% 300%;
  background-size: 80%;
  background-repeat: no-repeat;
  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 3 / 4;
    background-position: 90% 10%;
    background-size: 80%;
  }
`;

const NameAreaStyle = styled.section`
  width: 50%;
  h3 {
    font-weight: 400;
    font-size: 32px;
    padding-bottom: 1rem;
  }
`;

const InfoAreaStyle = styled.section`
  width: 60%;
  div {
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 1.25rem;
    padding-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
    }
    p {
      display: flex;
      font-size: 1.3125rem;
      font-weight: 300;
      gap: 0.3125rem;
      &:nth-child(1) {
        font-weight: 500;
      }
    }
    @media ${(props) => props.theme.laptop} {
      grid-template-columns: 100%;
      gap: 0.1875rem;
      padding-bottom: 1.25rem;
      p {
        font-size: 20px;
      }
    }
  }
`;

export default ContactCard;
