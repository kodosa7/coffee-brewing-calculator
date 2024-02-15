import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Timer from "./components/Timer";

export default function App() {
    return (
        <main>
            <Header />
            <div className="grid-container">
                <Calculator />
                <Timer />
            </div>
        </main>
    );
};