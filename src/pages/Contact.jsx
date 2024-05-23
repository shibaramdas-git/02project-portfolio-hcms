import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledContact = styled.div`
  padding: 80px 6%;
  font-size: 1.5rem;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  figure {
    width: 40%;
    margin-top: 1em;

    img {
      height: 50%;
      width: 100%;
      margin-bottom: 1em;
      border-radius: 8px;
      box-shadow:
        rgba(0, 0, 0, 0.25) 0px 10px 20px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    figure {
      width: 100%;
    }
  }
`;
const Hello = styled.h1`
  @media (max-width: 1024px) {
    font-size: 75px;
  }
  @media (max-width: 768px) {
    font-size: 65px;
  }
`;
const Consent = styled.div`
  font-size: 1rem;
  input {
    margin-top: 2em;
    margin-right: 1em;
  }
`;
const Contactfrom = styled.form`
  margin-top: 1em;
  width: 50%;
  button {
    font-size: 1.2rem;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 8px;
    background-color: #2683fc;
    &:hover {
      background-color: #0057c8;
    }
  }
  input[type="submit"] {
    border: none;
    background: none;
    font-size: inherit;
    width: 100%;
    display: block;
    text-align: right;
    margin-top: 2em;
    &:hover {
      color: #535353;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Input = styled.div`
  margin-bottom: 1em;
  input {
    margin-top: 0.5em;
    font-size: 1.5rem;
    font-weight: lighter;
    color: gray;
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 2px solid lightgray;
    /* background: yellow; */
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
    }
  }
  input[type="checkbox"] {
    width: 40px;
    height: 1em;
  }
`;

const Erromsg = styled.p`
  color: red;
  font-size: 0.95rem;
  padding-top: 8px;
`;
function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmitFun = (data) => {
    console.log(data);
  };
  return (
    <StyledContact>
      <Hello>Say Hello</Hello>
      <Wrapper>
        <figure>
          <img
            src="https://img.freepik.com/premium-vector/contact-us-customer-support-hotline-people-connect-businessman-using-laptop-touching-virtual-screen-contact-icons-email-address-live-chat-internet-wifi_43780-8623.jpg"
            alt=""
          />
        </figure>
        <Contactfrom onSubmit={handleSubmit(onSubmitFun)}>
          <Input>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^[A-Z][a-z]{2,32}$/,
                  message:
                    "First letter should be uppercase, Numbers not allowed",
                },
                minLength: {
                  value: 3,
                  message: "Name should contain atleast three character",
                },
              })}
            />
            {errors.name && <Erromsg>{errors.name.message}</Erromsg>}
          </Input>
          <Input>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email id",
                },
              })}
            />
            {errors.email && <Erromsg>{errors.email.message}</Erromsg>}
          </Input>
          <Input>
            <div>
              <label htmlFor="proposedproject">Your project or message</label>
            </div>
            <input
              type="text"
              id="proposedproject"
              {...register("project", {
                required: {
                  value: true,
                  message: "Required",
                },
                maxLength: {
                  value: 3000,
                  message: "Max 3000 characters are allowed",
                },
              })}
            />
            {errors.project && <Erromsg>{errors.project.message}</Erromsg>}
          </Input>
          <Consent>
            <input
              type="checkbox"
              id="consent"
              {...register("consent", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <span>
              I have read and agree with <strong>Privacy policy</strong> &{" "}
              <strong>Terms of Services</strong>
            </span>
            {errors.consent && <Erromsg>{errors.consent.message}</Erromsg>}
          </Consent>
          <div>
            <input type="submit" value="~ Send" />
          </div>
        </Contactfrom>
      </Wrapper>
    </StyledContact>
  );
}

export default Contact;
