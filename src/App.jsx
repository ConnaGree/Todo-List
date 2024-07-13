import { useState, useEffect, useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import './App.css';
import EditModal from './components/EditModal';
import TaskContentContainer from "./components/TaskContentContainer";
import TaskProvider from './TaskContext';
import TaskInputSection from './components/TaskInputSection';

function App() {

  return (
    <TaskProvider>
      <main>
        <header>
          <TaskInputSection />
        </header>
        <div className="tasks__container mt-[1rem]">
          <TaskContentContainer/>
        </div>
        <EditModal />
      </main>
    </TaskProvider>
  );
}

export default App;
