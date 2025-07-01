import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
  selectCounter,
} from "@/redux/features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div className="w-[500px] text-white bg-gray-600 flex justify-around p-4 mx-auto rounded-2xl">
      <Button
        variant={"destructive"}
        size={"icon"}
        className="text-2xl cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>

      <span className="text-4xl">{count}</span>

      <Button
        variant={"secondary"}
        size={"icon"}
        className="text-2xl cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </div>
  );
}
