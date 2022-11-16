import { IRent } from "../interfaces/rent";

const get = () =>
  fetch("veiculo/listar", { method: "GET" }).then((response) =>
    response.json()
  );

const getById = (id: string) =>
  fetch(`veiculo/listar/${id}`, { method: "GET" }).then((response) =>
    response.json()
  );

const payRent = (data: IRent) =>
  fetch(`reserva/cadastrar`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => response.json());

export { get, getById, payRent };
