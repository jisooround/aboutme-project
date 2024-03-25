import React from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { clipboard } from "@/utills/clipboard";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  setContactFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const contactData = [
  {
    type: "copy",
    title: "email",
    content: "9utesleben@gmail.com",
  },
  {
    type: "copy",
    title: "phone",
    content: "+82 10-5028-7344",
  },
  {
    type: "link",
    title: "github",
    content: "https://github.com/jisooround",
  },
  {
    type: "link",
    title: "blog",
    content: "https://velog.io/@mudidu/posts",
  },
  {
    type: "link",
    title: "instagram",
    content: "https://www.instagram.com/mudidot",
  },
];

const ContactPopup = ({ setContactFlag }: Props) => {
  const navigate = useNavigate();

  return (
    <PopupStyle>
      <ToastContainer
        autoClose={1000}
        position="bottom-right"
        hideProgressBar={false}
      />
      <BackgroundStyle
        onClick={() => {
          setContactFlag(false);
        }}
      />
      <ContentWrapStyle>
        <i>
          <img src="/mouse-icon.png" alt="" />
        </i>
        {contactData.map((data) => {
          return (
            <div>
              <p>{data.title}</p>
              {data.type === "copy" ? (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    clipboard(data.content);
                  }}
                >
                  {data.content}
                </span>
              ) : (
                <Link to={data.content} target="blank">
                  <FiArrowUpRight />
                </Link>
              )}
            </div>
          );
        })}
      </ContentWrapStyle>
    </PopupStyle>
  );
};

const PopupStyle = styled.div`
  width: 100vw;
  height: 100vh;
  /* border: 1px solid black; */
  position: fixed;
  z-index: 999999;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 580px) {
    align-content: center;
    /* margin-top: -50px; */
  }
`;

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-skyblue);
  opacity: 0.9;
  box-sizing: border-box;
  animation-name: animate-fade;
  animation-duration: 0.5s;
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

const ContentWrapStyle = styled.div`
  z-index: 9999;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 30%;
  animation-name: animate-pop;
  animation-duration: 0.3s;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(0.16, 0.26, 0.26, 2);
  i {
    text-align: center;
    padding-bottom: 20px;
    img {
      width: 100px;
    }
  }
  div {
    width: 100%;
    background-color: var(--color-white);
    border-radius: 50px;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 4fr;
    gap: 10px;
    color: var(--color-black90);
    padding: 10px 20px;
    margin: 10px;
    box-sizing: border-box;
    font-size: 30px;
    transition: 0.2s;
    p {
      font-weight: 600;
    }
    a {
      line-height: 0;
    }
    span,
    a {
      text-align: right;
      cursor: pointer;
      text-decoration: none;
    }
    span:hover,
    a:hover {
      border: none;
      color: var(--color-skyblue);
      box-sizing: border-box;
    }
    @media screen and (max-width: 1530px) {
      font-size: 26px;
      transition: 0.2s;
    }
    @media screen and (max-width: 735px) {
      font-size: 20px;
      transition: 0.2s;
    }
    @media screen and (max-width: 420px) {
      font-size: 16px;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 1580px) {
    width: 50%;
    transition: 0.2s;
  }
  @media screen and (max-width: 1130px) {
    width: 60%;
    transition: 0.2s;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    transition: 0.2s;
    margin-top: -50px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    transition: 0.2s;
  }
  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

export default ContactPopup;
