import { useRecoilState } from "recoil";
import { todoListFilterState } from "./states";

const TodoListFilteres = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      {/* value와 filter를 연결하면 최초 selected 옵션이 적용되는 것과 동일*/}
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilteres;
