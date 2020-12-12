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
            <div>
                <label htmlFor="myTextId">Name: </label>
                <input type="text" name="myText" id="myTextId"/>
            </div>

            <div>
                <label htmlFor="myTextId">Tel: </label>
                <input type="text" name="myText" id="myTextId"/>
            </div>

            <div className={styles.select_box}>
                <label htmlFor="myDropdownId">Time for meal </label>
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

            <div className={styles.selectbox}>
                <label htmlFor="myDropdownId">Way to get your meal </label>
                <select name="myDropdown" id="myDropdownId">
                <option value="Delivery">Delivery</option>
                <option value="Drive Thru">Drive Thru</option>
                </select>
            </div>

            <ul className={styles.checkbox}>
                <div><h4>We are care about your each meal. Please check the following information.</h4></div>
                <li>
                  <input type="checkbox" id="check1" name="membership" value="true" />
                  <label htmlFor="vehicle1"> I am membership. </label>
                </li>
                <li>
                  <input type="checkbox" id="check2" name="spicy" value="true" />
                  <label htmlFor="vehicle2"> I can eat spicy food. </label>
                </li>
                <li>
                  <input type="checkbox" id="check3" name="allergy" value="true" />
                  <label htmlFor="vehicle3"> I am allergic to certain ingredients. </label>
                </li>
            </ul>

            <div>
                <label htmlFor="myTextId">Please write down allergic ingredients.</label>
                <input type="text" name="allergic_ingredients" id="ingredientID"/>
            </div>

            <div>
                <input className={styles.button} type="submit" value="Submit" />
            </div>
          </form>
        )
      }
    </div>
  )
}

export default Checkout;
