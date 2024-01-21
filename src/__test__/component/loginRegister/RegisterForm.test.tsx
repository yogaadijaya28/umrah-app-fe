import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterForm from "../../../component/loginRegister/RegisterForm";
import { RegisterFormProps } from "../../../component/loginRegister/types";

const queryClient = new QueryClient();

const Props: RegisterFormProps = {
  openRegister: false,
  onClose: () => { },
  onOpenLogin: () => { },
};

// Mock console.error to suppress the warning about missing keys
const originalError = console.error;
console.error = jest.fn((message) => {
  if (message.includes('Each child in a list should have a unique "key" prop')) {
    return;
  }
  originalError(message);
});

it("Should render form register", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegisterForm {...Props} />
    </QueryClientProvider>
  );

  // Check label are rendered
  expect(screen.getByTestId("mobile-number")).toBeInTheDocument();
  expect(screen.getByTestId("email")).toBeInTheDocument();
  expect(screen.getByTestId("password")).toBeInTheDocument();
  expect(screen.getByTestId("address")).toBeInTheDocument();
  expect(screen.getByTestId("province")).toBeInTheDocument();
  expect(screen.getByTestId("city")).toBeInTheDocument();
  expect(screen.getByTestId("title")).toBeInTheDocument();
  expect(screen.getByTestId("full-name")).toBeInTheDocument();
  expect(screen.getByTestId("gender")).toBeInTheDocument();
  expect(screen.getByTestId("dob")).toBeInTheDocument();

  // Check input are rendered
  const inputMobile = screen.getByTestId("inputMobile-number");
  const inputEmail = screen.getByTestId("inputEmail");
  const inputPassword = screen.getByTestId("inputPassword");
  const inputAddress = screen.getByTestId("inputAddress");
  const inputProvince = screen.getByTestId("inputProvince");
  const inputCity = screen.getByTestId("inputCity");
  const inputTitle = screen.getByTestId("inputTitle");
  const inputFullName = screen.getByTestId("inputFull-name");
  const inputGender = screen.getByTestId("inputGender");
  const inputDob = screen.getByTestId("inputDob");

  expect(inputMobile).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
  expect(inputAddress).toBeInTheDocument();
  expect(inputProvince).toBeInTheDocument();
  expect(inputCity).toBeInTheDocument();
  expect(inputTitle).toBeInTheDocument();
  expect(inputFullName).toBeInTheDocument();
  expect(inputGender).toBeInTheDocument();
  expect(inputDob).toBeInTheDocument();

  // Check button register rendered
  const registerButton = screen.getByRole('button', { name: "Register" })
  expect(registerButton).toBeInTheDocument();

});

afterAll(() => {
  console.error = originalError;
});