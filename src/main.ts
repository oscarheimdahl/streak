import './app.css';
import App from './App.svelte';

const appDiv = document.getElementById('app');
const app =
  appDiv &&
  new App({
    target: appDiv,
  });

export default app;
