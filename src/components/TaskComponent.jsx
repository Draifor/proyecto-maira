import { Grid } from "@chakra-ui/react";
import ImageStatusComponent from "./ImageStatusComponent";
import TaskAccordion from "./TaskAccordion";
import StatusComponent from "./StatusComponent";

function TaskComponent({ idTask }) {

  function renderContent() {
      return (
        <>
          <TaskAccordion
          />
          <StatusComponent isCompleted={"" === "pending" ? false : true} />
        </>
      );
  }

  return (
    <Grid
      alignItems="center"
      mt={5}
    >
      <ImageStatusComponent
      />
      {renderContent()}
    </Grid>
  );
}

export default TaskComponent;
