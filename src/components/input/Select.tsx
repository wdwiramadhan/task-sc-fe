import { Listbox } from "@headlessui/react";
import { Option } from "../../types/Category";

interface SelectProps {
  value: Option;
  setValue: (item: Option) => void;
  options: Array<Option>;
}

export const Select = ({ value, setValue, options }: SelectProps) => {
  return (
    <Listbox value={value} onChange={setValue}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="bg-gray-100 text-sm text-gray-800 w-full text-left px-5 py-2.5 rounded-full flex justify-between items-center">
            <span>{value.label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </Listbox.Button>
          {open && (
            <div className="bg-gray-100 p-5 mt-2 rounded-2xl w-full absolute">
              <Listbox.Options className="flex flex-col gap-1 text-gray-700 text-sm">
                {options.map((item) => (
                  <Listbox.Option
                    key={item.value}
                    value={item}
                    className="cursor-pointer py-1 hover:text-gray-500"
                  >
                    {item.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </div>
      )}
    </Listbox>
  );
};
