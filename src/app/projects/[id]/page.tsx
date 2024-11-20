"use client";

import React from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const { id } = React.use(params);
  const [activeTab, SetActiveTab] = React.useState<string>("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] =
    React.useState<boolean>(false);

  return (
    <div>
      {/* MODAL NEW TASKS*/}
      <ProjectHeader activeTab={activeTab} setActiveTab={SetActiveTab} />

      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
