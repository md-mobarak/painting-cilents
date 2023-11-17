import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingDate = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const onChangeCalender = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="p-5 border border-green-500 bg-secondary rounded-xl">
      <form>
        <h1 className="text-white text-2xl uppercase my-3 font-semibold">
          My Calendar
        </h1>
        <Calendar onChange={onChangeCalender} value={date} />
        <div className="flex justify-center items-center">
          <button
            //   onClick={() => setShowDate(!showDate)}
            type="submit"
            className="btn btn-primary text-white mt-3 btn-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingDate;
