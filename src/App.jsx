import "./styles.css";
import { STUDENTS } from "./STUDENTS";
import Search from "./Search";
export default function App() {
  return (
    <div className="App">
      <Search STUDENTS={STUDENTS} />
    </div>
  );
}
