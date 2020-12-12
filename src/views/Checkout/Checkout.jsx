import React, { useState } from "react";
import Button from "../../components/Buttons/Button/Button";
import styles from './Checkout.module.css';
import Reminder from "./Reminder";

const Checkout = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };


  return (
    <div>
      {
        submittedForm ? (
          <Reminder text={submittedForm.get("myDropdown")}/>
          // <div>Your form entry was {submittedForm.get("myText")} and {submittedForm.get("myDropdown")}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                  <label className={styles.labelText}> Name: </label>
                  <input type="text" name="customerName" id="customerNameId" placeholder="John Smith" maxLength="255" size="50"/>
              </div>

              <div className={styles.wrapper}>
                  <label className={styles.labelText}>Tel: </label>
                  <input type="text" name="tel" id="telId" maxLength="255" size="50" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
              </div>

              <div className={styles.wrapper}>
                  <label className={styles.labelText}>Email: </label>
                  <input type="email" name="tel" id="telId" maxLength="255" size="50" placeholder="john_smith@gmail.com" required/>
              </div>

              <div className={styles.wrapper}>     
                <div className={styles.select_box}>
                    <label className={styles.labelText}>Time for meal </label>
                    <select name="myDropdown" id="myDropdownId">
                    <option value="11:30AM">11:30AM</option>
                    <option value="12:30PM">12:30PM</option>
                    <option value="01:30PM">01:30PM</option>
                    <option value="05:30PM">05:30PM</option>
                    <option value="06:30PM">06:30PM</option>
                    <option value="07:30PM">07:30PM</option>
                    <option value="08:30PM">08:30PM</option>
                    <option value="09:30PM">09:30PM</option>
                    </select>
                </div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.selectbox}>
                    <label className={styles.labelText}>Way to get your meal </label>
                    <select name="myDropdown" id="myDropdownId">
                    <option value="Delivery">Delivery</option>
                    <option value="Drive Thru">Drive Thru</option>
                    </select>
                </div>
              </div>

              <div className={styles.check}>
                <ul>
                    <div className={styles.sentence}>We are care about your health and each meal. Please check the following information.</div>
                    <li>
                      <input type="checkbox" id="check1" name="membership" value="true" />
                      <label> I am membership. </label>
                      <input type="text" id="membershipInfo" placeholder="please enter your membership number." maxLength="255" size="50" pattern="[0-9]{5}"required/>
                    </li>
                    <li>
                      <input type="checkbox" id="check2" name="spicy" value="true" />
                      <label> I can eat spicy food. </label>
                    </li>
                    <li>
                      <input type="checkbox" id="check3" name="allergy" value="true" />
                      <label> I am allergic to certain ingredients. </label>
                      <input type="text" name="allergic_ingredients" id="ingredientID" maxLength="255" size="50"/>

                    </li>
                </ul>
              </div>


              <div className={styles.buttonWrapper}>
                  <input className={styles.button} type="submit" value="Submit" />
              </div>
            </div>
          </form>
        )
      }
    </div>
  )
}

export default Checkout;
