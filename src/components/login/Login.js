import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../style/Button";
import kakaoLogo from "../../assets/image/logo-kakaotalk.png";
import googleLogo from "../../assets/image/logo-google.png";
import Logo from "../common/Logo";

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 4.4rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.baseFontSize};
  color: #000000;
  background: url(${(props) => props.image}) no-repeat 15px center #ffffff;
  border: 1px solid ${(props) => props.theme.primaryColor};
  margin-bottom: 2.5rem;
`;

const LoginDiv = styled.div`
  margin-top: 9.4rem;
  background-color: #fffaee;
  width: 39rem;
  height: 100%;
  padding: 6rem 3.4rem;
  border-radius: 4rem 4rem 0 0;
`;

const LoginUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 4.9rem;
  font-size: 1.2rem;
`;

const LoginLi = styled.li`
  &::after {
    content: "|";
    margin: 0 1.3rem;
    color: #767676;
  }
  & button {
    color: #767676;
  }
`;

export default function Login() {

  const navigate = useNavigate();

    return (
      <>
        <Logo name="login" />
        <LoginDiv>
          <ul>
            <li>
              <LoginButton image={kakaoLogo} as="a">
                카카오 계정으로 로그인
              </LoginButton>
            </li>
            <li>
              <LoginButton image={googleLogo} as="a">
                구글 계정으로 로그인
              </LoginButton>
            </li>
          </ul>
          <LoginUl>
            <LoginLi>
              <button type="button" onClick={()=>{navigate('/login/email')}}>
                이메일로 로그인
              </button>
            </LoginLi>
            <li>
              <button
                type="button"
                style={{ color: "#767676" }}
                onClick={()=>{navigate('/login/sign-up')}}
              >
                회원가입
              </button>
            </li>
          </LoginUl>
        </LoginDiv>
      </>
    );
  }

