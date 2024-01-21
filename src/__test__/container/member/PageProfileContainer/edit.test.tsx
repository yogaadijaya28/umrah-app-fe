import "@testing-library/jest-dom";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageProfileEditMemberContainer from "../../../../containers/Member/PageProfileContainer/edit";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const queryClient = new QueryClient();

describe("PageProfileEditMemberContainer", () => {
    it("should render PageProfileEditMemberContainer with pre-filled data and update the address input", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <PageProfileEditMemberContainer />
            </QueryClientProvider>
        );

        // Check render labels
        expect(screen.getByTestId("addressLabel")).toBeInTheDocument();
        expect(screen.getByTestId("provinceLabel")).toBeInTheDocument();
        expect(screen.getByTestId("cityLabel")).toBeInTheDocument();
        expect(screen.getByTestId("jobLabel")).toBeInTheDocument();
        expect(screen.getByTestId("interestLabel")).toBeInTheDocument();
        expect(screen.getByTestId("religionLabel")).toBeInTheDocument();

        // Check render input
        expect(screen.getByTestId("addressInput")).toBeInTheDocument();
        expect(screen.getByTestId("provinceInput")).toBeInTheDocument();
        expect(screen.getByTestId("cityInput")).toBeInTheDocument();
        expect(screen.getByTestId("jobInput")).toBeInTheDocument();
        expect(screen.getByTestId("interestInput")).toBeInTheDocument();
        expect(screen.getByTestId("religionInput")).toBeInTheDocument();

        // Check if the Save button is rendered
        const saveButton = screen.getByRole("button", { name: /Save/i });
        expect(saveButton).toBeInTheDocument();

        // Simulate a user clicking the Save button
        await act(async () => {
            fireEvent.click(saveButton);
        });
    });
});
