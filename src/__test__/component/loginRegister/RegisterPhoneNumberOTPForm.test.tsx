import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterPhoneNumberOTPForm from "../../../component/loginRegister/RegisterPhoneNumberOTPForm";
import { RegisterPhoneNumberOTPFormProps } from "../../../component/loginRegister/types";
import { RegisterParams } from "@/api/login/types";

const queryClient = new QueryClient();

// Mock console.error to suppress the warning about missing keys
const originalError = console.error;
console.error = jest.fn((message) => {
  if (message.includes('Each child in a list should have a unique "key" prop')) {
    return;
  }
  originalError(message);
});

const Props: RegisterPhoneNumberOTPFormProps = {
  setError: (message: string, imageUrl: string) => { },
  setSuccess: (message: string, imageUrl: string) => { },
  setOpenOtpSMS: (status: boolean) => { },
  openOtpSMS: false,
  onBackToStepOne: () => { },
  onCloseAll: () => { },
  onLoginFromRegister: () => { },
  onClickVerifyNumber: () => { },
  phoneNumber: "6281234567890",
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
  countDownStepSMS: 0, // Example initial value
  setCountDownStepSMS: (count: number) => {},
  showingCountDownSMS: false, // Example initial value
  setShowingCountDownSMS: (show: boolean) => {},
  setRegisterData: (otp: string) => { },
};

it("Should render form", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegisterPhoneNumberOTPForm {...Props} />
    </QueryClientProvider>
  );

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  items.forEach((itemText, index) => {
    const listItem = screen.getByTestId(`otp-input-${index}`);
    expect(listItem).toBeInTheDocument();
  });
});

afterAll(() => {
  console.error = originalError;
});
