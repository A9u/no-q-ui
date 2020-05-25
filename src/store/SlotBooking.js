import React from "react";
import NqRadio from "core-components/NqRadio";

const slotList = (slots, handleChange) => {
  console.log(slots);
  return slots.map((slot, index) => (
    <div className="p-2" key={index}>
      <NqRadio
        id={slot.name}
        key={index}
        text={slot.from_time + "-" + slot.to_time}
        sequence={slot.sequence}
        name="slot_id"
        handleChange={handleChange}
        data-slotId={slot.id}
      />
    </div>
  ));
};

const SlotBooking = (props) => {
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div className="container-fluid">
      <p>Please select a slot to book:-</p>
      {props.todaySlots && props.todaySlots.length > 0 && (
        <div>
          <p> Slots for : - {today.toLocaleDateString()} </p>
          <div className="d-flex flex-row flex-wrap">
            {slotList(props.todaySlots, props.handleChange)}
          </div>
        </div>
      )}
      {props.tomorrowSlots && props.tomorrowSlots.length > 0 && (
        <div>
          <p> Slots for: {tomorrow.toLocaleDateString()} </p>
          <div className="d-flex flex-row flex-wrap">
            {slotList(props.tomorrowSlots, props.handleChange)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotBooking;
