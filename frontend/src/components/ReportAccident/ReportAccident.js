import React, {Component} from "react";
import './ReportAccident.css';

class AdditionalDetails extends Component {
  render (){
  return (
      <section class="container">
        <h4 class="text-center font-weight-bold">Additional Details</h4>
        <p class="text-center pb-3">Please provide the following additional details</p>

            <form id="additional-details" action="" method="POST">
                <fieldset>
                    <div class="form-group">
                        <input type="text" class="form-control rounded-lg shadow-none" placeholder="Phone number *" />
                    </div>

                    <div class="form-group">
                        <select name="" id="type-of-accident" class="form-control rounded-lg shadow-none">
                            <option value="">Type of Accident</option>
                            <option value="1">Motor Accident</option>
                            <option value="2">Fire Accident</option>
                            <option value="3">Building collapse</option>
                            <option value="4">Construction Accident</option>
                            <option value="5">other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select name="" id="type-of-accident" class="form-control rounded-lg shadow-none">
                            <option value="">Number of Persons Involved</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">4</option>
                            <option value="5">other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <textarea name="" id="description" cols="10" rows="5" placeholder="Description"
                            class="form-control rounded-lg shadow-none"></textarea>
                    </div>

                    <button class="btn btn-outline-danger">Upload picture</button>
                    <button class="btn btn-danger mt-4">Send</button>
                </fieldset>
            </form>

  </section>
  );
}
}
export default AdditionalDetails;
