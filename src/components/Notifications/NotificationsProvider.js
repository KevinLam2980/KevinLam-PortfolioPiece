import React, { createContext, useContext, useReducer, useEffect } from "react"
import { v4 } from "uuid"
import Notification from "./Notifications"

const NotificationContext = createContext()

const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }]
      case "REMOVE_NOTIFICATION":
        return state.filter(badge => badge.id !== action.id)
      case "PREVENT_OVERFILL":
          return state.splice(1, 5)
      default:
        return state
    }
  }, [])

    // remove oldest notification if there are more than 5
    useEffect(() => {
        if (state.length > 5) {
          dispatch({
            type: "PREVENT_OVERFILL",
          });
        }
      }, [state]);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-wrapper">
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} state={state}/>
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  )
}

// export closure for simple dispatching of notification from anywhere in the application with only 1 import of useNotification
export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props
      }
    })
  }
}

export default NotificationProvider