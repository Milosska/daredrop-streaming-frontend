import { RiMailSendFill } from 'react-icons/ri';
import {
  StyledForm,
  FormLabel,
  InputThumb,
  FormInput,
  FormSubmitBtn,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  return (
    <StyledForm>
      <FormLabel htmlFor="subscribe">Subscribe to the latest news!</FormLabel>
      <InputThumb>
        <FormInput
          id="subscribe"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <FormSubmitBtn text="Subscribe" type="submit">
          <RiMailSendFill />
        </FormSubmitBtn>
      </InputThumb>
    </StyledForm>
  );
};
