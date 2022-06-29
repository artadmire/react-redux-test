import "./styles.css";
import BaseUser from './components/BaseUser';
import BaserPost from './components/BaserPost';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <BaseUser></BaseUser>
      <BaserPost></BaserPost>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
