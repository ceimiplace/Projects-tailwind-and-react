import Navigation from "./Navigation";
import Home from "./Home";
import MainContainer from "./MainContentContainer";
export default function App2() {
  return (
    <div className="flex  border-2 border-grey flex-col max-w-4xl min-h-screen mx-auto">
      <Navigation />
      <MainContainer>
        <Home />
      </MainContainer>
    </div>
  );
}
