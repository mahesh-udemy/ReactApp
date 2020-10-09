import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityStore from "../../../app/stores/activityStore";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ActivityDashBoard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingIntial)
    return (
      <LoadingComponent content="Loading Activities...."></LoadingComponent>
    );
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList></ActivityList>
        </List>
      </Grid.Column>

      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashBoard);
