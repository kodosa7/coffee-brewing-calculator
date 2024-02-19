import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Timer from "./components/Timer";

export default function App() {
    return (
        <main>
            <div className="container">
                <Header />
                <Calculator />
                <Timer />
            </div>
        </main>
    );
};