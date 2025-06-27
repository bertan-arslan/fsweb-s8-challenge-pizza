import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FormPizzaAdd({
  className,
  changeFn,
  isChecked,
  fieldName,
  value,
  label,
  dataCy,
}) {
  return (
    <label className={`${className} relative`}>
      <input
        type="checkbox"
        onChange={changeFn}
        checked={isChecked}
        name={fieldName}
        value={value}
        data-cy={dataCy}
        className="appearance-none peer w-11 h-11 bg-[#FAF7F2] rounded-md checked:bg-[#FDC913] shrink-0"
      />
      <span className="absolute left-4 hidden peer-checked:block transition-opacity duration-300">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <span>{label}</span>
    </label>
  );
}
