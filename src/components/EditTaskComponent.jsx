import { VStack, Input, Textarea, Button } from "@chakra-ui/react";


function EditTaskComponent({ idTask }) {

  return (
    <>
      <form className="form-edit-task">
        <VStack>
          <Input
            type="text"
            placeholder="Añade un nombre a la tarea"
            focusBorderColor="#006400"
            borderColor={"#00640055"}
            bg={"#00640055"}
            fontSize={"2xl"}
            textAlign={"center"}
            autoFocus
          />
          <Textarea
            placeholder="Añade una descripción"
            focusBorderColor="#006400"
            borderColor={"#00640055"}
            bg={"#00640055"}
            fontSize={"2xl"}
            textAlign={"center"}
            resize="none"
          />
        </VStack>
        <VStack spacing="15px">
          <Button variant="my-style" w="100%" >
            Guardar
          </Button>
          <Button variant="my-style" w="100%" >
            Cancelar
          </Button>
        </VStack>
      </form>
    </>
  );
}

export default EditTaskComponent;
