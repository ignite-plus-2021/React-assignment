import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Personal_information() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <center><h5 className="mt-bottom"><strong>PERSONAL INFORMATION</strong></h5></center>
        </div>
        <div className="card-action">
          <center>
            <div className="row mt">
              <div className="col s12">
                <h6 style={{ textAlign: "center" }}>
                  <p>

                    <strong>Name:</strong> Keerthana B

                  </p>
                  <p>
                    <strong>Address:</strong> 6th main, Pramod Layout,Bangalore
                  </p>
                  <p>
                    <strong>Father's name:</strong> Amaranath Reddy B
                  </p>
                  <p>
                    <strong>Mother's name:</strong>Leela Madhavi
                  </p>
                </h6>
              </div>


            </div>
          </center>
        </div>
      </div>
    </div>

  );
}
