import AllRoutes from "./AllRoutes/AllRoutes";
import "./Common.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Or any other PrimeReact theme you prefer
import "primereact/resources/primereact.min.css";
import FadeInOnScroll from "./functions/ScrollTriggerAnimation";


function App() {
  return (
    <div className="App">
      <AllRoutes />
      <FadeInOnScroll />
    </div>
  );
}

export default App;
