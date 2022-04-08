// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [
            {
              name: {
                title : "Le S",
                first : "Cédouille",
                last : "Mamamia",
              },
              picture:{
                thumbnail:""
              }
            },
          ]
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load user mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Utilisateur/i));

  expect(container.getElementsByTagName("p")[1].textContent).toBe("Le S Cédouille Mamamia");
  expect(container.getElementsByTagName("img").length).toBe(1);

});
