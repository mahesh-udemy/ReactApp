import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDashBoard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          ></ActivityList>
        </List>
      </Grid.Column>

      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          ></ActivityDetails>
        )}
        {editMode && (
          <ActivityForm
            setEditMode={setEditMode}
            activity={selectedActivity!}
          ></ActivityForm>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashBoard;
