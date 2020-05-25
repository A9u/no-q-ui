import React, { useEffect } from "react";
import { ViewStoreDetails } from "./ViewStoreDetails";
import { LogInForm } from "./LogInForm";
import HomePage from "./HomePage";
import { getStoreDetails } from "actions";
import { connect } from "formik";

const ViewStore = ({
    getMyStoreDetails,
    store,
    error
  })   => {
    useEffect(() => {
        debugger
        getMyStoreDetails();
    }, []);
  
    if (store) {
        debugger
      return <ViewStoreDetails store = {store}/>
    } else {
      return (
        <HomePage/>
      );
    }
  };
  
  const mapStateToProps = (state) => ({
    error: state.error && state.error.StoreError,
    store: state.store
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getMyStoreDetails : () => {
            debugger
          dispatch(getStoreDetails())
      }
    };
    
  };

  const ViewStoreDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewStore);
  
  export default ViewStoreDetailsContainer;
  