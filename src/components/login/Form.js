import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../style/Button";
import LayoutSection from "../style/PageLayout";

export const FormH2 = styled.h2`
  font-size: ${(props) => props.theme.xxLargeFontSize};
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const LoginFormP = styled.p`
  color: #767676;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
`;

const LoginFormInput = styled.input`
  width: 100%;
  padding: 0.9rem 0;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  }
`;
const LoginFormButton = styled(Button)`
  margin-top: 1.4rem;
  margin-bottom: 2rem;
`;
const SignUpButton = styled.button`
  color: #767676;
  font-size: 1.2rem;
  font-weight: 400;
`;

export default function Form({ title, buttonText }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  const clickNext = () => {
    if(buttonText === "다음"){
      navigate("/profile-setting");
    }
  }

    return (
      <>
        <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
          <FormH2>{title}</FormH2>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <label>
              <LoginFormP>이메일</LoginFormP>
              {title === "로그인" ? (
                <LoginFormInput
                  type="email"
                  required
                  placeholder="이메일 주소를 입력해주세요"
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                />
              ) : (
                <LoginFormInput
                  type="email"
                  required
                  placeholder="이메일 주소를 입력해주세요"
                  {...register("email", {})}
                />
              )}
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
            </label>
            <label>
              <LoginFormP>비밀번호</LoginFormP>
              <LoginFormInput
                type="password"
                required
                placeholder="비밀번호를 설정해 주세요"
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  minLength: {
                    value: 6,
                    message: "비밀번호는 6자 이상이어야 합니다.",
                  },
                })}
              />
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
            </label>
            <LoginFormButton onClick={clickNext}>{buttonText}</LoginFormButton>
          </LoginForm>
          {title === "로그인" ? (
            <SignUpButton type="button" onClick={()=>{navigate('/sign-up')}} >
              이메일로 회원가입
            </SignUpButton>
          ) : null}
        </LayoutSection>
      </>
    );
}
