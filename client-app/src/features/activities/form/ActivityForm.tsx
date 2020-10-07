import React, { FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialActivity,
  createActivity,
  editActivity,
}) => {
  const InitializeActivity = () => {
    if (initialActivity) {
      return initialActivity;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(InitializeActivity);

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          onChange={handleInputChange}
          placeholder="Title"
          value={activity?.title}
        />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={activity?.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          name="category"
          onChange={handleInputChange}
          placeholder="Category"
          value={activity?.category}
        />
        <Form.Input
          name="date"
          onChange={handleInputChange}
          type="datetime-local"
          placeholder="Date"
          value={activity?.date}
        />
        <Form.Input
          name="city"
          onChange={handleInputChange}
          placeholder="City"
          value={activity?.city}
        />
        <Form.Input
          name="venue"
          onChange={handleInputChange}
          placeholder="Venue"
          value={activity?.venue}
        />
        <Button
          positive
          floated="right"
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
