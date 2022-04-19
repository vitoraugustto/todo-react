import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as Edit } from "../assets/svg/edit.svg";

import {
  Background,
  Box,
  Button,
  Chevron,
  Input,
  Link,
  Loading,
  Margin,
  Padding,
  Row,
  Text,
} from "../components";

import { COLOR_BLACK_800, COLOR_WHITE, TITILLIUM } from "../themes/theme";

import { CATEGORIES } from "./TasksScreen";
import { formatDate, formatTime } from "../utils";
import { fetchSingleTask, updateTask } from "../services/task";

const SingleTaskScreen = () => {
  const location = useLocation();
  const { singleTask } = location.state;

  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState(singleTask);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  const handleEditTitle = () => {
    setEditTitle(true);
    setEditDescription(false);
  };

  const handleEditDescription = () => {
    setEditDescription(true);
    setEditTitle(false);
  };

  const handleOnBlur = () => {
    setEditDescription(false);
    setEditTitle(false);
  };

  const handleUpdateTask = ({ key, value }) => {
    setLoading(true);
    updateTask({ id: task._id, [key]: value }).then((res) => {
      setNewDescription("");
      setNewTitle("");
      fetchUpdatedTask();
      setLoading(false);
    });

    handleOnBlur();
  };

  const fetchUpdatedTask = () => {
    fetchSingleTask({ id: task._id }).then((response) =>
      setTask(response.data)
    );
  };

  useEffect(() => {
    fetchUpdatedTask();
  }, []);

  return (
    <Background style={{ justifyContent: "center" }}>
      <Padding all="16px">
        <Box
          style={{
            borderLeft: `4px solid ${CATEGORIES[task.category].color}`,
          }}
          bgColor={COLOR_BLACK_800}
          borderRadius="4px"
        >
          <Padding all="8px">
            <Text size="16px">Categoria:</Text>
            <Text
              size="20px"
              color={CATEGORIES[task.category].color}
              font={TITILLIUM}
            >
              {CATEGORIES[task.category].label}
            </Text>
            <Margin top="20px" />
            <Text size="16px">Título:</Text>
            {!editTitle ? (
              <Box vCenter onClick={handleEditTitle}>
                <Row style={{ justifyContent: "space-between" }} vCenter>
                  <Text style={{ flex: 1 }} size="28px" font={TITILLIUM}>
                    {task.name}
                  </Text>

                  <TitleIcon
                    loading={loading}
                    task={task}
                    newTitle={newTitle}
                  />
                </Row>
              </Box>
            ) : (
              <Input
                value={newTitle}
                fontSize="28px"
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={() =>
                  handleUpdateTask({ key: "name", value: newTitle })
                }
                autofocus={editTitle}
                style={{ height: "45px" }}
                placeholder="Editar título..."
              />
            )}

            <Margin top="8px" />
            <Text size="16px">Descrição:</Text>
            <Margin top="8px" />
            {!editDescription ? (
              <Box vCenter onClick={handleEditDescription}>
                <Row style={{ justifyContent: "space-between" }} vCenter>
                  <Text
                    style={{ flex: 1 }}
                    size="20px"
                    lineHeight="24px"
                    font={TITILLIUM}
                  >
                    {task.description}
                  </Text>

                  <DescriptionIcon
                    loading={loading}
                    task={task}
                    newDescription={newDescription}
                  />
                </Row>
              </Box>
            ) : (
              <Input
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                onBlur={() =>
                  handleUpdateTask({
                    key: "description",
                    value: newDescription,
                  })
                }
                autofocus={editDescription}
                style={{ height: "45px" }}
                placeholder="Editar descrição..."
              />
            )}

            <Margin top="16px" />
            <Text size="16px" font={TITILLIUM}>
              Criado em {formatDate(task.date)} às {formatTime(task.date)}
            </Text>
          </Padding>
        </Box>
        <Box>
          <Margin top="16px" />
          <Button onClick={null} borderColor={COLOR_WHITE}>
            OK
          </Button>
          <Link to="/todo-react">
            <Button>
              <Chevron color={COLOR_WHITE} position="left" />
              <Margin right="10px" />
              Voltar
            </Button>
          </Link>
        </Box>
      </Padding>
    </Background>
  );
};

const TitleIcon = ({ loading, newTitle, task }) => {
  return loading && newTitle !== "" ? (
    <Loading color={COLOR_WHITE} />
  ) : (
    <Edit fill={COLOR_WHITE} />
  );
};

const DescriptionIcon = ({ loading, newDescription, task }) => {
  return loading && newDescription !== "" ? (
    <Loading color={COLOR_WHITE} />
  ) : (
    <Edit fill={COLOR_WHITE} />
  );
};

export default SingleTaskScreen;
