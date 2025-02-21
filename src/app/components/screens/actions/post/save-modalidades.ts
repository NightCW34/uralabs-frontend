"use server";

import feching from "@/app/utils/cliente-http";
import exp from "constants";

export async function saveModalidades(request: FormData) {
  const data = {
    modalidad: request.get("modalidad"),
  };
  const endPoind = `/modalidades`;

  const modalidades = await feching(endPoind, "no-store", "POST", data);

  if (!modalidades.data) {
    throw new Error(modalidades.error);
  }

  return modalidades.data;
}
export const updateModalidad = async (id: number, request: FormData) => {
  const data = {
    modalidad: request.get("modalidad"),
  };

  const endPoind = `/modalidades/${id}`;

  const modalidades = await feching(endPoind, "no-store", "PUT", data);

  if (!modalidades.data) {
    throw new Error(modalidades.error);
  }

  return modalidades.data;
};

export const getModalidades = async (id: number) => {
  const endPoind = `/modalidades/${id}`;
  const data = {};
  const modalidades = await feching(endPoind, "no-store", "GET");
  if (!modalidades.data) {
    throw new Error(modalidades);
  }

  return modalidades.data;
};
