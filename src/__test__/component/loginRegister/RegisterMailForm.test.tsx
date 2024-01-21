import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterMailForm from "../../../component/loginRegister/RegisterMailForm";
import { RegisterMailFormProps } from "../../../component/loginRegister/types";
import { RegisterParams } from "@/api/login/types";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

const Props: RegisterMailFormProps = {
  openStepTwo: false,
  setOpenStepTwo: (status) => { },
  onBackToOtpSMS: () => { },
  onCloseAll: () => { },
  onClickStepTwo: () => { },
  onLoginFromRegister: () => { },
  mail: "john.doe@example.com",
  setMail: (otp: string) => { },
  registerData: {
    name: "John Doe",
    password: "your_password",
    sex: "Male",
    birth_date: "1990-01-01",
    referral_code: null,
    province_id: "12",
    city_id: "1124",
    religion: "islam",
    address: "your_address",
    title: "Mr.",
    get_offer: null,
    email: "john.doe@example.com",
    mobile_number: "6281234567890",
    otp_email: null,
    otp_mobile_number: null,
  } as RegisterParams,
  setRegisterData: (otp: string) => { },
  setError: (message, imageUrl) => { },
  countDownStepMail: 0, // Example initial value
  setCountDownStepMail: (count: number) => { },
  setShowingCountDownMail: (show: boolean) => { },
};

beforeEach(() => {
  act(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <RegisterMailForm {...Props} />
      </QueryClientProvider>
    );
  });
});

it("Should render mail form", () => {
  const mailInput = screen.getByPlaceholderText("melawai@gmail.com");
  const continueButton = screen.getByRole("button", { name: /Continue/i });

  expect(mailInput).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});

it("Input mail", async () => {
  const mailInput = screen.getByPlaceholderText("melawai@gmail.com");
  const continueButton = screen.getByRole("button", { name: /Continue/i });

  act(() => {
    userEvent.type(mailInput, "john.doe@example.com");
    fireEvent.click(continueButton);
  });

  const updatedMailInput = await screen.findByDisplayValue("john.doe@example.com");

  expect(updatedMailInput).toBeInTheDocument();
});
