import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

app.use((req, res, next) => {
    if (req.url.endsWith('.jsx')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    next();
  });
  