import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { allActions } from "./store/actions/allActions";
import { bindActionCreators } from "redux";
import WordCounter from './components/WordCounter';

function App() {
  const amount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { increment, decrement } = bindActionCreators(allActions, dispatch);

  return (
    <div className="App">
      <small>amount:</small>
      <h1>{amount}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement (until 0)</button>
      <hr />
      <WordCounter/>
    </div>
  );
}

export default App;
