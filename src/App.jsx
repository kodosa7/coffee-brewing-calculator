import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Timer from "./components/Timer";
import Daytime from "./components/Daytime";

export default function App() {
    return (
        <main>
            <div className="container">
                <Header />
                <Calculator />
                <Timer />
                <Daytime />
            </div>
        </main>
    );
};