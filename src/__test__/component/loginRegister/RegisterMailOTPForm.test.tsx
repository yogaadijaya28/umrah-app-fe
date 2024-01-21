import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterMailOTPForm from "../../../component/loginRegister//RegisterMailOTPForm";
import { RegisterMailOTPFormProps } from "../../../component/loginRegister//types";
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

const Props: RegisterMailOTPFormProps = {
  openOtpMail: false,
  onBackToStepTwo: () => { },
  onCloseAll: () => { },
  onLoginFromRegister: () => { },
  onClickVerifyMail: () => { },
  mail: "john.doe@example.com",
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
  setOpenOtpMail: (status: boolean) => { },
  setError: (message: string, imageUrl: string) => { },
  setSuccess: (message: string, imageUrl: string) => { },
  countDownStepMail: 0, // Example initial value
  setCountDownStepMail: (count: number) => {},
  showingCountDownMail: false, // Example initial value
  setShowingCountDownMail: (show: boolean) => {},
};

it("Input mail otp", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegisterMailOTPForm {...Props} />
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
