import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSideBar from "./ActivityDetailsSideBar";

interface DetailParam {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParam>> = ({
  match,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { activity, loadActivity, loadingIntial } = rootStore.activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingIntial)
    return <LoadingComponent content="loading activity..."></LoadingComponent>;

  if (!activity) return <h1>Activity not found.</h1>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailsHeader activity={activity}></ActivityDetailsHeader>
        <ActivityDetailsInfo activity={activity}></ActivityDetailsInfo>
        <ActivityDetailsChat></ActivityDetailsChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailsSideBar
          attendees={activity.attendees}
        ></ActivityDetailsSideBar>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
