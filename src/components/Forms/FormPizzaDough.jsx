import doughOptions from "../OptionDough";

export default function PizzaDough({ changeFn, value, dataCy }) {
  return (
    <select
      name="dough"
      onChange={changeFn}
      value={value}
      data-cy={dataCy}
      className="bg-[#FAF7F2] w-full pr-12 pl-4 py-2 rounded-md w-40 "
    >
      <option value="" disabled hidden>
        - Hamur Kalınlığı Seç -
      </option>
      {doughOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
