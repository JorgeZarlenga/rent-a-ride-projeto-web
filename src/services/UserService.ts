import { ISignIn } from "../interfaces/signIn";

const signIn = async ({ email, password }: ISignIn) =>
  fetch("usuario/1", {
    method: "GET",
  }).then((response) => response.json());

export { signIn };
