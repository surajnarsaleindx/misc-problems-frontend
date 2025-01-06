import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LearnReact from './components/organisms/LearnReact';
import Counter from './components/atoms/Counter';
import RootLayout from './components/templates/Root';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route element={<RootLayout />}>
            <Route path="/" element={<LearnReact />} />
          </Route> */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<LearnReact />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
          <Route path="/*" element={<div>Not found</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
