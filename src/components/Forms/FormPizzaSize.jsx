export default function PizzaSize({ changeFn, value, label, isChecked, dataCy }) {
  const inputId = `size-${value}`;

  return (
    <label htmlFor={inputId} className="cursor-pointer ">
      <input
        type="radio"
        id={inputId}
        onChange={changeFn}
        name="size"
        value={value}
        checked={isChecked}
        className="peer sr-only"
        data-cy={dataCy}
      />
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center
                   bg-[#FAF7F2] text-[#292929]  font-medium
                   peer-checked:bg-[#FDC913] peer-checked:font-bold
                   peer-checked:scale-110 peer-checked:text-lg
                   transition-all duration-300 ease-in-out"
      >
        {label}
      </div>
    </label>
  );
}
