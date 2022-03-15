import CreateNewPost from "./components/CreateNewPost";
import EditPost from "./components/EditPost";
import ViewAllPosts from "./components/ViewAllPosts";
import ViewIndividual from "./components/ViewIndividual";

const routes = [
    { path: "/", name: "Posts", Component: <ViewAllPosts /> },
    { path: "/posts/:id", name: "View Post", Component: <ViewIndividual /> },
    { path: "/posts/:id/edit", name: "Edit Post", Component: <EditPost /> },
    { path: "/posts/new", name: "Create Post", Component: <CreateNewPost /> }
];

export default routes;