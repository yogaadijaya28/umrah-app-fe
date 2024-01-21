import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterPhoneNumberForm from "../../../component/loginRegister/RegisterPhoneNumberForm";
import { RegisterPhoneNumberFormProps } from "../../../component/loginRegister/types";
import { RegisterParams } from "@/api/login/types";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

const Props: RegisterPhoneNumberFormProps = {
  openStepOne: false,
  setOpenStepOne: (status) => { },
  setError: (message, imageUrl) => { },
  onOpenLogin: () => { },
  onClose: () => { },
  onClickStepOne: () => { },
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
  setRegisterData: (phoneNumber) => { },
  phoneNumber: "1234567890",
  setPhoneNumber: (value) => { },
  countDownStepSMS: 0, // Example initial value
  setCountDownStepSMS: (count: number) => {},
  setShowingCountDownSMS: (show: boolean) => {},
};

it("Should render phone number form", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegisterPhoneNumberForm {...Props} />
    </QueryClientProvider>
  );

  const mobileNumberLabel = screen.getByText(/Mobile Number/i);
  const mobileNumberInput = screen.getByPlaceholderText("6281234567890");
  const continueButton = screen.getByRole("button", { name: /Continue/i });

  expect(mobileNumberLabel).toBeInTheDocument();
  expect(mobileNumberInput).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});

it("Input number phone", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegisterPhoneNumberForm {...Props} />
    </QueryClientProvider>
  );

  const mobileNumberInput = screen.getByPlaceholderText("6281234567890");
  const continueButton = screen.getByRole("button", { name: /Continue/i });

  act(() => {
    userEvent.type(mobileNumberInput, "1234567890");
    fireEvent.click(continueButton);
  });

  await waitFor(() => {
    expect(mobileNumberInput).toHaveValue(1234567890);
  });
});
