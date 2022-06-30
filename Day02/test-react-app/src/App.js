import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red"></Hello>
        <Hello color="pink"></Hello>
        <Hello></Hello>
        <Hello></Hello>
      </Wrapper>
    </div>
  );
}

export default App;
