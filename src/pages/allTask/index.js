import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import TaskCard from "../../components/taskCard";
import SummaryCard from "../../components/summaryCard";
import Button from "../../components/button";
import { ModalContext } from "../../context/modalContext";
import { ResponsiveGrid, StyledSelect, FilterContainer, ListContainer, Box } from "./style";
import { buttonStyle } from "../../constants/styleConstants";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { status } from "../../constants/constants";

function AllTask() {
  const [task, setTask] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [sortByDate, setSortByDate] = useState("asc");

  const { allTask, completedTask, pendingTask, progressingTask } =
    useContext(TaskContext);
  const { handleTaskToEdit } = useContext(ModalContext);

  useEffect(() => {
    setTask(() =>
      allTask
        .filter((value) => value.status.includes(statusFilter))
        .sort((a, b) => {
          if (sortByDate == "desc") {
            return new Date(b.dueDate) - new Date(a.dueDate);
          } else {
            return new Date(a.dueDate) - new Date(b.dueDate);
          }
        }),
    );
  }, [allTask, statusFilter, sortByDate]);

  function onEdit(data) {
    handleTaskToEdit(data);
  }

  function handleSort() {
    setSortByDate((prev) => (prev == "asc" ? "desc" : "asc"));
  }

  return (
    <Box>
      <ResponsiveGrid>
        <SummaryCard title={"Total"} count={allTask.length || 0} />
        <SummaryCard title={"Pending"} count={pendingTask.length || 0} />
        <SummaryCard
          title={"Progressing"}
          count={progressingTask.length || 0}
        />
        <SummaryCard title={"Completed"} count={completedTask.length || 0} />
      </ResponsiveGrid>
      <FilterContainer>
        <StyledSelect
          id="status"
          name="status"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value={`${status.pending}`}>{status.pending}</option>
          <option value={`${status.processing}`}>{status.processing}</option>
          <option value={`${status.completed}`}>{status.completed}</option>
        </StyledSelect>
        <Button
          onClick={handleSort}
          customProps={{ ...buttonStyle, padding: "12px", display: "flex" }}
          disabled={!task.length}
        >
          Sort by date{" "}
          {sortByDate == "asc" ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        </Button>
      </FilterContainer>
      <ListContainer>
        {task?.length ? (
          task?.map((value) => (
            <TaskCard
              task={value}
              onEdit={onEdit}
            />
          ))
        ) : (
          <Box>No Task</Box>
        )}
      </ListContainer>
    </Box>
  );
}

export default AllTask;
