import BestSeller from "./components/BestSeller/BestSeller";
import "./App.css";
import CommingSoon from "./components/ComingSoon/ComingSoon";
import NewsOnShelves from "./components/NewOnShelves/NewOnShelves";
import BooksEveryOneTalks from "./components/BooksEveryoneTalks/BooksEveryoneTalks";
import SignedEditions from "./components/SignedEditions/SignedEditions";

function App() {
  return (
    <>
      <BestSeller />
      <NewsOnShelves />
      <CommingSoon />
      <BooksEveryOneTalks />
      <SignedEditions />
    </>
  );
}

export default App;
