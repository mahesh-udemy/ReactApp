import { IActivity, IAttendee } from "../../models/activity";
import { IUser } from "../../models/user";

export const setActivityProps = (activity: IActivity, user: IUser) => {
  activity.date = activity.date.split(".")[0];
  activity.isGoing = activity.attendees.some(
    (a) => a.username === user.userName
  );
  activity.isHost = activity.attendees.some(
    (a) => a.username === user.userName && a.isHost
  );
  return activity;
};

export const createAttende = (user: IUser): IAttendee => {
  return {
    displayName: user.displayName,
    isHost: false,
    username: user.userName,
    image: user.image!,
  };
};
