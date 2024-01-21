import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "../../../component/loginRegister/LoginForm";
import { LoginFormProps } from "../../../component/loginRegister/types";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const queryClient = new QueryClient();

const Props: LoginFormProps = {
  openLogin: false,
  onClose: () => { },
  onOpenRegister: () => { },
};

it("Should render form login", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <LoginForm {...Props} />
    </QueryClientProvider>
  );

  // Check label are rendered
  expect(screen.getByTestId("labelEmail")).toBeInTheDocument();
  expect(screen.getByTestId("labelPassword")).toBeInTheDocument();

  // Check input are rendered
  const inputEmail = screen.getByTestId("inputEmail");
  const inputPassword = screen.getByTestId("inputPassword");

  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();

  // Check button login rendered
  const loginButton = screen.getByRole('button', { name: "Login" })
  expect(loginButton).toBeInTheDocument();

  act(() => {
    userEvent.type(inputEmail, "john.doe@example.com");
    fireEvent.click(loginButton);
  });

  await waitFor(() => {
    expect(inputEmail).toHaveValue("john.doe@example.com");
  });

});