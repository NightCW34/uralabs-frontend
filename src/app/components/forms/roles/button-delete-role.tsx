"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  IconArrowBackUpDouble,
  IconCheck,
  IconTrash,
} from "@tabler/icons-react";
import { deteteRoleById } from "@/app/actions/post/save-roles";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function ButtonDeleteRole({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deleteRole = async (id: string) => {
    const { data } = await deteteRoleById(parseInt(id));
    router.refresh();
  };

  return (
    <>
      <Button onPress={onOpen} variant="light" size="sm">
        <IconTrash color="red" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-start">
                <IconTrash color="red" /> Eliminar Role
              </ModalHeader>
              <ModalBody>
                <h1>¿Está seguro que desea eliminar el role con id {id}?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  <IconArrowBackUpDouble color="red" />
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    deleteRole(id);
                    onClose();
                  }}
                >
                  <IconCheck color="lime" />
                  Si
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
