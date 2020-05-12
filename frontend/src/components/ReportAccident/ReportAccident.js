import React, {Component} from "react";
import './ReportAccident.css';

class ReportAccident extends Component {
  render (){
  return (
      <section>
        <h4 className="">Additional Details</h4>
        <p className="">Please provide the following additional details</p>

            <form id="additional-details" action="" method="POST">
                <fieldset>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone number *"/>
                    </div>

                    <div className="form-group">
                        <select name="" id="type-of-accident" className="form-control">
                            <option value="">Type of Accident</option>
                            <option value="1">Motor Accident</option>
                            <option value="2">Fire Accident</option>
                            <option value="3">Building collapse</option>
                            <option value="4">Construction Accident</option>
                            <option value="5">other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <select name="" id="type-of-accident" className="form-control">
                            <option value="">Number of Persons Involved</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">4</option>
                            <option value="5">other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <textarea id="description" cols="10" rows="5" placeholder="Description"
                            className="form-control"></textarea>
                    </div>

                    <button className="btn-upload-picture">Upload picture</button>
                    <button className="btn-send">Send</button>
                </fieldset>
            </form>

  </section>
  );
}
}
export default ReportAccident;
