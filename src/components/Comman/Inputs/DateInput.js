import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

function DateInput({ date, onChange }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          value={dayjs(date)}
          onChange={(value) => {
            onChange(value);
          }}
          sx={{
            width: "100%",
            ".MuiInputBase-input": {
              padding: "8px 16px",
              fontSize: ".8rem",
              borderRadius: "8px",
              border: "1px solid #CFCDC9",
            },
          }}
          renderInput={(props) => (
            <div className="flex flex-col items-start">
              {date ? (
                <input
                  {...props}
                  className="text-primary-gray-450 font-lato p-1 font-normal focus:border-0 focus:ring-0 focus:outline-none bg-transparent  text-sm"
                />
              ) : (
                <input
                  {...props}
                  placeholder="Add Due Date"
                  className="text-primary-gray-450 focus:border-0 p-1 focus:ring-0 focus:outline-none bg-transparent  font-lato text-sm"
                />
              )}
            </div>
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default DateInput;
