import React from "react";
import { createContainer } from "unstated-next";
export const AuthContainer = createContainer(() => {
  const [token, setToken] = React.useState(null);
  return { token, setToken };
});
