import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Edit } from "../assets/svg/edit.svg";
import { ReactComponent as Trash } from "../assets/svg/trash.svg";

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
import { deleteTask, fetchSingleTask, updateTask } from "../services/task";

const SingleTaskScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { singleTask } = location.state;

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [task, setTask] = useState(singleTask);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  const disableButton =
    !(editTitle || editDescription) || editDescription
      ? newDescription === ""
      : editTitle
      ? newTitle === ""
      : null;

  const handleEditTitle = () => {
    setEditTitle(true);
    setEditDescription(false);
  };

  const handleEditDescription = () => {
    setEditDescription(true);
    setEditTitle(false);
  };

  const handleUpdateTask = ({ key, value }) => {
    if (value) {
      setLoading(true);
      updateTask({ id: task._id, [key]: value }).then(() => {
        setNewDescription("");
        setNewTitle("");
        fetchUpdatedTask();
        setLoading(false);
      });
    }

    setEditDescription(false);
    setEditTitle(false);
  };

  const handleDeleteTask = () => {
    setDeleteLoading(true);
    if (deleteLoading) return;

    deleteTask({ id: task._id }).then(() => {
      navigate("/todo-react");
      setDeleteLoading(false);
    });
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
            <Row vCenter style={{ justifyContent: "space-between" }}>
              <Box>
                <Text size="16px">Categoria:</Text>
                <Text
                  size="20px"
                  color={CATEGORIES[task.category].color}
                  font={TITILLIUM}
                >
                  {CATEGORIES[task.category].label}
                </Text>
              </Box>
              {deleteLoading ? (
                <Loading color={COLOR_WHITE} />
              ) : (
                <Box onClick={handleDeleteTask}>
                  <Trash width={32} height={32} fill={COLOR_WHITE} />
                </Box>
              )}
            </Row>
            <Margin top="20px" />
            <Text size="16px">Título:</Text>
            {!editTitle ? (
              <Box vCenter onClick={handleEditTitle}>
                <Row style={{ justifyContent: "space-between" }} vCenter>
                  <Text style={{ flex: 1 }} size="28px" font={TITILLIUM}>
                    {task.name}
                  </Text>

                  <EditSVG loading={loading} text={newTitle} />
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

                  <EditSVG loading={loading} text={newDescription} />
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
                style={{ height: "45px" }}
                placeholder="Editar descrição..."
              />
            )}

            <Margin top="16px" />
            <Text size="16px" font={TITILLIUM}>
              Criado em {formatDate(task.date)} às {formatTime(task.date)}
            </Text>
            {task.date === task.updated_at ? null : (
              <Text size="16px" font={TITILLIUM}>
                Atualizado em {formatDate(task.updated_at)} às{" "}
                {formatTime(task.updated_at)}
              </Text>
            )}
          </Padding>
        </Box>
        <Box>
          <Margin top="16px" />
          <Button
            disabled={disableButton}
            onClick={null}
            borderColor={COLOR_WHITE}
          >
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

const EditSVG = ({ loading, text }) => {
  return loading && text !== "" ? (
    <Loading color={COLOR_WHITE} />
  ) : (
    <Edit width={32} height={32} fill={COLOR_WHITE} />
  );
};

export default SingleTaskScreen;
