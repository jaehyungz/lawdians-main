import React, { useState } from "react";
import styled from "styled-components";
import { con4 } from "../assets/images";
import { postQuestion } from "../api/question";
const ApplyBox = styled.div`
  padding-top: 138px;
  width: 100%;
  height: 760px;
  background: url(${con4});
  @media only screen and (max-width: 500px) {
    padding-top: 70px;
  }
`;
const Container = styled.div`
  width: 1152px;
  height: 760px;
  margin: 0 auto;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
`;
const Title = styled.h1`
  font-weight: 800;
  color: #fff;
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: -2.25px;
  line-height: 66px;
  margin: 0 0 5px;
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -1px;
  text-align: center;
  margin: 0 0 58px 0;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Form = styled.form`
  width: 100%;
  text-align: center;
`;
const Select = styled.select`
  width: 280px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  float: left;
  font-size: 1rem;
  letter-spacing: -0.8px;
  color: #fff;
  background: transparent;
  @media only screen and (max-width: 1152px) {
    width: 24%;
    float: unset;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Option = styled.option`
  background-color: transparent;
`;
const Input = styled.input`
  width: 280px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  float: left;
  font-size: 1rem;
  letter-spacing: -0.8px;
  color: #fff;
  background: transparent;
  margin-left: 10px;
  @media only screen and (max-width: 1152px) {
    width: 24%;
    float: unset;
    margin-left: 1.33%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin: 10px 0;
  }
`;
const Textarea = styled.textarea`
  margin: 13px 0 0 0;
  width: 100%;
  font-size: 1rem;
  letter-spacing: -0.8px;
  color: #fff;
  height: 100px;
  resize: none;
  font-size: 1rem;
  padding: 5px 0 0 5px;
  background: transparent;
  border: 1px solid #fff;
  font-family: "Noto Sans";
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  ::placeholder {
    font-size: 1rem;
  }
`;
const Checkbox = styled.input`
  float: right;
  width: 24px;
  height: 24px;
  margin-top: 20px;
  background: transparent;
  border: 1px solid #fff;
`;
const Label = styled.label`
  font-weight: 400;
  color: #fff;
  font-size: 1rem;
  letter-spacing: -0.8px;
  float: right;
  margin-top: 23px;
  margin-left: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 0.98rem;
  }
`;
const Button = styled.input`
  width: 200px;
  height: 60px;
  line-height: 60px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  margin-top: 50px;
  @media only screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

function Apply() {
  const [inputs, setInputs] = useState({
    select: "",
    name: "",
    hospital: "",
    phonenumber: "",
    message: "",
  });
  const [checks, setChecks] = useState({
    checkvalue: false,
  });
  const { select, name, hospital, phonenumber, message } = inputs;
  const { checkvalue } = checks;

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    setChecks({
      ...inputs,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!select || select.length < 1) {
      return alert("문의사항을 선택해주세요.");
    }
    if (!name || name.length < 1) {
      return alert("이름을 입력해주세요");
    }
    if (!hospital || hospital.length < 0) {
      return alert("병원(회사)명을 입력해주세요");
    }
    if (!phonenumber || phonenumber.length < 6) {
      return alert("연락처를 입력해주세요");
    }
    if (!message || message.length === "") {
      return alert("메세지를 입력해주세요.");
    }
    if (!checkvalue || checkvalue === false) {
      return alert("약관동의를 해주세요");
    }

    try {
      const result = await postQuestion({
        name,
        phonenumber,
        select,
        hospital,
        message,
      });
      alert("제휴신청이 완료되었습니다.");
      console.log(result);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <ApplyBox className="depth5">
      <Container>
        <Title>제휴신청</Title>
        <SubTitle>로디언즈와 함께할 안심병원/안심변호사를 모집합니다!</SubTitle>
        <Form onSubmit={handleSubmit}>
          <Select name="select" value={select} onChange={inputHandler}>
            <Option value="">문의사항을 선택하세요</Option>
            <Option value="안심병원문의">안심병원문의</Option>
            <Option value="안심변호사문의">안심변호사문의</Option>
            <Option value="사업제휴">사업제휴</Option>
            <Option value="채용문의">채용문의</Option>
            <Option value="기타">기타</Option>
          </Select>
          <Input
            name="name"
            placeholder="이름"
            value={name}
            onChange={inputHandler}
          />
          <Input
            name="hospital"
            placeholder="병원(회사)명"
            value={hospital}
            onChange={inputHandler}
          />
          <Input
            name="phonenumber"
            placeholder="연락처"
            value={phonenumber}
            onChange={inputHandler}
          />
          <Textarea
            name="message"
            placeholder="메세지"
            value={message}
            onChange={inputHandler}
          />
          <div style={{ height: "44px" }}>
            <Label htmlfor="checkvalue">개인정보 수집/이용에 동의합니다.</Label>
            <Checkbox
              name="checkvalue"
              type="checkbox"
              onChange={checkedHandler}
              checked={checkvalue}
            />
          </div>
          <Button type="submit" value="제휴 신청" />
        </Form>
      </Container>
    </ApplyBox>
  );
}

export default Apply;
