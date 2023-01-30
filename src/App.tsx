import React from "react";
import "./App.css";
import {
  Admin,
  Resource,
  ListGuesser,
  List,
  Datagrid,
  TextField,
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  defaultTheme,
  useResourceContext,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { TodoList, UserList } from "./components/Lists";
import { ThemeOptions } from "@mui/material/styles";
import DashBoard from "./pages/DashBoard";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import ForumIcon from "@mui/icons-material/Forum";
import FeedIcon from "@mui/icons-material/Feed";
import CollectionsRoundedIcon from "@mui/icons-material/Collections";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import Comments from "./pages/Comments";
import Diversity2TwoToneIcon from "@mui/icons-material/Diversity2TwoTone";
import DynamicFeedTwoToneIcon from "@mui/icons-material/DynamicFeedTwoTone";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import Photos from "./pages/Photos";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import { Divider } from "@mui/material";
import Login from "./pages/Login";
import { useAuthenticated } from "react-admin";
import { anyInputAuthProvider, firebaseConfig } from "./services/ServiceWorker";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { PostCreate, PostEdit } from "./components/CreatePosts";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#263238",
      light: "#cfd8dc",
      dark: "#263238",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#f4511e",
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    fontWeightLight: 200,
    body2: {
      fontWeight: "bold",
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       ...(ownerState.variant === "contained" &&
    //         ownerState.color === "primary" && {
    //           backgroundColor: "#202020",
    //           color: "#fff",
    //         }),
    //     }),
    //   },
    // },
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //       boxShadow: "none",
    //     },
    //   },
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 20,
    //     },
    //   },
    // },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       padding: 10,
    //       borderRadius: 20,
    //       margin: 10,
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "whitesmoke",
        },
      },
    },
  },
};
const API_URL =
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=29b31e76ab0a43f2a429669b689dabf2";
// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=29b31e76ab0a43f2a429669b689dabf2

const httpClient = (url: any, options: any) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Custom-Header", "foobar");
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      structuralSharing: false,
    },
    mutations: {
      retryDelay: 10000,
    },
  },
});
const App = () => {
  // useAuthenticated();
  return (
    <Admin
      dashboard={DashBoard}
      queryClient={queryClient}
      authProvider={anyInputAuthProvider}
      loginPage={Login}
      theme={themeOptions}
      dataProvider={dataProvider}
    >
      {/* <Resource name="Dashboard" list={DashBoard} icon={DashboardTwoToneIcon} /> */}
      <Resource name="users" list={Users} icon={Diversity2TwoToneIcon} />
      <Resource
        name="posts"
        create={PostCreate}
        edit={PostEdit}
        list={Posts}
        icon={DynamicFeedTwoToneIcon}
      />
      <Resource name="comments" list={Comments} icon={CommentTwoToneIcon} />
      <Resource name="photos" list={Photos} icon={CollectionsTwoToneIcon} />
      {/* <Divider /> */}
    </Admin>
  );
};

export default App;
interface Article {
  id: string;
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface ArticlesResponse {
  articles: Article[];
  totalResults: number;
}
