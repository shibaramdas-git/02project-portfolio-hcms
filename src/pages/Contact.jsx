import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledContact = styled.div`
  padding: 80px 6%;
  div:first-child {
    display: flex;
  }
  img {
    height: 250px;
    width: 95%;
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
const Contactfrom = styled.form`
  width: 50%;
  margin-top: 1em;
`;
const Input = styled.div``;
const Erromsg = styled.p``;
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
      <div>
        <figure>
          <img
            src="https://img.freepik.com/premium-vector/contact-us-customer-support-hotline-people-connect-businessman-using-laptop-touching-virtual-screen-contact-icons-email-address-live-chat-internet-wifi_43780-8623.jpg"
            alt=""
          />
          <figcaption>
            {" "}
            or Write us at{" "}
            <a href="mailto: alev123@gmail.com">alev123@gmail.com</a>
          </figcaption>
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
          <Input>
            <div>
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
              <label htmlFor="consent">
                I have read and agree with <strong>Privacy policy</strong> &{" "}
                <strong>Terms of Services</strong>
              </label>
            </div>

            {errors.consent && <Erromsg>{errors.consent.message}</Erromsg>}
          </Input>
          <button>Send</button>
        </Contactfrom>
      </div>
    </StyledContact>
  );
}

export default Contact;
