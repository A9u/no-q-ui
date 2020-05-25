import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Fingerprint2 from "fingerprintjs2";

import { fetchSlots, createBooking } from "actions";
import SlotBooking from "./SlotBooking";

const Form = ({ todaySlots, getSlots, tomorrowSlots, bookSlot }) => {
  const location = useLocation();
  let storeId = location.state.storeId;
  let [deviceId, setDeviceId] = useState("");

  console.log(storeId);

  useEffect(() => {
    getSlots({ store_id: storeId });
    setTimeout(function () {
      Fingerprint2.get(function (components) {
        let values = components.map(function (component) {
          return component.value;
        });
        setDeviceId(Fingerprint2.x64hash128(values.join(""), 31));
      });
    }, 500);
  }, [storeId]);

  let confirmSlot = (event) => {
    console.log(event.target.dataset);
    let slotId = event.target.dataset.slotid;
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to book this slot?",
      buttons: [
        {
          label: "Yes",
          onClick: () => book(slotId),
        },
        {
          label: "No",
          onClick: () => console.log("clickedno"),
        },
      ],
    });
  };

  const book = (slotId) => {
    let body = { slot_id: slotId, store_id: storeId, device_id: deviceId };
    bookSlot(body);
  };

  return (
    <SlotBooking
      todaySlots={todaySlots}
      handleChange={confirmSlot}
      tomorrowSlots={tomorrowSlots}
    />
  );
};

const mapStateToProps = (state) => ({
  todaySlots: state.todaySlots,
  tomorrowSlots: state.tomorrowSlots,
});

const mapDispatchToProps = (dispatch) => ({
  bookSlot: (body) => {
    dispatch(createBooking(body));
  },
  getSlots: (filterParams) => {
    dispatch(fetchSlots(filterParams));
  },
});
const SlotBookingContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default SlotBookingContainer;
