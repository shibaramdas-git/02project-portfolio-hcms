import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledContact = styled.div``;
const Image = styled.div``;
const Hello = styled.div``;
const Contactfrom = styled.form``;
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
      <Image>
        <img
          src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/644e5c4057472ff1d2f76580_contactBG.webp"
          alt="Image"
        />
      </Image>
      <Hello>Say Hello</Hello>
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
      <div>
        or Write us at <a href="mailto: alev123@gmail.com">alev123@gmail.com</a>
      </div>
    </StyledContact>
  );
}

export default Contact;
