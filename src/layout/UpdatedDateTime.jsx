/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import moment from "moment";
import { useEffect, useState } from "react";

const UpdatedDate = (props) => {
    const [currentDate, setCurrentDate] = useState({
        modifiedAt: moment(props.date.toDate()).startOf('hour').fromNow()
    });

    useEffect(() => {
        const updated = setInterval(() => {
            const time = moment(props.date.toDate()).startOf('hour').fromNow(true)
            if (time !== currentDate.modifiedAt) {
                setCurrentDate({
                    modifiedAt: time
                })
            }
        }, 3000)

        return () => clearInterval(updated);
    }, [])

    return (
        <>
            {currentDate.modifiedAt}
        </>
    );
}

export default UpdatedDate;