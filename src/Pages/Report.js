import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NetlifyForm from 'react-netlify-form'



const Report = () => {


    // const [email, setEmail] = useState();
    // const [poleId, setPoleID] = useState();
    // const [issue, setIssue] = useState();




    // const encode = (data) => {
    //     return Object.keys(data)
    //         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    //         .join("&");
    //   }

    // const handleSubmit = e => {
    //     var data = `{email: ${email}, poleId:${poleId},issue:${issue}}`
    //     console.log(data)
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({ "form-name": "report", ...data })
    //     })
    //         .then(() => alert("Success!"))
    //         .catch(error => alert(error));

    //     e.preventDefault();
    // };



    return (
        <div>
            <div class="mx-auto mt-4" style={{ display: "block", width: "50vh" }}>
                <NetlifyForm name='report'>
                    {({ loading, error, success }) => (
                        <div>
                            {loading &&
                                <div>Loading...</div>
                            }
                            {error &&
                                <div>Your information was not sent. Please try again later.</div>
                            }
                            {success &&
                                <div>Thank you for contacting us!</div>
                            }
                            {!loading && !success &&
                                <div>
                                    <label style={{ display: "block" }}>
                                        Email:
                                        <br></br>
                                        <input type='email' name='email' required />
                                    </label>
                                    <label> Pole Id:
                                    <br></br>
                                        <input type='text' name='poleId' required />
                                    </label>
                                    <br></br>
                                    <label>
                                        Fault Type?
                                        <br></br>
                                        <select name="issue" type="select" required>
                                            <option value="light_not_working">Light not working</option>
                                            <option value="camera_not_working">Camera Not Working</option>
                                            <option value="cattle_not_detected">Cattle Not Detected</option>
                                            <option value="traffic_not_detected">Traffic Not Detected</option>
                                        </select>
                                    </label>
                                <br></br>
                                <button>Submit</button>
                                </div>
                            }
                        </div>
                    )}
                </NetlifyForm>
        </div>
        </div >
    )
}
export default Report