"use client"
import { useField, useFormikContext } from "formik";
import React from "react";
import Select from "react-select";
import styles from "../mobileTopup.module.scss";

// interface SelectOptionProps {
//   label: string;
//   icon: string;
//   value: string | number;
// }

// export interface SelectsProps {
//   options?: SelectOptionProps[];
//   label?: string;
//   name?: string;
//   placeholder?: string;
//   useCustomStyle?: boolean;
//   handleChange?: (value: string) => void;
//   onInitialValueChange?: (value: string) => void;
//   disabled?: boolean;
// }

export default React.memo(function CustomSelect(props) {
  const {
    options,
    name,
    disabled = false,
    label,
    placeholder,
    handleChange,
    removeDropdown = false,
  }: any = props;
  const [field, meta, helpers] = useField(name);
  const { submitCount } = useFormikContext();
  const hasFeedback = submitCount > 0 && meta?.error ? true : false;

  return (
    //@ts-ignore
    <div controlId={field?.name} className={styles.row}>
      <label>{label}</label>
      <Select
        isDisabled={disabled}
        components={{
          ...(removeDropdown && { DropdownIndicator: () => null }),
          IndicatorSeparator: () => null,
        }}
        formatOptionLabel={(token) => {
          return (
            <div className={styles.containerCol}>
              {token?.icon ? (
                <div>
                  <img
                    className={styles.img}
                    src={token?.icon}
                    alt="Token Icons"
                  />
                </div>
              ) : null}
              <div
                style={{
                  color: "#000",
                  fontSize: "1rem",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                {token?.label}
              </div>
            </div>
          );
        }}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isSelected ? "#fff" : "",
            "&:hover": {
              ...baseStyles,
              backgroundColor: hasFeedback ? "#FFF3D3" : "#FFF3D3",
              border: "none",
            },
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            display: "flex",
            borderColor: "#dc3545",
            border: "none",
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            textAlign: "left",
            backgroundColor: "#fff",
            border: "none",
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            padding: "0.25rem",
            borderRadius: "0.875rem",
            backgroundColor: "#fff",
            border: "2px solid #000",
            boxShadow: "none",
            borderColor: hasFeedback ? "#dc3545" : "#b3b3b3",
            "&:hover": {
              borderColor: hasFeedback ? "#dc3545" : "",
            },
          }),
        }}
        options={options}
        placeholder={placeholder}
        {...field}
        value={options.filter(function (option) {
          return option.value === field?.value;
        })}
        onChange={(e) => {
          let value = e?.value;
          helpers.setValue(value);
          handleChange && handleChange(value);
        }}
        isSearchable={true}
        aria-invalid={hasFeedback}
      />
      {hasFeedback && <div className={styles.error}>{meta.error}</div>}
    </div>
  );
});
