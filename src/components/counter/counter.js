import { connect } from 'react-redux/es/exports';
import * as action from '../redux/action';
import '../controls/controls';
import Controls from '../controls/controls';
function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <Value value={value} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(action.increment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
