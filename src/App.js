import React from "react";
import { Routes, Route} from 'react-router-dom';
import { LoginLayout } from "./components/LoginLayout";
import { LoginPage } from "./pages/LoginPage";
import { MainLayout} from "./components/MainLayout";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { Posts } from "./pages/PostsPage";
import { NewPost } from "./pages/NewPost";
import { Contacts } from "./pages/Contacts";
import { EditPost } from "./pages/EditPost";
import { SinglePostPage } from "./pages/SinglePostPage";

function App() {

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path='/login' element={<LoginLayout />}>
          <Route index element={ <LoginPage />} />
        </Route>
        <Route>

        </Route>
        <Route path="/" element={ <MainLayout />}>
          <Route index element={ <MainPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePostPage />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/edit" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
