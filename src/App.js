import React from "react";
import { TodoList } from "./TodoList";
import { NavigationMenu } from "./NavigationMenu";
import { Profile } from "./Profile";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationMenu />
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
